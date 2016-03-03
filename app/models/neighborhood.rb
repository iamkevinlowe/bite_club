class Neighborhood < ActiveRecord::Base
  has_many :restaurants
  has_many :pictures

  # TODO: Take this out to a superclass or module to include in each "listable" model
  def type
    self.class.name.downcase
  end

  def picture_url(size = 'medium')
    if pictures.any?
      return pictures.last.small if size == 'small'
      return pictures.last.medium if size == 'medium'
      return pictures.last.large if size == 'large'
    end
    ""
  end

  def as_json(options = {})
    super(
      methods: [:type, :picture_url]
    )
  end
end
