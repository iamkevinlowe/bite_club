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

  def picture_url(size = 'medium')
    if pictures.any?
      return pictures.last.small if size == 'small'
      return pictures.last.medium if size == 'medium'
      return pictures.last.large if size == 'large'
    end
    ""
  end

  def reservations
    self[:reservations] ? 'Yes' : 'No'
  end
end