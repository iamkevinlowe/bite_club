class Picture < ActiveRecord::Base
  belongs_to :cuisine
  belongs_to :list
  belongs_to :neighborhood
  belongs_to :restaurant

  def self.find_or_create_by_urls(large, medium, small)
    picture = Picture.find_or_create_by(large: large)

    unless picture[:medium] == medium && picture[:small] == small
      picture.update_attributes(medium: medium, small: small)
    end
    
    picture
  end
end