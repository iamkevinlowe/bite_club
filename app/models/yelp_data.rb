class YelpData
  attr_reader :rating_url, :phone, :phone_mobile, :address, :name, :coordinate

  def initialize(yelp)
    # Not all businesses have a phone number listed
    phone_array = yelp.display_phone.split('-') if yelp.respond_to? :display_phone

    @rating_url = yelp.rating_img_url_large
    @phone = "#{phone_array[0][-1]} (#{phone_array[1]}) #{phone_array[2]}-#{phone_array[3]}" if phone_array
    @phone_mobile = "tel:#{yelp.display_phone}" if phone_array
    @address = yelp.location.display_address.join("<br/>").html_safe
    @name = yelp.name
    @coordinate = {
      lat: yelp.location.coordinate.latitude,
      lng: yelp.location.coordinate.longitude
    }
  end
end