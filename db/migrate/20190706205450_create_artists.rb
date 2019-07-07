class CreateArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :city
      t.string :country

      t.timestamps
    end
  end
end
