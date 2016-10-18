class AddPropheciesToCards < ActiveRecord::Migration[5.0]
  def change
    add_column :cards, :signifier, :text, null: false
    add_column :cards, :crossing, :text, null: false
    add_column :cards, :foundation, :text, null: false
    add_column :cards, :past, :text, null: false
    add_column :cards, :crown, :text, null: false
    add_column :cards, :future, :text, null: false
    add_column :cards, :emotions, :text, null: false
    add_column :cards, :forces, :text, null: false
    add_column :cards, :desires, :text, null: false
    add_column :cards, :outcome, :text, null: false
    add_column :cards, :created_at, :datetime
    add_column :cards, :updated_at, :datetime
  end
end
