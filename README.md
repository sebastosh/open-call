
[Live Demo](https://frozen-lake-42735.herokuapp.com)

## Open Call

A marketplace web app allowing artists to submit works for review and selection by institutions. There are two types of users, artists and organizations. Artists can signup and upload their artworks into portfolios. Organizations can signup and post open calls for artwork submissions. Artists can submit selected portfolio images to an open call for review by the organization. An organization can select a finalist artist for each of their respective open calls.


## Key Technologies, Packages, and Gems

* Front End

  * React.js

* Back End

  * Rails 5 API
  * JWT token authentication
  * BCrypt
  * Postgres database
  * fast_jsonapi serializer


## Core Features

* Unregistered users can view all active open calls on the front page.
* A call to action directs users to each of their appropriate signup flows. 
* Artists can upload and add metadata to images of their artwork. They are store in groups called portfolios
* Organizations can publish a form based open call, including setting a deadline date for the closure of the open call.
* Artist can apply once to each available open call.
* Artists submit a selection of pre-uploaded portfolio images.
* An organization chooses the finalist artist for each of their open calls

## Demo

[Live Demo](https://frozen-lake-42735.herokuapp.com)



 

For the moment, if needed, change migration files until things get busy in frontend: 
```
rake db:drop db:create db:migrate db:seed
```
* How to run the test suite:
```npm start```

* Active api URLs with full routes

   > localhost:3000/calls
   
   > localhost:3000/orgs

   > localhost:3000/artists
   

