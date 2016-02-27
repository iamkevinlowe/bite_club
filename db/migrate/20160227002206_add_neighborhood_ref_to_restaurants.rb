class AddNeighborhoodRefToRestaurants < ActiveRecord::Migration
  def change
    add_reference :restaurants, :neighborhood, index: true, foreign_key: true
  end
end
