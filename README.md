# React Rails Cheatsheet

### Why React?

React has a few incredible features that make it hard to dismiss: 

- Performance - It's fast.
- Developer Friendliness - It uses the latest and greatest features of Javascript –specifically, Classes– so it's easier to write, read, and maintain code. 
- SEO Friendly - Although React is using Javascript to render views. It does offer a way to pre-render the data so that it's SEO friendly. 
- Open Source - Yes. The community has an incentive to support technologies that are free. 
- Corporate and Community Support - When a corporate sponsor puts money, resources and smart people to the task, it can often times speed up the evolution x 100. 

### Why Rails?

- Performance - It's not as fast as Go or as capable as Erlang but it's still fast enough to get most projects done.
- Developer Friendliness - The technology is stable, easy to maintain and full of StackOverflow solutions.
- SEO Friendly - Yes
- Open Source - Yes. 
- Corporate and Community Support - It doesn't have a corporate sponsor the size of Facebook but It has an incredible open source community through RubyGems



# Install Postgres


If you don't have a database installed, I suggest install Postgres using the Homebrew package manager. Heroku offers a PostgreSQL databas so your local development will easily transfer to production. I have a [mini tutorial here](http://www.chrisjmendez.com/2016/01/10/installing-homebrew-on-mac-os-x/).

**Step 1**

Install Postgres
```language-powerbash
brew install postgres
````

**Step 2**
Start Postgres
```language-powerbash
brew services start postgres  
````



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



