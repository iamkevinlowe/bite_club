class NeighborhoodController < ApplicationController
  def index
    neighborhoods = Neighborhood.all

    respond_to do |format|
      format.json { render json: neighborhoods }
    end
  end
end