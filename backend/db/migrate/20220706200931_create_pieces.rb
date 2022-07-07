class CreatePieces < ActiveRecord::Migration[7.0]
  def change
    create_table :pieces do |t|
      t.string :name
      t.string :medium
      t.string :img
      t.integer :year
      t.integer :artist_id
      t.integer :movement_id
      t.integer :medium_id

      t.timestamps
    end
  end
end
