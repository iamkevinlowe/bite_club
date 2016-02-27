class Picture < ActiveRecord::Base
  belongs_to :cuisine
  belongs_to :list
  belongs_to :neighborhood
  belongs_to :restaurant

  has_attached_file :image, styles: { large: "256x256>", small: "36x36>" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def self.find_or_create_by_image(url)
    unless picture = Picture.find_by(source_url: url)
      picture = Picture.create(image: url, source_url: url)
    end
    picture
  end
end