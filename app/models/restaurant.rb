class Restaurant < ActiveRecord::Base
  has_and_belongs_to_many :cuisines
  has_and_belongs_to_many :lists
  belongs_to :neighborhood
  has_many :pictures

  def cuisine_names
    cuisines.pluck(:name).join(', ')
  end

  def neighborhood_name
    neighborhood[:name] if neighborhood
  end

  def picture_url(size = 'small')
    # pictures.sample.image.url(:large) if pictures.any?
    pictures.empty? ? "" : size == 'small' ? pictures.sample.thumb_url : pictures.sample.source_url
  end
end