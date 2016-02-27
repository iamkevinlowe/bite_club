class Cuisine < ActiveRecord::Base
  has_and_belongs_to_many :restaurants
  has_one :picture

  # TODO: Take this out to a superclass or module to include in each "listable" model
  def type
    self.class.name.downcase
  end

  def picture_url
    # picture.image.url(:large) if picture
    picture.source_url if picture
  end

  def as_json(options = {})
    super(
      methods: [:type, :picture_url]
    )
  end
end
