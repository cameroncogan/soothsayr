class AddColumnsToReveal < ActiveRecord::Migration[5.0]
  def change
    add_column :reveals, :position, :integer, null: false
  end
end
