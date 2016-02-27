class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name
      t.text :description
      t.string :cost
      t.boolean :reservations
      t.string :instagram
      t.string :yelp_id
      t.string :google_place_id
      t.string :opentable_id

      t.timestamps null: false
    end
  end
end
