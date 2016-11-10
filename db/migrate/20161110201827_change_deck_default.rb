class ChangeDeckDefault < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :deck, :integer, default: 2, null: false
  end
end
