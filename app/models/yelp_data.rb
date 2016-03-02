class YelpData
  attr_reader :rating_url, :phone, :phone_mobile, :address, :name, :coordinate

  def initialize(yelp)
    phone_array = yelp.display_phone.split('-');

    @rating_url = yelp.rating_img_url_large
    @phone = "#{phone_array[0][-1]} (#{phone_array[1]}) #{phone_array[2]}-#{phone_array[3]}"
    @phone_mobile = "tel:#{yelp.display_phone}"
    @address = yelp.location.display_address.join("<br/>").html_safe
    @name = yelp.name
    @coordinate = {
      lat: yelp.location.coordinate.latitude,
      lng: yelp.location.coordinate.longitude
    }
  end
end