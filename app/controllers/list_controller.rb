class ListController < ApplicationController
  def show
    @list = List.includes(restaurants: [:cuisines, :neighborhood, :pictures]).find(params[:id])
  end
end