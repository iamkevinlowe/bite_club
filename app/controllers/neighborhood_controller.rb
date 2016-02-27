class NeighborhoodController < ApplicationController
  def index
    neighborhoods = Neighborhood.includes(:restaurants).all

    respond_to do |format|
      format.json { render json: neighborhoods }
    end
  end

  # TODO: Redirecting to List.  Consider polymorphic model.
  def show
    # @neighborhood = Neighborhood.includes(restaurants: [:cuisines, :neighborhood]).find(params[:id])
    @list = Neighborhood.includes(restaurants: [:cuisines, :neighborhood]).find(params[:id])

    render "list/show"
  end
end