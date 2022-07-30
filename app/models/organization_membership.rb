class OrganizationMembership < ApplicationRecord
  belongs_to :user
  belongs_to :organization
  belongs_to :invited_by, class_name: "User", foreign_key: :invited_by_id
  belongs_to :removed_by, class_name: "User", foreign_key: :removed_by_id, optional: true

  scope :active, -> { where("organization_memberships.removed_at": nil).where("organization_memberships.accepted_at IS NOT NULL") }

  def active?
    removed_at.blank? && accepted_at.present?
  end
end
