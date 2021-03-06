# Nautilus-Explorer

[Nautilus Explorer](https://ancanautilus.web.app/)

## Description
Welcome aboard! This application is a dashboard for the captain and crew of the Nautilus Explorer. This app allows you to keep track of the vessel's crew members and destinations, as well as species and environmental data identified during the journey.

## Individual Contribution
My individual role in the project included:
* Working on the CSS for the Dashboard and the template for the individual pages for data collections.
* Completing the coding for the authentication of a user - controlling what happens when users are logged in and when they are not. 
* Owning the Destinations collections, which included completing CRUD features for it. 

## Background
This was the first group project in the Data-Driven Apps stage of our bootcamp program. 
As a team, we learned how to work together even better than before - we provided more details about the pull requests to make sure no one was surprised by changes; we added comments in the code to indicate more complex code related to a specific part; we got better at following processes for checking in and merging code so we don’t have that huge conflicts and problems later on. 

Personally, I learned how to debug even better - and see the debugging process as a dialog with code that dynamically evolves and reveals new things - rather than as just a static thing I poke at until I find something meaningful. 

I learned a whole lot more about structuring projects, better understood the sequence of code logic and how all the different components relate, and became better at explaining the relationship between files. 

I was responsible for the CSS for the Dashoard and the template we followed for the pages for each collection. It was fun trying out new CSS styling options - such as the overlaid text on the Dashboard page, the typewriter effect on the page headers, and using transparency. 

This project was intended to let us practice coding CRUD features further, and I improved my understanding of nuances such as setting and getting values of checkboxes on a form and how to prepopulate data on edit forms.

Project instructions available in the Github group project tickets here: 
* https://github.com/nss-evening-cohort-11/nutshell-wookies-sithlords/issues/2
* https://github.com/nss-evening-cohort-11/nutshell-wookies-sithlords/issues/1
* https://github.com/nss-evening-cohort-11/nutshell-wookies-sithlords/issues/3
* https://github.com/nss-evening-cohort-11/nutshell-wookies-sithlords/issues/4
* https://github.com/nss-evening-cohort-11/nutshell-wookies-sithlords/issues/5
* https://github.com/nss-evening-cohort-11/nutshell-wookies-sithlords/issues/6

## Screenshots
Dashboard
![Dashboard](./screenshots-nautilus/dashboard.png)

Destinations
![Destinations](./screenshots-nautilus/destinations.png)

Destinations for Authenticated User
![Destinations_User](./screenshots-nautilus/destinations_user.png)

Adding a New Destination
![Destination_Add](./screenshots-nautilus/destination_add.png)

Editing a Destination
![Destination_Edit](./screenshots-nautilus/destination_edit.png)

## Features
* All users can see the Dashboard and data collections the Nautilus Explorer tracks on its journey: Crew, Destinations, Environmental Readings, and Species. 
* Only authenticated users can manipulate the data - add new items and delete or edit existing items in any of the four collections of data. 
* Users can log in via Google.
* The webpage is fully branded. 

## Tools &  Technologies
Axios API, Bootstrap, CSS, ES6 Modules, ESLint, Firebase, FontAwesome, FreeLogoDesign, Github, Google login authentication, HTML5, Javascript, jQuery, JSON, JSONLint, Lucidchart, moment.js, Moqups, Sass, Webpack

## Contributors
[Zachary Crumpton](https://github.com/ZacCrumpton)

[John Johnson](https://github.com/John-Ryan-Johnson)

[Michele Rawlins](https://github.com/Michele-Rawlins)

[Anca Simon](https://github.com/ancasimon)

## How To Run
1. Clone down this project.
1. Create your own `apiKeys.json` file using the template in the `apiKeys.example.json` file with your own Firebase keys.
1. Make sure you have http-server installed via npm. If not, get it [here](https://www.npmjs.com/package/http-server).
1. At the root of this project, run the following command: hs -p 9999.
1. In your browser, navigate to https://localhost:9999.

## Firebase Deployment
This project has been deployed with Firebase. 
You can access it [here](https://ancanautilus.web.app/). 
