source 'http://rubygems.org'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

gem 'rails', '3.2.3'

gem 'mysql2',  '~> 0.3.11'

# Use unicorn as the web server
# gem 'unicorn'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'therubyracer'
  gem 'execjs'
  gem 'sass-rails'
  gem 'uglifier'
end

gem 'jquery-rails'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger (ruby-debug for Ruby 1.8.7+, ruby-debug19 for Ruby 1.9.2+)
# gem 'ruby-debug'
# gem 'ruby-debug19', :require => 'ruby-debug'

# Bundle the extra gems:
# gem 'bj'
# gem 'nokogiri'
# gem 'sqlite3-ruby', :require => 'sqlite3'
# gem 'aws-s3', :require => 'aws/s3'

# Bundle gems for the local environment. Make sure to
# put test-only gems in this group so their generators
# and rake tasks are available in development mode:
group :development, :test do
  gem 'rspec',       "~> 2.9.0"
  gem 'rspec-rails', "~> 2.9.0"
  gem 'capybara'
  gem 'poltergeist', "~> 0.4.0"
end

group :development do
  gem 'thin'
end

group :test do
end
