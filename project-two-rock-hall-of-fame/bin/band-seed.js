const mongoose = require('mongoose');

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/project-two-rock-hall-of-fame";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const databaseName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${databaseName}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

const Band = require('../models/Band.model')

const bandSeed = [
  {
    "name": "The Doors",
    "bandPicture": "/images/bands/TheDoors.jpg",
    "origin": "United States",
    "year": "1965",
    "members": [
      "Jim Morrison",
      "Ray Manzarek",
      "Robby Krieger",
      "John Densmore"
    ],
    "genres": ["Rock", "Psychedelic Rock", "Blues Rock"]
  },
  {
    "name": "Led Zeppelin",
    "bandPicture": "/images/bands/LedZeppelin.jpg",
    "origin": "England",
    "year": "1968",
    "members": ["Jimmy Page", "Robert Plant", "John Bonham", "John Paul Jones"],
    "genres": ["Rock", "Blues", "Blues Rock", "Hard Rock", "Heavy Metal"]
  },
  {
    "name": "Santana's Blues Band",
    "bandPicture": "/images/bands/SantanasBluesBand.jpg",
    "origin": "United States",
    "year": "1969",
    "members": [
      "Michael Shrieve",
      "Carlos Santaa",
      "Gregg Rollie",
      "Jose 'Chepito' Areas",
      "David Brown",
      "Michael Carabello"
    ],
    "genres": ["Rock", "Blues", "Blues Rock", "Latin Rock", "Latin Jazz"]
  },
  {
    "name": "Pink Floyd",
    "bandPicture": "/images/bands/TheRollingStones.jpg",
    "origin": "England",
    "year": "1968",
    "members": [
      "Roger Waters",
      "Syd Barrett",
      "David Gilmour",
      "Richard Wright",
      "Nick Mason"
    ],
    "genres": [
      "Progressive Rock",
      "Psychedelic Rock",
      "Blues Rock",
      "Rock",
      "Experimental Rock"
    ]
  },
  {
    "name": "The Rolling Stones",
    "bandPicture": "/images/bands/TheRollingStones.jpg",
    "origin": "England",
    "year": "1962",
    "members": [
      "Brian Jones",
      "Mick Jagger",
      "Keith Richards",
      "Bill Wayman",
      "Mick Taylor",
      "Charlie Watts",
      "Ronnie Wood"
    ],
    "genres": ["Blues Rock", "Rock", "Blues", "Rhythm & Blues"]
  },
  {
    "name": "The Smiths",
    "bandPicture": "/images/bands/TheSmiths.jpg",
    "origin": "England",
    "year": "1982",
    "members": ["Morrissey", "JohnNy Marr", "Andy Rourke", "Mike Joyce"],
    "genres": ["Rock", "Indie Rock", "Alternative Rock", "Indie Pop"]
  },
  {
    "name": "The Jimi Hendrix Experience",
    "bandPicture": "/images/bands/TheJimiHendrixExperience.jpg",
    "origin": "United Kingdom",
    "year": "1966",
    "members": ["Noel Redding", "Mitch Mitchell", "Jimi Hendrix"],
    "genres": ["Rock", "Psychedelic Rock", "Blues Rock", "Rhythm & Blues"]
  },
  {
    "name": "The Who",
    "bandPicture": "/images/bands/TheWho.jpg",
    "origin": "United Kingdom",
    "year": "1964",
    "members": ["Pete Townshend", "Roger Daltrey"],
    "genres": ["Rock", "Art Rock", "Hard Rock", "Jazz"]
  },
  {
    "name": "Dire Straits",
    "bandPicture": "/images/bands/DireStraits.jpg",
    "origin": "United Kingdom",
    "year": "1977",
    "members": [
      "Mark Knopfler",
      "David Knopfler",
      "John Illsley",
      "Pick Withers "
    ],
    "genres": ["Rock", "Art Rock", "Hard Rock", "Jazz"]
  },
  {
    "name": "Pixies",
    "bandPicture": "/images/bands/Pixies.jpg",
    "origin": "United States",
    "year": "1986",
    "members": ["Black Francis", "Joey Santiago", "Kim Deal", "David Lovering"],
    "genres": ["Rock", "Art Rock", "Hard Rock", "Jazz"]
  },
  {
    "name": "The Cure",
    "bandPicture": "/images/bands/TheCure.jpg",
    "origin": "United Kingdom",
    "year": "1978",
    "members": ["Robert Smith", "Simon Gallup"],
    "genres": ["Rock", "Art Rock", "Hard Rock", "Jazz"]
  },
  {
    "name": "Radiohead",
    "bandPicture": "/images/bands/Radiohead.jpg",
    "origin": "Oxfordshire, England",
    "year": "1985",
    "members": ["Thom Yorke", "Jonny Greenwood", "Colin Greenwood", "Ed O'Brien", "Philip Selway"],
    "genres": ["Rock", "Alternative Rock", "Experimental Rock", "Electronica"]
  },
  {
    "name": "The White Stripes",
    "bandPicture": "/images/bands/WhiteStripes.jpg",
    "origin": "Detroit, Michigan, United States",
    "year": "1997",
    "members": ["Jack White", "Meg White"],
    "genres": ["Rock", "Alternative Rock", "Blues Rock", "Folk", "Country"],
  },
  {
    "name": "Joy Division",
    "bandPicture": "/images/bands/JoyDivision.jpg",
    "origin": "Salford, England",
    "year": "1976",
    "members": ["Ian Curtis", "Bernard Sumner", "Peter Hook", "Stephen Morris"],
    "genres": ["Rock", "Post Punk"]
  },
  {
    "name": "New Order",
    "bandPicture": "/images/bands/NewOrder.jpg",
    "origin": "Salford, England",
    "year": "1980",
    "members": ["Bernard Sumner", "Peter Hook", "Stephen Morris", "Gillian Gilbert"],
    "genres": ["Rock", "Post Punk", "New Wave", "Synthpop", "Electronica"]
  }
]

Band.insertMany(bandSeed) 
.then(()=> console.log('bands added'))
.then(()=> mongoose.connection.close())
.catch(err=> console.log(err))

