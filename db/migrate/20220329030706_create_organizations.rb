class CreateOrganizations < ActiveRecord::Migration[7.0]
  def change
    create_table :organizations do |t|
      t.string :organization_name
      t.references :created_by, foreign_key: { to_table: :users }
      t.boolean :personal_organization

      t.timestamps
    end

    create_table :organization_memberships do |t|
      t.references :user, foreign_key: true
      t.references :organization, foreign_key: true
      t.references :invited_by, foreign_key: { to_table: :organization_memberships }
      t.references :removed_by, foreign_key: { to_table: :organization_memberships }
      t.datetime :accepted_at, index: true
      t.datetime :removed_at, index: true

      t.timestamps
    end
  end
end
