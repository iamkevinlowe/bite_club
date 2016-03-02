class Neighborhood < ActiveRecord::Base
  has_many :restaurants
  has_many :pictures

  # TODO: Take this out to a superclass or module to include in each "listable" model
  def type
    self.class.name.downcase
  end

  def picture_url(size = 'small')
    # pictures.sample.image.url(:large) if pictures.any?
    pictures.empty? ? "" : size == 'small' ? pictures.sample.thumb_url : pictures.sample.source_url
  end

  def as_json(options = {})
    super(
      methods: [:type, :picture_url]
    )
  end
end
