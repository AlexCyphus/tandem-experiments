# tandem-experiments

Prototype experiments to run as webviews within the Tandem app on Android. 

### To edit, host, and run in the app

Clone the repo, `cd` into a project to the experiment, install packages with `npm install`, and run locally with `npm start`. Experiments are hosted on Github Pages in seperate repos. Once set up, they can be deployed with `npm run deploy` which runs `gh-pages -d build`.

Tracking points can be added (on Android) with `NativeApp.sendTrackingPoint(eventName); `. Within the `tp()` function in App.js you will find two NativeApp objects. One is used for development and outputs the result to the console, the other is for deployment and detects the NativeApp object passed from the mobile app. One of these should always be commented out. 

You can then launch it as a regular Firebase REF experiment: 
` {"id":"Grp_TabBar_Seen","activation_id":"Grp_Activated","tabbar":{"title":"Groups","icon_active":{"name":"network","color":"#2cc1d7","scale":0.8},"icon_inactive":{"name":"network","color":"#8c8c8c","scale":0.8}},"url":"x"}`.

### webview-starter

A starter pack of reusable components, functions, and screen styles. 

Available components
* ActionButton
* Infocard with overlay (appears from bottom)
* Popup with overlay (placed in upper section of screen)
* Row 
* Slider 

### tandem-twitter
In progress

### livestreaming
In progress

### groups
Testing different group types, sizes, topics, and propensity to start a group chat. Randomized all flags, images, and orders to prevent biases.

![Screenshot](https://github.com/AlexCyphus/tandem-experiments/blob/master/github-images/Groups_1.png)
![Screenshot](https://github.com/AlexCyphus/tandem-experiments/blob/master/github-images/Groups_2.png)
![Screenshot](https://github.com/AlexCyphus/tandem-experiments/blob/master/github-images/Groups_3.png)
![Screenshot](https://github.com/AlexCyphus/tandem-experiments/blob/master/github-images/Groups_4.png)
![Screenshot](https://github.com/AlexCyphus/tandem-experiments/blob/master/github-images/Groups_5.png)
![Screenshot](https://github.com/AlexCyphus/tandem-experiments/blob/master/github-images/Groups_6.png)

### life 
The first iteration of the webview experiments. Launched to ~1000 users to ensure everything was working properly. It was pre-tracking points and used an SQL database to track clicks. Tested a social media feed where users could see different content types and interact with them. 

![Screenshot](https://github.com/AlexCyphus/tandem-experiments/blob/master/github-images/Life_1.png)
![Screenshot](https://github.com/AlexCyphus/tandem-experiments/blob/master/github-images/Life_2.png)
![Screenshot](https://github.com/AlexCyphus/tandem-experiments/blob/master/github-images/Life_3.png)
![Screenshot](https://github.com/AlexCyphus/tandem-experiments/blob/master/github-images/Life_4.png)
