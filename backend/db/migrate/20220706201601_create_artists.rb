class CreateArtists < ActiveRecord::Migration[7.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :birthday
      t.string :deathday
      t.string :birthplace
      t.integer :movement_id
      t.text :bio

      t.timestamps
    end
  end
end
