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

const Artist = require('../models/Artist.model')


const artistSeed = [
  {
    "name": "Jim Morrison",
    "profilePicture": "/images/artists/JimMorrison.JPG",
    "origin": "Melbourne, Florida, United States",
    "birthday": "December 8, 1943",
    "deathDate": "July 3, 1971",
    "bands": ["The Doors", "Rick & the Ravens"],
    "instrument": ["Vocals"],
    "genre": ["Rock", "Psychedelic Rock", "Blues Rock"],
    "occupation": ["Musician", "Songwriter", "Poet"]
  },
  {
    "name": "Ray Manzarek",
    "profilePicture": "/images/artists/RayManzarek.png",
    "origin": "Chicago, Illinois, United States",
    "birthday": "February 12, 1939",
    "deathDate": "May 20, 2013",
    "bands": ["The Doors", "Rick & the Ravens"],
    "instrument": ["Keyboards", "Vocals"],
    "genre": ["Rock", "Psychedelic Rock", "Blues Rock"],
    "occupation": ["Musician"]
  },
  {
    "name": "Bobby Krieger",
    "profilePicture": "public/images/artists/BobbyKrieger.jpg",
    "origin": "Los Angeles, California, United States",
    "birthday": "January 8, 1946",
    "deathDate": "",
    "bands": [
      "The Doors",
      "Rick & the Ravens",
      "Butts Band",
      "Red Shift",
      "Krieger & The Soul Savages"
    ],
    "instrument": ["Guitar"],
    "genre": ["Rock", "Psychedelic Rock", "Blues Rock"],
    "occupation": ["Musician", "Songwritter"]
  },
  {
    "name": "John Densmore",
    "profilePicture": "/images/artists/JohnDensmore.png",
    "origin": "Los Angeles, California, United States",
    "birthday": "December 1, 1944",
    "deathDate": "",
    "bands": ["The Doors"],
    "instrument": ["Drums"],
    "genre": ["Rock", "Psychedelic Rock", "Blues Rock"],
    "occupation": ["Musician"]
  },

  {
    "name": "Jimmy Page",
    "profilePicture": "/images/artists/JimmyPage.jpg",
    "origin": "Heston, Middlesex, England",
    "birthday": "January 9, 1944",
    "deathDate": "",
    "bands": ["The Yadbirds", "Led Zeppelin", "Page and Plant"],
    "instrument": ["Guitar"],
    "genre": [
      "Rock",
      "Blues",
      "Blues Rock",
      "Hard Rock",
      "Heavy Metal",
      "Folk"
    ],
    "occupation": ["Musician"]
  },
  {
    "name": "Robert Plant",
    "profilePicture": "/images/artists/RobertPlant.jpg",
    "origin": "Halesowen, England",
    "birthday": "August 20, 1948",
    "deathDate": "",
    "bands": [
      "Led Zeppelin",
      "Page and Plant",
      "Robert Plant & The Sensational Space Shifters"
    ],
    "instrument": ["Vocals", "Harmonica"],
    "genre": [
      "Rock",
      "Blues",
      "Blues Rock",
      "Hard Rock",
      "Heavy Metal",
      "Folk"
    ],
    "occupation": ["Musician"]
  },
  {
    "name": "John Bonham",
    "profilePicture": "/images/artists/JohnBonham.jpg",
    "origin": "Redditch, Worcestershire, England",
    "birthday": "May 31, 1948",
    "deathDate": "September 25, 1980",
    "bands": ["Led Zeppelin"],
    "instrument": ["Drums", "Percussion"],
    "genre": ["Rock", "Blues", "Blues Rock", "Hard Rock", "Heavy Metal"],
    "occupation": ["Musician"]
  },
  {
    "name": "John Paul Jones",
    "profilePicture": "/images/artists/JohnPaulJones.jpg",
    "origin": "Sidcup, Kent, England",
    "birthday": "January 3, 1946",
    "deathDate": "",
    "bands": ["Led Zeppelin"],
    "instrument": ["Bass Guitar"],
    "genre": ["Rock", "Blues", "Blues Rock", "Hard Rock", "Heavy Metal"],
    "occupation": ["Musician"]
  },

  {
    "name": "Carlos Santana",
    "profilePicture": "/images/artists/Santana.jpg",
    "origin": "Autlán, Jalisco, Mexico",
    "birthday": "July 20, 1947",
    "deathDate": "",
    "bands": ["Santana's Blues Band", "Carlos Santana"],
    "instrument": ["Guitar"],
    "genre": ["Rock", "Blues", "Blues Rock", "Latin Rock", "Latin Jazz"],
    "occupation": ["Musician"]
  },
  {
    "name": "Michael Shrieve",
    "profilePicture": "/images/artists/MichaelShrieve.jpg",
    "origin": "San Francisco, California, United States",
    "birthday": "July 6, 1949",
    "deathDate": "",
    "bands": ["Santana's Blues Band"],
    "instrument": ["Drums", "Percussion"],
    "genre": ["Rock", "Blues", "Blues Rock", "Latin Rock", "Latin Jazz"],
    "occupation": ["Musician"]
  },
  {
    "name": "Gregg Rollie",
    "profilePicture": "/images/artists/GreggRollie.jpg",
    "origin": "Seattle, Washington, United States",
    "birthday": "June 17, 1947",
    "deathDate": "",
    "bands": ["Santana's Blues Band"],
    "instrument": ["Keyboards", "Organ"],
    "genre": ["Rock", "Blues", "Blues Rock", "Latin Rock", "Latin Jazz"],
    "occupation": ["Musician"]
  },
  {
    "name": "Jose “Chepito” Areas ",
    "profilePicture": "/images/artists/JoseChepitoAreas.jpg",
    "origin": "León, Nicaragua",
    "birthday": "July 25, 1946",
    "deathDate": "",
    "bands": ["Santana's Blues Band"],
    "instrument": ["Timbales", "Congas", "Percussion"],
    "genre": ["Rock", "Blues", "Blues Rock", "Latin Rock", "Latin Jazz"],
    "occupation": ["Musician"]
  },
  {
    "name": "David Brown",
    "profilePicture": "/images/artists/DavidBrown.jpg",
    "origin": "New York City, United States",
    "birthday": "February 15, 1947",
    "deathDate": "September 4, 2000",
    "bands": ["Santana's Blues Band"],
    "instrument": ["Bass Guitar"],
    "genre": ["Rock", "Blues", "Blues Rock", "Latin Rock", "Latin Jazz"],
    "occupation": ["Musician"]
  },
  {
    "name": "Michael Carabello",
    "profilePicture": "/images/artists/MichaelCarabello.jpg",
    "origin": "San Francisco, California, United States",
    "birthday": "November 18, 1947",
    "deathDate": "",
    "bands": ["Santana's Blues Band"],
    "instrument": ["Bass Guitar"],
    "genre": ["Rock", "Blues", "Blues Rock", "Latin Rock", "Latin Jazz"],
    "occupation": ["Musician"]
  },

  {
    "name": "Chuck Berry",
    "profilePicture": "/images/artists/ChuckBerry.jpg",
    "origin": "St. Louis, Missouri, United States",
    "birthday": "October 1, 1926",
    "deathDate": "March 18, 2017",
    "bands": ["Chuck Berry"],
    "instrument": ["Guitar", "Vocals"],
    "genre": ["Rock & Roll", "Rhythm & Blues"],
    "occupation": ["Musician"]
  },

  {
    "name": "Roger Waters",
    "profilePicture": "/images/artists/RogerWaters.jpg",
    "origin": "Great Bookham, England",
    "birthday": "September 6, 1943",
    "deathDate": "",
    "bands": ["Pink Floyd", "The Bleeding", "Heaart Band"],
    "instrument": ["Bass Guitar", "Vocals", "Guitar"],
    "genre": [
      "Progressive Rock",
      "Psychedelic Rock",
      "Blues Rock",
      "Rock",
      "Experimental Rock"
    ],
    "occupation": ["Musician", "Songwriter", "Producer"]
  },

  {
    "name": "Syd Barrett",
    "profilePicture": "/images/artists/SydBarrett.jpg",
    "origin": "Cambridge, England",
    "birthday": "January 6, 1946",
    "deathDate": "July 7, 2006",
    "bands": ["Pink Floyd"],
    "instrument": ["Vocals", "Guitar"],
    "genre": [
      "Progressive Rock",
      "Psychedelic Rock",
      "Blues Rock",
      "Rock",
      "Experimental Rock"
    ],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "Richard Wright",
    "profilePicture": "/images/artists/RichardWright.jpg",
    "origin": "Hatch End, Middlesex, England",
    "birthday": "July 28, 1943",
    "deathDate": "September 15, 2008",
    "bands": ["Pink Floyd"],
    "instrument": ["Vocals", "Keyboards"],
    "genre": [
      "Progressive Rock",
      "Psychedelic Rock",
      "Blues Rock",
      "Rock",
      "Experimental Rock"
    ],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "Nick Mason",
    "profilePicture": "//images/artists/NickMason.jpg",
    "origin": "Birmingham, Warwickshire, England",
    "birthday": "January 27, 1944",
    "deathDate": "",
    "bands": ["Pink Floyd", "Nick Mason's Saucerful of Secrets"],
    "instrument": ["Drums"],
    "genre": [
      "Progressive Rock",
      "Psychedelic Rock",
      "Blues Rock",
      "Rock",
      "Experimental Rock"
    ],
    "occupation": ["Musician", "Producer"]
  },
  {
    "name": "David Gilmour",
    "profilePicture": "//images/artists/DavidGilmour.jpg",
    "origin": "Cambridge, England",
    "birthday": "March 6, 1946",
    "deathDate": "",
    "bands": ["Pink Floyd", "David Gilmour"],
    "instrument": ["Guitar", "Vocals"],
    "genre": [
      "Progressive Rock",
      "Psychedelic Rock",
      "Blues Rock",
      "Rock",
      "Experimental Rock"
    ],
    "occupation": ["Musician", "Songwritter"]
  },

  {
    "name": "Brian Jones",
    "profilePicture": "//images/artists/BrianJones.jpg",
    "origin": "Cheltenham, Gloucestershire, England",
    "birthday": "February 28, 1942",
    "deathDate": "July 3, 1969",
    "bands": ["The Rolling Stones"],
    "instrument": [
      "Guitar",
      "Vocals",
      "Harmonica",
      "Sitar",
      "Saxophone",
      "Keyboards"
    ],
    "genre": ["Blues Rock", "Rock", "Blues", "Rhythm & Blues"],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "Mick Jagger",
    "profilePicture": "/images/artists/MickJagger.jpg",
    "origin": "Dartford, Kent, England",
    "birthday": "July 26, 1943",
    "deathDate": "",
    "bands": ["The Rolling Stones"],
    "instrument": ["Guitar", "Vocals", "Harmonica"],
    "genre": ["Blues Rock", "Rock", "Blues", "Rhythm & Blues"],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "Keith Richards",
    "profilePicture": "/images/artists/MickJagger.jpg",
    "origin": "Dartford, Kent, England",
    "birthday": "December 18, 1943",
    "deathDate": "",
    "bands": ["The Rolling Stones"],
    "instrument": ["Guitar", "Vocals"],
    "genre": ["Blues Rock", "Rock", "Blues", "Rhythm & Blues"],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "Ronnie Wood",
    "profilePicture": "/images/artists/RonWood.jpg",
    "origin": "Hillingdon, England",
    "birthday": "June 1, 1947",
    "deathDate": "",
    "bands": [
      "The Rolling Stones",
      "The Birds",
      "The Creation",
      "The Jeff Beck Group",
      "The New Barbarians"
    ],
    "instrument": ["Guitar"],
    "genre": ["Blues Rock", "Rock", "Blues", "Rhythm & Blues"],
    "occupation": ["Musician", "Producer"]
  },
  {
    "name": "Mick Taylor",
    "profilePicture": "/images/artists/MickTaylor.jpg",
    "origin": "Welwyn Garden City, England",
    "birthday": "January 14, 1949",
    "deathDate": "",
    "bands": [
      "The Rolling Stones",
      "John Mayall's Bluesbreakers",
      "The Jack Bruce Band",
      "The Gods"
    ],
    "instrument": ["Guitar"],
    "genre": ["Blues Rock", "Rock", "Blues", "Rhythm & Blues"],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "Bill Wyman",
    "profilePicture": "/images/artists/BillWyman.jpg",
    "origin": "London, England",
    "birthday": "October 24, 1936",
    "deathDate": "",
    "bands": ["The Rolling Stones"],
    "instrument": ["Bass Guitar", "Vocals"],
    "genre": ["Blues Rock", "Rock", "Blues", "Rhythm & Blues"],
    "occupation": ["Musician", "Songwriter", "Photographer"]
  },
  {
    "name": "Charlie Watts",
    "profilePicture": "/images/artists/CharlieWatts.jpg",
    "origin": "London, England",
    "birthday": "June 2, 1941",
    "deathDate": "August 24, 2021",
    "bands": ["The Rolling Stones"],
    "instrument": ["Drums"],
    "genre": ["Blues Rock", "Rock", "Blues", "Rhythm & Blues"],
    "occupation": ["Musician"]
  },
  {
    "name": "David Bowie",
    "profilePicture": "/images/artists/DavidBowie.jpg",
    "origin": "London, England",
    "birthday": "January 8, 1947",
    "deathDate": "January 10, 2016",
    "bands": [],
    "instrument": ["Vocals", "Guitar", "Piano"],
    "genre": ["Rock", "Art Rock", "Glam Rock", "Pop"],
    "occupation": ["Musician", "Songwriter", "Actor"]
  },
  {
    "name": "Morrisey",
    "profilePicture": "/images/artists/Morrisey.jpg",
    "origin": "London, England",
    "birthday": "May 22, 1959",
    "deathDate": "",
    "bands": ["The Smiths"],
    "instrument": ["Vocals"],
    "genre": ["Rock", "Indie Rock", "Alternative Rock", "Indie Pop"],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "Johnny Marr",
    "profilePicture": "/images/artists/JohnnyMarr.jpg",
    "origin": "Manchester, England",
    "birthday": "October 31, 1963",
    "deathDate": "",
    "bands": ["The Smiths", "The Pretenders", "Modest Mouse"],
    "instrument": ["Guitar", "Vocals"],
    "genre": ["Rock", "Indie Rock", "Alternative Rock", "Indie Pop"],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "Andy Rourke",
    "profilePicture": "/images/artists/AndyRourke.jpg",
    "origin": "Manchester, England",
    "birthday": "January 17, 1964",
    "deathDate": "",
    "bands": ["The Smiths", "The Pretenders"],
    "instrument": ["Bass Guitar", "Guitar"],
    "genre": ["Rock", "Indie Rock", "Alternative Rock", "Indie Pop"],
    "occupation": ["Musician"]
  },
  {
    "name": "Mike Joyce",
    "profilePicture": "/images/artists/MikeJoyce.jpg",
    "origin": "Fallowfield, England",
    "birthday": "June 1, 1963",
    "deathDate": "",
    "bands": ["The Smiths"],
    "instrument": ["Drums"],
    "genre": ["Rock", "Indie Rock", "Alternative Rock", "Indie Pop"],
    "occupation": ["Musician"]
  },
  {
    "name": "Jimi Hendrix",
    "profilePicture": "/images/artists/JimiHendrix.jpg",
    "origin": "Seattle, Washington, United States",
    "birthday": "November 27, 1942",
    "deathDate": "September 18, 1970",
    "bands": ["The Jimi Hendrix Experience"],
    "instrument": ["Guitar", "Vocals"],
    "genre": ["Rock", "Psychedelic Rock", "Blues Rock", "Rhythm & Blues"],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "Noel Redding",
    "profilePicture": "/images/artists/NoelRedding.jpg",
    "origin": "Folkestone, Kent, England",
    "birthday": "December 25, 1945",
    "deathDate": "May 11, 2003",
    "bands": ["The Jimi Hendrix Experience"],
    "instrument": ["Guitar", "Bass Guitar"],
    "genre": [
      "Rock",
      "Psychedelic Rock",
      "Blues Rock",
      "Rhythm & Blues",
      "Folk Rock"
    ],
    "occupation": ["Musician"]
  },
  {
    "name": "Mitch Mitchell",
    "profilePicture": "/images/artists/MitchMitchell.jpg",
    "origin": "London, England",
    "birthday": "July 9, 1946",
    "deathDate": "November 12, 2008",
    "bands": ["The Jimi Hendrix Experience"],
    "instrument": ["Drums"],
    "genre": [
      "Rock",
      "Psychedelic Rock",
      "Blues Rock",
      "Rhythm & Blues",
      "Folk Rock"
    ],
    "occupation": ["Musician"]
  },
  {
    "name": "Pete Townshend",
    "profilePicture": "/images/artists/PeteTownshend.jpg",
    "origin": "Chiswick, England",
    "birthday": "May 19, 1945",
    "deathDate": "",
    "bands": ["The Who"],
    "instrument": ["Guitar", "Vocals"],
    "genre": ["Rock", "Art Rock", "Hard Rock", "Jazz"],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "Roger Daltrey",
    "profilePicture": "/images/artists/RogerDaltrey.jpg",
    "origin": "London, England",
    "birthday": "Marxh 1, 1944",
    "deathDate": "",
    "bands": ["The Who"],
    "instrument": ["Vocals"],
    "genre": ["Rock", "Art Rock", "Hard Rock", "Jazz"],
    "occupation": ["Musician", "Songwriter", "Actor"]
  },
  {
    "name": "Mark Knopfler",
    "profilePicture": "/images/artists/MarkKnopfler.jpg",
    "origin": "Newcastle upon Tyne, England",
    "birthday": "August 12, 1949",
    "deathDate": "",
    "bands": ["Dire Straits"],
    "instrument": ["Vocals", "Guitar"],
    "genre": ["Rock", "Blues Rock", "Country Rock", "Celtic Rock"],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "David Knopfler",
    "profilePicture": "/images/artists/DavidKnopfler.jpg",
    "origin": "Newcastle upon Tyne, England",
    "birthday": "December 27, 1952",
    "deathDate": "",
    "bands": ["Dire Straits"],
    "instrument": ["Vocals", "Guitar"],
    "genre": ["Rock", "Blues Rock", "Country Rock", "Celtic Rock"],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "John Illsley",
    "profilePicture": "/images/artists/JohnIllsley.jpg",
    "origin": "Leicester, England",
    "birthday": "Juin 24, 1949",
    "deathDate": "",
    "bands": ["Dire Straits"],
    "instrument": ["Bass Guitar", "Guitar", "Vocals"],
    "genre": ["Rock", "Blues Rock", "Country Rock", "Celtic Rock"],
    "occupation": ["Musician"]
  },
  {
    "name": "Pick Withers",
    "profilePicture": "/images/artists/PickWithers.jpg",
    "origin": "Leicester, England",
    "birthday": "April 4, 1948",
    "deathDate": "",
    "bands": ["Dire Straits"],
    "instrument": ["Drums"],
    "genre": ["Rock", "Blues Rock", "Country Rock", "Celtic Rock"],
    "occupation": ["Musician"]
  },
  {
    "name": "Black Francis",
    "profilePicture": "/images/artists/BlackFrancis.jpg",
    "origin": "Boston, Massachusetts, United States",
    "birthday": "April 6, 1965",
    "deathDate": "",
    "bands": ["Pixies"],
    "instrument": ["Vocals", "Guitar"],
    "genre": [
      "Rock",
      "Alternative Rock",
      "Indie Rock",
      "Punk Rock",
      "Surf Rock",
      "Noise Rock"
    ],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "Joey Santiago",
    "profilePicture": "/images/artists/JoeySantiago.jpg",
    "origin": "Longmeadow, Massachusetts, United States",
    "birthday": "June 10, 1965",
    "deathDate": "",
    "bands": ["Pixies"],
    "instrument": ["Guitar"],
    "genre": [
      "Rock",
      "Alternative Rock",
      "Indie Rock",
      "Punk Rock",
      "Surf Rock",
      "Noise Rock"
    ],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "Kim Deal",
    "profilePicture": "/images/artists/KimDeal.jpg",
    "origin": "Dayton, Ohio, United States",
    "birthday": "June 10, 1961",
    "deathDate": "",
    "bands": ["Pixies", "The Breeders"],
    "instrument": ["Guitar", "Bass Guitar", "Keyboards", "Drums", "Vocals"],
    "genre": ["Rock", "Alternative Rock", "Indie Rock", "Noise Pop"],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "David Lovering",
    "profilePicture": "/images/artists/DavidLovering.jpg",
    "origin": "Winchester, Massachusetts, United States",
    "birthday": "December 6, 1961",
    "deathDate": "",
    "bands": ["Pixies"],
    "instrument": ["Drums"],
    "genre": ["Rock", "Alternative Rock"],
    "occupation": ["Musician", "Magician"]
  },
  {
    "name": "Robert Smith",
    "profilePicture": "/images/artists/RobertSmith.jpg",
    "origin": "Crawley, England",
    "birthday": "April 21, 1959",
    "deathDate": "",
    "bands": ["The Cure"],
    "instrument": ["Vocals", "Guitar"],
    "genre": [
      "Rock",
      "Alternative Rock",
      "Post Punk",
      "Gothic Rock",
      "New Wave"
    ],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "Simon Gallup",
    "profilePicture": "/images/artists/SimonGallup.jpg",
    "origin": "Duxhurst, Surrey, England",
    "birthday": "June 1, 1960",
    "deathDate": "",
    "bands": ["The Cure"],
    "instrument": ["Bass Guitar", "Keyboards"],
    "genre": [
      "Rock",
      "Alternative Rock",
      "Post Punk",
      "Gothic Rock",
      "New Wave"
    ],
    "occupation": ["Musician"]
  },
  {
    "name": "Thom Yorke",
    "profilePicture": "/images/artists/ThomYorke.jpg",
    "origin": "Wellingborough, Northamptonshire, England",
    "birthday": "October 7, 1968",
    "deathDate": "",
    "bands": ["Radiohead"],
    "instrument": ["Vocals", "Guitar", "Keyboards"],
    "genre": [
      "Rock",
      "Alternative Rock",
      "Experimental Rock",
      "Electronica"
    ],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "Jonny Greenwood",
    "profilePicture": "/images/artists/JonnyGreenwood.jpg",
    "origin": "Oxford, England",
    "birthday": "November 5, 1971",
    "deathDate": "",
    "bands": ["Radiohead"],
    "instrument": ["Guitar", "Keyboards"],
    "genre": [
      "Rock",
      "Alternative Rock",
      "Experimental Rock",
      "Electronica"
    ],
    "occupation": ["Musician", "Composer"]
  },
  {
    "name": "Colin Greenwood",
    "profilePicture": "/images/artists/ColinGreenwood.jpg",
    "origin": "Oxford, England",
    "birthday": "June 26, 1969",
    "deathDate": "",
    "bands": ["Radiohead"],
    "instrument": ["Bass Guitar"],
    "genre": [
      "Rock",
      "Alternative Rock",
      "Experimental Rock",
      "Electronica"
    ],
    "occupation": ["Musician"]
  },
  {
    "name": "Ed O'Brien",
    "profilePicture": "/images/artists/EdObrien.jpg",
    "origin": "Oxford, England",
    "birthday": "April 15, 1968",
    "deathDate": "",
    "bands": ["Radiohead"],
    "instrument": ["Guitar"],
    "genre": [
      "Rock",
      "Alternative Rock",
      "Experimental Rock",
      "Electronica"
    ],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "Philip Selway",
    "profilePicture": "/images/artists/PhilipSelway.jpg",
    "origin": "Abingdon-on-Thames, Oxfordshire, England",
    "birthday": "May 23, 1967",
    "deathDate": "",
    "bands": ["Radiohead"],
    "instrument": ["Drums", "Guitar"],
    "genre": [
      "Rock",
      "Alternative Rock",
      "Experimental Rock",
      "Electronica"
    ],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "Jack White",
    "profilePicture": "/images/artists/JackWhite.jpg",
    "origin": "Detroit, Michigan, United States",
    "birthday": "July 9, 1975",
    "deathDate": "",
    "bands": ["The White Stripes"],
    "instrument": ["Vocals", "Guitar", "Keyboards"],
    "genre": [
      "Rock",
      "Alternative Rock",
      "Blues Rock",
      "Folk",
      "Country"
    ],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "Meg White",
    "profilePicture": "/images/artists/MegWhite.jpg",
    "origin": "Grosse Point Farms, Michigan, United States",
    "birthday": "December 10, 1974",
    "deathDate": "",
    "bands": ["The White Stripes"],
    "instrument": ["Drums"],
    "genre": [
      "Rock",
      "Alternative Rock",
      "Blues Rock",
      "Folk",
      "Country"
    ],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "Ian Curtis",
    "profilePicture": "/images/artists/IanCurtis.jpg",
    "origin": "Stretford, Lancashire, England",
    "birthday": "July 15, 1956",
    "deathDate": "May 18, 1980",
    "bands": ["Joy Division"],
    "instrument": ["Vocals"],
    "genre": [
      "Rock",
      "Post Punk"
    ],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "Bernard Sumner",
    "profilePicture": "/images/artists/BernardSumner.jpg",
    "origin": "Broughton, Lancashire, England",
    "birthday": "January 4, 1956",
    "deathDate": "",
    "bands": ["Joy Division", "New Order"],
    "instrument": ["Vocals", "Guitar", "Keyboards"],
    "genre": [
      "Rock",
      "Post Punk",
      "New Wave",
      "Synthpop",
      "Electronica"
    ],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "Peter Hook",
    "profilePicture": "/images/artists/PeterHook.jpg",
    "origin": "Broughton, Salford, England",
    "birthday": "February 13, 1956",
    "deathDate": "",
    "bands": ["Joy Division", "New Order"],
    "instrument": ["Bass Guitar", "Vocals"],
    "genre": [
      "Rock",
      "Post Punk",
      "New Wave",
      "Synthpop",
      "Electronica"
    ],
    "occupation": ["Musician", "Songwriter"]
  },
  {
    "name": "Stephen Morris",
    "profilePicture": "/images/artists/StephenMorris.jpg",
    "origin": "Macclesfield, Cheshire, England",
    "birthday": "October 28, 1957",
    "deathDate": "",
    "bands": ["Joy Division", "New Order"],
    "instrument": ["Drums"],
    "genre": [
      "Rock",
      "Post Punk",
      "New Wave",
      "Synthpop",
      "Electronica"
    ],
    "occupation": ["Musician"]
  },
  {
    "name": "Gillian Gilbert",
    "profilePicture": "/images/artists/GillianGilbert.jpg",
    "origin": "Whalley Range, Manchester, England",
    "birthday": "January 27, 1961",
    "deathDate": "",
    "bands": ["New Order"],
    "instrument": ["Keyboards", "Guitar", "Vocals"],
    "genre": [
      "Rock",
      "Post Punk",
      "New Wave",
      "Synthpop",
      "Electronica"
    ],
    "occupation": ["Musician"]
  }
]

Artist.insertMany(artistSeed)
.then(() => console.log('artists have been added'))
.then(mongoose.connection.close())
.catch(err => console.log(err))
