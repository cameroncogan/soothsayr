class AddReveals < ActiveRecord::Migration[5.0]
  def change
    create_table :reveals do |t|
      t.belongs_to :card
      t.belongs_to :reading

      t.timestamps
    end
  end
end
