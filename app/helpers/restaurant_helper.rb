module RestaurantHelper
  def format_phone(number)
    number_array = number.split('-')
    "#{number_array[0][-1]} (#{number_array[1]}) #{number_array[2]}-#{number_array[3]}"
  end
end