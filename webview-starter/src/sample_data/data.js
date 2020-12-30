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

export default data