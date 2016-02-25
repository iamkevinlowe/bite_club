class CreateListsRestaurants < ActiveRecord::Migration
  def change
    create_table :lists_restaurants do |t|
      t.integer :list_id
      t.integer :restaurant_id
    end
  end
end
