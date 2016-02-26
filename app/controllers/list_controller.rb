class ListController < ApplicationController
  def index
    lists = List.all

    respond_to do |format|
      format.json { render json: lists }
    end
  end

  def show
  end
end