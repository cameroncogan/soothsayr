class AddPropheciesToCards < ActiveRecord::Migration[5.0]
  def change
    add_column :cards, :situation, :text, null: false
    add_column :cards, :danger, :text, null: false
    add_column :cards, :safety, :text, null: false
    add_column :cards, :outcome, :text, null: false
    add_column :cards, :created_at, :datetime
    add_column :cards, :updated_at, :datetime
  end
end
