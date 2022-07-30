class Organization < ApplicationRecord
  has_many :organization_memberships
  has_many :users, through: :organization_memberships

  def send_membership(sender:, receiver:)
    organization_memberships.create!(invited_by: sender, user: receiver)
  end
end
