class Api::RestaurantController < ApplicationController
  def instagram
    restaurant = Restaurant.includes(:pictures).find(params[:id])

    if restaurant.instagram
      render json: InstagramData.new(Instagram.tag_recent_media(restaurant.instagram, count: 40, max_tag_id: params[:max_id]))
    else
      head :no_content
    end
  end

  def yelp
    restaurant = Restaurant.includes(:pictures).find(params[:id])

    if restaurant.yelp_id
      render json: YelpData.new(Yelp.client.business(URI.encode(restaurant.yelp_id)))
    else
      head :no_content
    end
  end
end