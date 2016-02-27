class Neighborhood < ActiveRecord::Base
  has_many :restaurants
  has_many :pictures

  # TODO: Take this out to a superclass or module to include in each "listable" model
  def type
    self.class.name.downcase
  end

  def picture_url
    # pictures.sample.image.url(:large) if pictures.any?
    pictures.sample.source_url if pictures.any?
  end

  def as_json(options = {})
    super(
      methods: [:type, :picture_url]
    )
  end
end
