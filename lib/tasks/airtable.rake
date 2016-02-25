namespace :airtable do
  desc 'Loads the database from airtable'

  # TODO: This may be sped up by caching all of the records instead of using #find to query AirTable each time
  task load: :environment do
    client = Airtable::Client.new(ENV['airtable_api_key'])

    cuisines_table = client.table(ENV['airtable_app_id'], "Cuisines")
    lists_table = client.table(ENV['airtable_app_id'], "Lists")
    neighborhoods_table = client.table(ENV['airtable_app_id'], "Neighborhoods")
    restaurants_table = client.table(ENV['airtable_app_id'], "Restaurants")

    at_restaurants = restaurants_table.all
    at_restaurants.each do |at_restaurant|
      restaurant = Restaurant.new(
        name: at_restaurant[:name],
        description: at_restaurant[:description],
        cost: at_restaurant[:cost],
        reservations: at_restaurant[:reservations] == true ? true : false,
        instagram: at_restaurant[:instagram],
        yelp_id: at_restaurant[:yelp_id],
        google_place_id: at_restaurant[:google_place_id],
        opentable_id: at_restaurant[:opentable_id]
      )

      unless at_restaurant[:cuisine].empty?
        at_restaurant[:cuisine].each do |cuisine_id|
          at_cuisine = cuisines_table.find(cuisine_id)
          restaurant.cuisines.build(
            name: at_cuisine[:name]
          )
        end
      end

      unless at_restaurant[:list].empty?
        at_restaurant[:list].each do |list_id|
          at_list = lists_table.find(list_id)
          restaurant.lists.build(
            name: at_list[:name]
          )
        end
      end

      unless at_restaurant[:neighborhood].empty?
        at_neighborhood = neighborhoods_table.find(at_restaurant[:neighborhood].first)
        restaurant.build_neighborhood(
          name: at_neighborhood[:name],
          notes: at_neighborhood[:notes]
        )
      end

      restaurant.save
    end

    puts "#{Restaurant.count} restaurants created."
    puts "#{Cuisine.count} cuisines created."
    puts "#{List.count} lists created."
    puts "#{Neighborhood.count} neighborhoods created."
  end
end