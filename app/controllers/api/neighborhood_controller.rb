class Api::NeighborhoodController < ApplicationController
  def index
    neighborhoods = Neighborhood.includes(:restaurants, :pictures).all

    respond_to do |format|
      format.json { render json: neighborhoods }
    end
  end
end