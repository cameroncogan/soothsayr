class AddDeckOption < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :deck, :integer, default: 1, null: false
  end
end
