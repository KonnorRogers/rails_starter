class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :confirmable, :registerable,
    :recoverable, :rememberable, :validatable, :masqueradable

  has_many :organization_memberships
  has_many :organizations, through: :organization_memberships
  has_many :notifications, as: :recipient
end
