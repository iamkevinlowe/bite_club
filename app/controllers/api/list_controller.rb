class Api::ListController < ApplicationController
  def index
    lists = List.includes(:restaurants, :picture).all

    respond_to do |format|
      format.json { render json: lists }
    end
  end
end