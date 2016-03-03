class RestaurantController < ApplicationController
  def show
    @restaurant = Restaurant.includes(:pictures).find(params[:id])
    @yelp_data = YelpData.new(Yelp.client.business(URI.encode(@restaurant.yelp_id))) if @restaurant.yelp_id
    # TODO: After June 2016 Instagram will require users to authorize the app and receive an access_token to access media
    # @instagram_data = InstagramData.new(Instagram.client(access_token: ENV['instagram_access_token']).tag_recent_media(@restaurant.instgram)) if @restaurant.instagram
    @instagram_data = InstagramData.new(Instagram.client(client_id: ENV['instagram_client_id']).tag_recent_media(@restaurant.instagram.split(', ').first)) if @restaurant.instagram

    respond_to do |format|
      format.html
      format.json { render json: @yelp_data }
    end
  end
end