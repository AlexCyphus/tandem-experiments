// const data = {
//     "users": [
//         // need teachers + students
//         {
//             "firstName": "Alex",
//             "lastName": "Cyphus",
//             "gender": "m"
//         },
//     ],
//     "userImages": [],
//     "rooms": [
//         {
//             "title": "Grammar study",
//             "description": "Let's study grammar together!",
//             "type": "" // by default any  
//         }
//     ]
//     // flag bundles
//     // vector images
// }

const structure = {
    "users": [
        {
            "firstName": String,
            "lastName": String,
            "gender": String,
            "image": String // optional
        }
    ],
    "userImages": [
        {
            "gender": String,
            "url": String
        }
    ],
    "rooms": [
        {
            "title": String,
            "description": String,
            "type": String, // optional 
            "image": String // optional 
        }
    ],
    "flags": {
        "es": [String],
        "en": [String],
    },
}