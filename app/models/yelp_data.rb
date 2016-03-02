class YelpData
  attr_reader :rating_url, :phone, :address, :coordinate

  def initialize(yelp)
    phone_array = yelp.display_phone;

    @rating_url = yelp.rating_img_url
    @phone = "#{phone_array[0][-1]} (#{phone_array[1]}) #{phone_array[2]}-#{phone_array[3]}"
    @address = yelp.location.display_address.join("<br/>").html_safe
    @coordinate = "{
      lat: #{yelp.location.coordinate.latitude},
      lng: #{yelp.location.coordinate.longitude}
    }"
  end
end