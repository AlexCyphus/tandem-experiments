// for reference don't modify 
const structure = {
    "users": [
        {
            "firstName": String,
            "lastName": String,
            "gender": String,
            "image": String,
            "languages": [String]
        }
    ],
    "topics": [
        {
            "title": String,
            "description": String, // optional = null 
            "type": String // optional 
        }
    ],
    "flags": {
        "es": [String],
        "en": [String]
    },
}

// editable data
const data = {
    "users": [
        {
            "firstName": 'Chelsea',
            "lastName": 'Smith',
            "gender": 'f',
            "image": './sample-data/users/chelsea.jpg',
            "languages": ['en', 'fr']
        }, 
        {
            "firstName": 'Connor',
            "lastName": 'Clark',
            "gender": 'm',
            "image": './sample-data/users/connor.jpg',
            "languages": ['en']
        },
        {
            "firstName": 'Craig',
            "lastName": 'Bean',
            "gender": 'm',
            "image": './sample-data/users/craig.jpg',
            "languages": ['en', 'de']
        },
        {
            "firstName": 'Emilie',
            "lastName": 'Parker',
            "gender": 'f',
            "image": './sample-data/users/emilie.jpg',
            "languages": ['en', 'pt']
        },
        {
            "firstName": 'Jenny',
            "lastName": 'Chen',
            "gender": 'f',
            "image": './sample-data/users/jenny.jpg',
            "languages": ['zht', 'jp', 'en']
        },
        {
            "firstName": 'Maksim',
            "lastName": 'Adams',
            "gender": 'm',
            "image": './sample-data/users/maksim.jpg',
            "languages": ['ru', 'en']
        },
        {
            "firstName": 'Joshua',
            "lastName": 'Miller',
            "gender": 'm',
            "image": './sample-data/users/joshua.jpg',
            "languages": ['en', 'es']
        },
        {
            "firstName": 'Pedro',
            "lastName": 'Sucre',
            "gender": 'm',
            "image": './sample-data/users/pedro.jpg',
            "languages": ['es', 'en']
        },
        {
            "firstName": 'Ranika',
            "lastName": 'Kamyabi',
            "gender": 'm',
            "image": './sample-data/users/ranika.jpg',
            "languages": ['hi', 'en', 'fr']
        },
        {
            "firstName": 'Sabrina',
            "lastName": 'Barclay',
            "gender": 'm',
            "image": './sample-data/users/sabrina.jpg',
            "languages": ['en', 'ko', 'fr']
        },
        {
            "firstName": 'Sergio',
            "lastName": 'Russo',
            "gender": 'm',
            "image": './sample-data/users/sergio.jpg',
            "languages": ['it', 'fr', 'en']
        },
        {
            "firstName": 'Tamara',
            "lastName": 'Alejandrez',
            "gender": 'm',
            "image": './sample-data/users/tamara.jpg',
            "languages": ['pt', 'es', 'en']
        }
    ],
    "topics": [
        {
            "title": "Grammar tips",
            "description": null,
            "type": "serious"
        },
        {
            "title": "Useful vocab + phrases",
            "description": null,
            "type": "serious"
        },
        {
            "title": "Pronounciation help",
            "description": "Help each other perfect our pronunciation",
            "type": "serious"
        },
        {
            "title": "Learning resources",
            "description": "What are your favorite resources to learn a new language?",
            "type": "serious"
        },
        {
            "title": "Tell me your favorite ways to learn?",
            "description": null,
            "type": "serious"
        },
        {
            "title": "Book recommendations",
            "description": "What books would you recommend (either in your native or practice languages) :)",
            "type": "relaxed"
        },
        {
            "title": "Cooking",
            "description": "What kind of food do you cook in your home country?",
            "type": "relaxed"
        },
        {
            "title": "Travelling",
            "description": "Where have you been travelling? Where would you like to go next?",
            "type": "relaxed"
        },
        {
            "title": "Exploring nature",
            "description": null,
            "type": "relaxed"
        },
        {
            "title": "Music",
            "description": "What is your favorite type of music? What's your favorite band?",
            "type": "relaxed"
        },
        {
            "title": "TV Shows",
            "description": "What is your favorite TV show (in any language)?",
            "type": "relaxed"
        },
        {
            "title": "Sports",
            "description": "What is your favorite sport? Which team do you support?",
            "type": "relaxed"
        },
        {
            "title": "Gossip",
            "description": "What is something interesting that has happened to you recently?",
            "type": "relaxed"
        },
        {
            "title": "What is the meaning of life?",
            "description": null,
            "type": "relaxed"
        },
        {
            "title": "Introduce yourself!",
            "description": null,
            "type": "relaxed"
        },
        {
            "title": "How's your day?",
            "description": "What did you get up to today?",
            "type": "relaxed"
        }
    ],
    "flags": {
        "es": ['./sample_data/flags/argentina.png', './sample_data/flags/chile.png', './sample_data/flags/colombia.png', './sample_data/flags/cuba.png', './sample_data/flags/dominican-republic.png', './sample_data/flags/el-salvador.png', './sample_data/flags/honduras.png', './sample_data/flags/mexico.png', './sample_data/flags/panama.png', './sample_data/flags/peru.png', './sample_data/flags/spain.png', './sample_data/flags/venezuela.png'],
        "en": ['./sample_data/flags/australia.png', './sample_data/flags/canada.png', './sample_data/flags/ireland.png', './sample_data/flags/jamaica.png', './sample_data/flags/new-zealand.png', './sample_data/flags/south-africa.png', './sample_data/flags/united-kingdom.png', './sample_data/flags/united-states.png'],
        "de": ['./sample_data/flags/austria.png', './sample_data/flags/germany.png', './sample_data/flags/switzerland.png'],
        "pt": ['./sample_data/flags/brazil.png', './sample_data/flags/portugal.png'],
        "fr": ['./sample_data/flags/belgium.png', './sample_data/flags/canada.png', './sample_data/flags/france.png'],
        "ko": ['./sample_data/flags/south-korea.png'],
        "zh": ['./sample_data/flags/china.png'],
        "jp": ['./sample_data/flags/japan.png'],
        "ru": ['./sample_data/flags/russia.png'],
        "it": ['./sample_data/flags/italy.png'],
        "misc": ['./sample_data/flags/croatia.png','./sample_data/flags/iceland.png', './sample_data/flags/india.png', './sample_data/flags/netherlands.png', './sample_data/flags/philippines.png', './sample_data/flags/slovakia.png', './sample_data/flags/sweden.png', './sample_data/flags/thailand.png', './sample_data/flags/turkey.png']
    },
}

export default data