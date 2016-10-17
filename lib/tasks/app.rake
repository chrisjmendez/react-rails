namespace :app do

  desc %Q{ ›› Build App From Scratch }
  task init: :environment do
    #We're skipping turbo links becuase we want to use our own View solution (aka React)
    sh %{ rails _4.3.2_ new my-react-rails --force --database=postgresql --skip-turbolinks --skip-bundle --skip-coffeescript }
    sh %{ rake db:create }
    sh %{ READ THIS: Insert the commands in 'insert_into_application()' into config/application.rb }
    sh %{ rails g scaffold_controller Home index }
    sh %{ rake webpack:compile }
    sh %{  }
    sh %{  }
  end
end



# Add this to config/application.rb
def insert_into_application
  config.generators do |g|
      g.stylesheets = false
      g.javascripts = false
      g.test_framework  :rspec, fixture: false
      g.template_engine :haml
      g.fixture_replacement :factory_girl, dir: 'spec/factories'
  end 
end