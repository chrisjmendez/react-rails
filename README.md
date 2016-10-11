# React Rails Cheatsheet

# Create new Rails app

Since we're going to to use React as our view, we're going to turn off ```turbolinks``` and ```coffeescript```.

I'm also picking Rails ```4.2.5``` because it is supported by [Heroku's infrastructure](https://github.com/heroku/ruby-getting-started/blob/master/Gemfile).


```language-powerbash
rails _4.2.5_ new my-react-rails --force --database=postgresql --skip-turbolinks --skip-bundle --skip-coffeescript
```



## Install React

**Step 1**

Modify your Gemfile
```language-ruby
...
gem 'sdoc', '~> 0.4.0', group: :doc


#CHANGED
# User Authentication
gem 'devise'
# Dot Environment Variables
gem 'dotenv-rails', :groups => [:development, :test]
# React Rails
gem 'react-rails', '~> 1.4.0'
# Automagically restart web server
gem 'rerun', :groups => [:development, :test]
# Populate fake data
gem 'populator', :groups => [:development, :test]
gem 'faker', :groups => [:development, :test]


group :development, :test do
...
```

**Step 2**

Create a Home controller with an index view
```language-powerbash
rails g scaffold_controller Home index
```


**Step 3**

Add the React Javascript to ```assets/javascripts/application.js```.

```language-javascript

//= require jquery
//= require jquery_ujs
//CHANGED - Start
//= require react
//= require react_ujs
//CHANGED - End
//= require_tree .

```

**Step 4**

Create a Main.jx file.

```language-powerbash
nano app/assets/javascripts/main.jsx
```
