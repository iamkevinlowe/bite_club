class CuisineController < ApplicationController
  def index
    cuisines = Cuisine.all

    respond_to do |format|
      format.json { render json: cuisines }
    end
  end
end