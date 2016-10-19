class AddReading < ActiveRecord::Migration[5.0]
  def change
    create_table :readings do |t|
      t.belongs_to :user, null: false

      t.timestamps
    end
  end
end
