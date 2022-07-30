class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :confirmable, :registerable,
    :recoverable, :rememberable, :validatable, :masqueradable

  has_many :organization_memberships, dependent: :destroy
  has_many :organizations, through: :organization_memberships
  has_many :notifications, as: :recipient # Noticed

  belongs_to :current_organization, class_name: "Organization", optional: true

  def active_organizations
    organizations.where(id: active_memberships.pluck(:organization_id))
  end

  def active_memberships
    organization_memberships.active
  end

  def create_personal_organization
    ActiveRecord::Base.transaction do
      organization = Organization.create!(personal_organization: true)
      membership = organization.send_membership(sender: self, receiver: self)
      accept_membership(membership)
      update!(current_organization: organization)
    end
  end

  def accept_membership(membership)
    membership.update!(accepted_at: Time.current)
  end
end
