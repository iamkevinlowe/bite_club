class CuisineController < ApplicationController
  def index
    cuisines = Cuisine.includes(:restaurants).all

    respond_to do |format|
      format.json { render json: cuisines }
    end
  end

  # TODO: Redirecting to List.  Consider polymorphic model.
  def show
    # @cuisine = Cuisine.includes(restaurants: [:cuisines, :neighborhood]).find(params[:id])
    @list = Cuisine.includes(restaurants: [:cuisines, :neighborhood]).find(params[:id])

    render "list/show"
  end
end