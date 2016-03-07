class RestaurantController < ApplicationController
  def show
    @restaurant = Restaurant.includes(:pictures).find(params[:id])
  end
end