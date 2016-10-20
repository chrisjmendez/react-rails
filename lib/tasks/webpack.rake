namespace :webpack do
  
  desc %Q{ ›› Webpack - Build }
  task build: :environment do
    sh %{ webpack }
  end  

  desc %Q{ ›› Webpack - Compile }
  task compile: :environment do
    sh %{ webpack }
  end  
  
  desc %Q{ ›› Webpack - Watch Files }
  task watch: :environment do
    sh %{ webpack -w -d }
  end  
end
