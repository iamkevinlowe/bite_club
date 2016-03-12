source 'https://rubygems.org'

# silence heroku warning
ruby '2.2.1'

gem 'rails', '4.2.5'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Build JSON APIs with ease.
gem 'jbuilder', '~> 2.0'

# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Stores environment variables
gem 'figaro'

# Pull in prefilled data from AirTable
gem 'airtable'

# Use Yelp API for restaurant info
# Version 2.1.1 has a conflict with something
gem 'yelp', '2.0.5', require: 'yelp'

# Use Instagram API for restaurant carousel
gem 'instagram'

# Use Browser gem for device detection
gem 'browser'

# Use Owl Carousel
gem 'owlcarousel-rails'

group :development, :test do
  # Use sqlite3 as the database for Active Record
  gem 'sqlite3'

  # Use pry-rails for debugging
  gem 'pry-rails'
end

group :development do
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

group :production do
  # Use postgres for heroku database
  gem 'pg'
  gem 'rails_12factor'
end

