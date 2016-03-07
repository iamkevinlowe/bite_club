class CuisineController < ApplicationController
  # TODO: Redirecting to List.  Consider polymorphic model.
  def show
    # @cuisine = Cuisine.includes(restaurants: [:cuisines, :neighborhood]).find(params[:id])
    @list = Cuisine.includes(restaurants: [:cuisines, :neighborhood]).find(params[:id])

    render "list/show"
  end
end