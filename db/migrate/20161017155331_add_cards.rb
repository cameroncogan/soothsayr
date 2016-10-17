class AddCards < ActiveRecord::Migration[5.0]
  def change
    create_table :cards do |t|
      t.string :name, null: false
      t.string :image_path, null: false
    end
  end
end
