class RestaurantController < ApplicationController
  def show
    @restaurant = Restaurant.includes(:pictures).find(params[:id])
    @yelp_data = Yelp.client.business(@restaurant.yelp_id)
  end
end