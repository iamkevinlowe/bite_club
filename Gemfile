source 'https://rubygems.org'

# silence heroku warning
ruby '2.2.1'

gem 'rails', '4.2.5'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'

# Use Bootsrap 3
gem 'bootstrap-sass'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Turbolinks makes following links in your web application faster.
gem 'turbolinks'

# Build JSON APIs with ease.
gem 'jbuilder', '~> 2.0'

# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Stores environment variables
gem 'figaro'

# Pull in prefilled data from AirTable
gem 'airtable'

# Handle picture attachments
gem 'paperclip', '~> 4.3'

# Using Yelp API for restaurant info
gem 'yelp', require: 'yelp'

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

