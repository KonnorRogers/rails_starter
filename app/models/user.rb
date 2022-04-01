class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :confirmable, :registerable,
    :recoverable, :rememberable, :validatable, :masqueradable

  has_many :organization_memberships
  has_many :organizations, through: :organization_memberships
  has_many :organization_accounts, through: :organization_memberships
  has_many :notifications, as: :recipient # Noticed

  has_one :selected_account, -> { active_accounts.find_by(selected: true) }
  has_one :selected_organization, -> { selected_account.organization }

  scope :active_memberships, -> { organization_memberships.active }
  scope :active_organizations, -> { organizations.where(id: active_memberships.ids) }
end
