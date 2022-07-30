class AddCurrentOrganizationToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :current_organization_id, :uuid
    add_index :users, :current_organization_id
  end
end
