class InstagramData
  attr_reader :media

  def initialize(instagram)
    @media = instagram.map { |data| data["images"]["standard_resolution"]["url"] }
  end
end