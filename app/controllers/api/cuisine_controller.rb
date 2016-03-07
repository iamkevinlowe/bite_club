class Api::CuisineController < ApplicationController
  def index
    cuisines = Cuisine.includes(:restaurants, :picture).all

    respond_to do |format|
      format.json { render json: cuisines }
    end
  end
end