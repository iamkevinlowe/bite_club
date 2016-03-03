namespace :airtable do
  desc 'Loads the database from airtable'

  task load: :environment do
    Restaurant.delete_all
    Cuisine.delete_all
    List.delete_all
    Neighborhood.delete_all
    Picture.delete_all

    client = Airtable::Client.new(ENV['airtable_api_key'])

    puts "Getting Airtable tables"
    puts "  Getting Restaurants table"
    restaurants_table = client.table(ENV['airtable_app_id'], "Restaurants")
    puts "  Getting Cuisines table"
    cuisines_table = client.table(ENV['airtable_app_id'], "Cuisines")
    puts "  Getting Lists table"
    lists_table = client.table(ENV['airtable_app_id'], "Lists")
    puts "  Getting Neighborhoods table"
    neighborhoods_table = client.table(ENV['airtable_app_id'], "Neighborhoods")
    puts "Finished getting Airtable tables"

    puts "Getting Airtable records"
    puts "  Getting Restaurants records"
    at_restaurants = restaurants_table.all
    puts "  Getting Cuisines records"
    at_cuisines = cuisines_table.all
    puts "  Getting Lists records"
    at_lists = lists_table.all
    puts "  Getting Neighborhoods records"
    at_neighborhoods = neighborhoods_table.all
    puts "Finished getting Airtable records"

    puts "Creating local Restaurant records"
    at_restaurants.each do |at_restaurant|
      puts "Creating Restaurant - #{at_restaurant[:name]}"
      restaurant = Restaurant.new(
        name: at_restaurant[:name].empty? ? nil : at_restaurant[:name],
        description: at_restaurant[:description].empty? ? nil : at_restaurant[:description],
        cost: at_restaurant[:cost].empty? ? nil : at_restaurant[:cost],
        reservations: at_restaurant[:reservations] == true ? true : false,
        instagram: at_restaurant[:instagram].empty? ? nil : at_restaurant[:instagram].gsub('#', '').split(', ').first,
        yelp_id: at_restaurant[:yelp_id].empty? ? nil : at_restaurant[:yelp_id],
        google_place_id: at_restaurant[:google_place_id].empty? ? nil : at_restaurant[:google_place_id],
        opentable_id: at_restaurant[:opentable_id].empty? ? nil : at_restaurant[:opentable_id]
      )

      unless at_restaurant[:pictures].empty?
        puts "  Adding Pictures to Restaurant - #{restaurant[:name]}"
        at_restaurant[:pictures].each do |at_picture|
          large = at_picture[:url]
          medium = at_picture[:thumbnails] ? at_picture[:thumbnails][:large][:url] : nil
          small = at_picture[:thumbnails] ? at_picture[:thumbnails][:small][:url] : nil
          restaurant.pictures << Picture.find_or_create_by_urls(large, medium, small)
        end
      end

      unless at_restaurant[:cuisine].empty?
        at_restaurant[:cuisine].each do |at_cuisine_id|
          at_cuisine = at_cuisines.select { |at_cuisine| at_cuisine[:id] == at_cuisine_id }.first
          puts "  Creating Cuisine - #{at_cuisine[:name]}"
          cuisine = Cuisine.find_or_create_by(name: at_cuisine[:name])

          unless at_cuisine[:icon].empty?
            puts "  Adding Pictures to Cuisine - #{cuisine[:name]}"
            at_cuisine[:icon].each do |at_picture|
              large = at_picture[:url]
              medium = at_picture[:thumbnails] ? at_picture[:thumbnails][:large][:url] : nil
              small = at_picture[:thumbnails] ? at_picture[:thumbnails][:small][:url] : nil
              cuisine.picture = Picture.find_or_create_by_urls(large, medium, small)
            end
          end

          puts "  Adding Cuisine - #{cuisine[:name]}"
          restaurant.cuisines << cuisine
        end
      end

      unless at_restaurant[:list].empty?
        at_restaurant[:list].each do |at_list_id|
          at_list = at_lists.select { |at_list| at_list[:id] == at_list_id }.first
          puts "  Creating List - #{at_list[:list_name]}"
          list = List.find_or_create_by(name: at_list[:list_name])

          unless at_list[:cover].empty?
            puts "  Adding Pictures to List - #{list[:name]}"
            at_list[:cover].each do |at_picture|
              large = at_picture[:url]
              medium = at_picture[:thumbnails] ? at_picture[:thumbnails][:large][:url] : nil
              small = at_picture[:thumbnails] ? at_picture[:thumbnails][:small][:url] : nil
              list.picture = Picture.find_or_create_by_urls(large, medium, small)
            end
          end

          puts "  Adding List - #{list[:name]}"
          restaurant.lists << list
        end
      end

      unless at_restaurant[:neighborhood].empty?
        at_neighborhood = at_neighborhoods.select { |at_neighborhood| at_neighborhood[:id] == at_restaurant[:neighborhood].first }.first
        puts "  Creating Neighborhood - #{at_neighborhood[:name]}"
        neighborhood = Neighborhood.find_or_create_by(
          name: at_neighborhood[:name],
          notes: at_neighborhood[:notes]
        )

        unless at_neighborhood[:pictures].empty?
          puts "  Adding Pictures to Neighborhood - #{neighborhood[:name]}"
          at_neighborhood[:pictures].each do |at_picture|
            large = at_picture[:url]
            medium = at_picture[:thumbnails] ? at_picture[:thumbnails][:large][:url] : nil
            small = at_picture[:thumbnails] ? at_picture[:thumbnails][:small][:url] : nil
            neighborhood.pictures << Picture.find_or_create_by_urls(large, medium, small)
          end
        end

        puts "  Adding Neighborhood - #{neighborhood[:name]}"
        restaurant.neighborhood = neighborhood
      end

      restaurant.save
      puts "Finished creating Restaurant - #{restaurant[:name]}"
    end

    puts "#{Restaurant.count} restaurants created."
    puts "#{Cuisine.count} cuisines created."
    puts "#{List.count} lists created."
    puts "#{Neighborhood.count} neighborhoods created."
    puts "#{Picture.count} pictures created."
  end
end