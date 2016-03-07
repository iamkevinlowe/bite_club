class NeighborhoodController < ApplicationController
  # TODO: Redirecting to List.  Consider polymorphic model.
  def show
    # @neighborhood = Neighborhood.includes(restaurants: [:cuisines, :neighborhood]).find(params[:id])
    @list = Neighborhood.includes(restaurants: [:cuisines, :neighborhood]).find(params[:id])

    render "list/show"
  end
end