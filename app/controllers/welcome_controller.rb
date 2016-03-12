class WelcomeController < ApplicationController
  def landing
    @lists = List.all + Cuisine.all + Neighborhood.all
  end
end