class Restaurant < ActiveRecord::Base
  has_and_belongs_to_many :cuisines
  has_and_belongs_to_many :lists
  belongs_to :neighborhood

  def cuisine_names
    cuisines.pluck(:name).join(', ')
  end

  def neighborhood_name
    neighborhood[:name] if neighborhood
  end
end