# tandem-experiments

Prototype experiments to run as webviews within the Tandem app on Android. 

### To edit, host, and run in the app

Clone the repo, `cd` into a project to the experiment, install packages with `npm install`, and run locally with `npm start`. Experiments are hosted on Github Pages in seperate repos. Once set up, they can be deployed with `npm run deploy` which runs `gh-pages -d build`.

Tracking points can be added (on Android) with `NativeApp.sendTrackingPoint(eventName); `. Within the `tp()` function in App.js you will find two NativeApp objects. One is used for development and outputs the result to the console, the other is for deployment and detects the NativeApp object passed from the mobile app. One of these should always be commented out. 

You can then launch it as a regular Firebase REF experiment: 
` {"id":"Grp_TabBar_Seen","activation_id":"Grp_Activated","tabbar":{"title":"Groups","icon_active":{"name":"network","color":"#2cc1d7","scale":0.8},"icon_inactive":{"name":"network","color":"#8c8c8c","scale":0.8}},"url":"x"}`.

### available functions 

// tracking points
`window.NativeApp.sendTrackingPoint(eventName)` => returns nothing

// get data
`window.NativeApp.getMyProfile()` => returns a JSON string to be parsed
`window.NativeApp.getPartners()` => returns a string of an array of objects to be parsed

If you're interested in the structure of the data it's at the bottom of this document.

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

<p>
<img src="https://github.com/AlexCyphus/tandem-experiments/blob/master/github-images/Groups_1.png" width="200">
<img src="https://github.com/AlexCyphus/tandem-experiments/blob/master/github-images/Groups_2.png" width="200">
<img src="https://github.com/AlexCyphus/tandem-experiments/blob/master/github-images/Groups_3.png" width="200">
<img src="https://github.com/AlexCyphus/tandem-experiments/blob/master/github-images/Groups_4.png" width="200">
<img src="https://github.com/AlexCyphus/tandem-experiments/blob/master/github-images/Groups_5.png" width="200">
<img src="https://github.com/AlexCyphus/tandem-experiments/blob/master/github-images/Groups_6.png" width="200">
</p>

![test image size](/img/post-bg-2015.jpg){:class="img-responsive"}


### life 
The first iteration of the webview experiments. Launched to ~1000 users to ensure everything was working properly. It was pre-tracking points and used an SQL database to track clicks. Tested a social media feed where users could see different content types and interact with them. 
<p>
<img src="https://github.com/AlexCyphus/tandem-experiments/blob/master/github-images/Life_1.png" width="200">
<img src="https://github.com/AlexCyphus/tandem-experiments/blob/master/github-images/Life_2.png" width="200">
<img src="https://github.com/AlexCyphus/tandem-experiments/blob/master/github-images/Life_3.png" width="200">
<img src="https://github.com/AlexCyphus/tandem-experiments/blob/master/github-images/Life_4.png" width="200">
</p>


### JSON structures

getProfile() => string
```
{
  "age": 31,
  "firstName": "Dont Delete Me Pls Very Very Very Very Very Very",
  "gender": "M",
  "learnLanguages": [
    {
      "code": "zh-hant",
      "id": 201,
      "isoName": "Chinese (Traditional)",
      "level": "50",
      "name": "中文 (繁體)"
    },
    {
      "code": "zh",
      "id": 184,
      "isoName": "Chinese (Simplified)",
      "level": "10",
      "name": "中文 (简体)"
    },
    {
      "code": "en",
      "id": 38,
      "isoName": "English",
      "level": "10",
      "name": "English"
    }
  ],
  "location": {
    "isVisible": true,
    "type": "geolocationname",
    "value": "Berlin, Germany"
  },
  "pictures": {
    "thumbnail": "https://beta-s3-bucket-zswt7xe3znhl.s3.us-east-2.amazonaws.com/c9/39/53803c06420b891601a12d9b5f3d9594.jpg",
    "photo": "https://beta-s3-bucket-bmpypwnfycfp.s3.us-east-2.amazonaws.com/da/58/453a954baed609f505a26ebed81750e3.jpg"
  },
  "speakLanguages": [
    {
      "code": "pt",
      "id": 131,
      "isoName": "Portuguese",
      "level": "250",
      "name": "Português"
    },
    {
      "code": "es",
      "id": 40,
      "isoName": "Spanish",
      "name": "Español"
    }
  ]
}
```

getPartners() => string
```
[
  {
    "firstName": "Bao",
    "photo": "https://beta-s3-bucket-bmpypwnfycfp.s3.us-east-2.amazonaws.com/42/d8/d10f3862011cd7772287930dede421b7.jpg"
  },
  {
    "firstName": "محمد",
    "photo": "https://beta-s3-bucket-bmpypwnfycfp.s3.us-east-2.amazonaws.com/86/16/26a66ccac85e5a3dbd9aee996c485f83.jpg"
  },
  {
    "firstName": "Andreita",
    "photo": "https://beta-s3-bucket-zswt7xe3znhl.s3.us-east-2.amazonaws.com/12/b9/b52d7aab3a887294b6874e10a0845bf3.jpg"
  }
]
```

Note: language levels are denoted in the following way...

Native: 250
Fluent: ““
Advanced: 100
Intermediate: 50
Beginner: 10
