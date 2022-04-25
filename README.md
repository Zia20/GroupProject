# GroupProject - Mellow

## Project 2. March 29 to May 6 2022. InceptionU. 

Project Title: How Might We Improve the Communication from citizen to city with parks and recreation.

## **Team Members** [ Alaf Emmanuel, Zia Hassan, Paul Neumann, Yulia Sinko]
Alaf----| alafonye at gmail.com  
Zia --| hassanzia3 at gmail.com
Yulia---| yulias.linc at gmail.com  
Paul----| neumann4 at gmail.com   



## Links
Project2 on GitHub Git Clone https://github.com/Zia20/GroupProject

## Data Sources Recreation and Culture
https://data.calgary.ca/browse?category=Recreation+and+Culture&sortBy=newest

## Running Project2
nodemon server.js   //Run server.js Backend
https://localhost:3000 //Launch in Browser
## Install
npm install - node_modules
npm install react-scripts --save 
npm install react-icons
npm install react-map-gl

## Browser URLS
https://localhost:3000   //Launch browser this location
https://localhost:3000/upload
https://localhost:3000/weather
https://localhost:3000/login
https://localhost:3000/signup

## Mongo Atlas 
--Related files--
mongoose.js add consolelog(checkURL);
.env //no comments allowed in .env ADDED:MONGO_URL=mongodb+srv://mellow789:mellow789@cluster0.xt5qk.mongodb.net/project2789?retryWrites=true&w=majority

## Mongoose Steps
First be sure you have MongoDB and Node.js installed.

#Critical Errors
npm ERR! JSON.parse Failed to parse JSON data.



## Project-Tree Visual Studio Code Extension Updated to March 29-April 04, 2022. ctrl+shift+p-->Project-Tree
```js
GroupProject
├─ Backend
│  ├─ .env
│  ├─ models
│  │  ├─ parks.js
│  │  └─ users.js
│  ├─ mongoose.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ images
│  │  │  ├─ girlphone.png
│  │  │  └─ voice.png
│  │  └─ index.html
│  ├─ routes
│  │  ├─ loginRouter.js
│  │  ├─ parkRouter.js
│  │  ├─ signupRouter.js
│  │  ├─ uploadRouter.js
│  │  └─ weatherRouter.js
│  └─ server.js
├─ Frontend
│  └─ mellowgroup
│     ├─ mellowgroup@0.1.0
│     ├─ package-lock.json
│     ├─ package.json
│     ├─ public
│     │  ├─ favicon.ico
│     │  ├─ index.html
│     │  ├─ logo192.png
│     │  ├─ logo512.png
│     │  ├─ manifest.json
│     │  └─ robots.txt
│     ├─ react-scripts
│     ├─ README.md
│     └─ src
│        ├─ App.css
│        ├─ App.js
│        ├─ App.test.js
│        ├─ Components
│        │  ├─ GoogleApiWrapper.jsx
│        │  ├─ Navigation.jsx
│        │  └─ WordCount.jsx
│        ├─ images
│        │  └─ falling_trees.png
│        ├─ index.css
│        ├─ index.js
│        ├─ logo.svg
│        ├─ reportWebVitals.js
│        └─ setupTests.js
├─ package-lock.json
└─ README.md
```




## Sat Apr 16 2022
```
GroupProject
├─ Backend
│  ├─ .env
│  ├─ models
│  │  ├─ complains.js
│  │  ├─ parks.js
│  │  └─ users.js
│  ├─ mongoose.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ images
│  │  │  ├─ girlphone.png
│  │  │  └─ voice.png
│  │  └─ index.html
│  ├─ routes
│  │  ├─ complainRouter.js
│  │  ├─ loginRouter.js
│  │  ├─ parkRouter.js
│  │  ├─ signupRouter.js
│  │  ├─ uploadRouter.js
│  │  └─ weatherRouter.js
│  └─ server.js
├─ Frontend
│  ├─ mellowgroup
│  │  ├─ mellowgroup@0.1.0
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ public
│  │  │  ├─ favicon.ico
│  │  │  ├─ index.html
│  │  │  ├─ logo192.png
│  │  │  └─ manifest.json
│  │  ├─ react-scripts
│  │  ├─ README.md
│  │  └─ src
│  │     ├─ App.css
│  │     ├─ App.js
│  │     ├─ App.test.js
│  │     ├─ Components
│  │     │  ├─ Accross.jsx
│  │     │  ├─ Campground.js
│  │     │  ├─ Cross.jsx
│  │     │  ├─ ErrorPage.js
│  │     │  ├─ Footer.js
│  │     │  ├─ GoogleApiWrapper.jsx
│  │     │  ├─ Maps.jsx
│  │     │  ├─ Navigation.jsx
│  │     │  ├─ Parks.js
│  │     │  ├─ Ratings.jsx
│  │     │  ├─ Recreation.js
│  │     │  ├─ Search.js
│  │     │  ├─ Signup.js
│  │     │  ├─ Web.jsx
│  │     │  └─ WordCount.jsx
│  │     ├─ Fonts.js
│  │     ├─ images
│  │     │  ├─ alone.jpg
│  │     │  ├─ campfire.jpg
│  │     │  ├─ camping.png
│  │     │  ├─ circle.jpg
│  │     │  ├─ city.png
│  │     │  ├─ counting.png
│  │     │  ├─ dog.png
│  │     │  ├─ falling_trees.png
│  │     │  ├─ fire.png
│  │     │  ├─ globe.png
│  │     │  ├─ globeBG.png
│  │     │  ├─ ipad.png
│  │     │  ├─ jogging.png
│  │     │  ├─ joggingBG.png
│  │     │  ├─ mobile.png
│  │     │  ├─ ney.png
│  │     │  ├─ recording.png
│  │     │  ├─ Ukraine.png
│  │     │  ├─ upload.png
│  │     │  ├─ urban.png
│  │     │  ├─ walking.png
│  │     │  └─ world.png
│  │     ├─ index.css
│  │     ├─ index.js
│  │     ├─ logo.svg
│  │     ├─ reportWebVitals.js
│  │     └─ setupTests.js
│  └─ package-lock.json
├─ JSONdebuggerText.MD
├─ package-lock.json
├─ package.json
└─ README.md

```
