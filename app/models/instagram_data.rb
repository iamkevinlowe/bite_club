class InstagramData
  attr_reader :media, :max_id

  def initialize(instagram)
    @media = instagram.map { |data| data["images"]["standard_resolution"]["url"] }
    @max_id = instagram.pagination.next_max_tag_id
  end
end