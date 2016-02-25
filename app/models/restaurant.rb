class Restaurant < ActiveRecord::Base
  has_and_belongs_to_many :cuisines
  has_and_belongs_to_many :lists
  belongs_to :neighborhood
end