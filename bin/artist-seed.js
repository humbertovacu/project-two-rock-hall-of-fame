const mongoose = require("mongoose");

const MONGO_URI =
  process.env.MONGODB_URI ||
  "mongodb://127.0.0.1:27017/project-two-rock-hall-of-fame";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const databaseName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${databaseName}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

const Artist = require("../models/Artist.model");

const artistSeed = [
  {
    name: "Jim Morrison",
    profilePicture: "/images/artists/JimMorrison.JPG",
    origin: "Melbourne, Florida, United States",
    birthday: "1943-12-08",
    deathDate: "1971-07-03",
    bands: ["The Doors", "Rick & the Ravens"],
    instrument: ["Vocals"],
    genre: ["Rock", "Psychedelic Rock", "Blues Rock"],
    occupation: ["Musician", "Songwriter", "Poet"],
  },
  {
    name: "Ray Manzarek",
    profilePicture: "/images/artists/RayManzarek.png",
    origin: "Chicago, Illinois, United States",
    birthday: "1939-02-12",
    deathDate: "2013-05-20",
    bands: ["The Doors", "Rick & the Ravens"],
    instrument: ["Keyboards", "Vocals"],
    genre: ["Rock", "Psychedelic Rock", "Blues Rock"],
    occupation: ["Musician"],
  },
  {
    name: "Bobby Krieger",
    profilePicture: "public/images/artists/BobbyKrieger.jpg",
    origin: "Los Angeles, California, United States",
    birthday: "1946-01-08",
    deathDate: "",
    bands: [
      "The Doors",
      "Rick & the Ravens",
      "Butts Band",
      "Red Shift",
      "Krieger & The Soul Savages",
    ],
    instrument: ["Guitar"],
    genre: ["Rock", "Psychedelic Rock", "Blues Rock"],
    occupation: ["Musician", "Songwritter"],
  },
  {
    name: "John Densmore",
    profilePicture: "/images/artists/JohnDensmore.png",
    origin: "Los Angeles, California, United States",
    birthday: "1944-12-01",
    deathDate: "",
    bands: ["The Doors"],
    instrument: ["Drums"],
    genre: ["Rock", "Psychedelic Rock", "Blues Rock"],
    occupation: ["Musician"],
  },

  {
    name: "Jimmy Page",
    profilePicture: "/images/artists/JimmyPage.jpg",
    origin: "Heston, Middlesex, England",
    birthday: "1944-01-09",
    deathDate: "",
    bands: ["The Yadbirds", "Led Zeppelin", "Page and Plant"],
    instrument: ["Guitar"],
    genre: ["Rock", "Blues", "Blues Rock", "Hard Rock", "Heavy Metal", "Folk"],
    occupation: ["Musician"],
  },
  {
    name: "Robert Plant",
    profilePicture: "/images/artists/RobertPlant.jpg",
    origin: "Halesowen, England",
    birthday: "1948-08-20",
    deathDate: "",
    bands: [
      "Led Zeppelin",
      "Page and Plant",
      "Robert Plant & The Sensational Space Shifters",
    ],
    instrument: ["Vocals", "Harmonica"],
    genre: ["Rock", "Blues", "Blues Rock", "Hard Rock", "Heavy Metal", "Folk"],
    occupation: ["Musician"],
  },
  {
    name: "John Bonham",
    profilePicture: "/images/artists/JohnBonham.jpg",
    origin: "Redditch, Worcestershire, England",
    birthday: "1948-05-31",
    deathDate: "1980-09-25",
    bands: ["Led Zeppelin"],
    instrument: ["Drums", "Percussion"],
    genre: ["Rock", "Blues", "Blues Rock", "Hard Rock", "Heavy Metal"],
    occupation: ["Musician"],
  },
  {
    name: "John Paul Jones",
    profilePicture: "/images/artists/JohnPaulJones.jpg",
    origin: "Sidcup, Kent, England",
    birthday: "1946-01-03",
    deathDate: "",
    bands: ["Led Zeppelin"],
    instrument: ["Bass Guitar"],
    genre: ["Rock", "Blues", "Blues Rock", "Hard Rock", "Heavy Metal"],
    occupation: ["Musician"],
  },

  {
    name: "Carlos Santana",
    profilePicture: "/images/artists/Santana.jpg",
    origin: "Autlán, Jalisco, Mexico",
    birthday: "1947-07-20",
    deathDate: "",
    bands: ["Santana's Blues Band", "Carlos Santana"],
    instrument: ["Guitar"],
    genre: ["Rock", "Blues", "Blues Rock", "Latin Rock", "Latin Jazz"],
    occupation: ["Musician"],
  },
  {
    name: "Michael Shrieve",
    profilePicture: "/images/artists/MichaelShrieve.jpg",
    origin: "San Francisco, California, United States",
    birthday: "1949-07-06",
    deathDate: "",
    bands: ["Santana's Blues Band"],
    instrument: ["Drums", "Percussion"],
    genre: ["Rock", "Blues", "Blues Rock", "Latin Rock", "Latin Jazz"],
    occupation: ["Musician"],
  },
  {
    name: "Gregg Rollie",
    profilePicture: "/images/artists/GreggRollie.jpg",
    origin: "Seattle, Washington, United States",
    birthday: "1947-06-17",
    deathDate: "",
    bands: ["Santana's Blues Band"],
    instrument: ["Keyboards", "Organ"],
    genre: ["Rock", "Blues", "Blues Rock", "Latin Rock", "Latin Jazz"],
    occupation: ["Musician"],
  },
  {
    name: "Jose “Chepito” Areas ",
    profilePicture: "/images/artists/JoseChepitoAreas.jpg",
    origin: "León, Nicaragua",
    birthday: "1946-07-25",
    deathDate: "",
    bands: ["Santana's Blues Band"],
    instrument: ["Timbales", "Congas", "Percussion"],
    genre: ["Rock", "Blues", "Blues Rock", "Latin Rock", "Latin Jazz"],
    occupation: ["Musician"],
  },
  {
    name: "David Brown",
    profilePicture: "/images/artists/DavidBrown.jpg",
    origin: "New York City, United States",
    birthday: "1947-02-15",
    deathDate: "2000-09-04",
    bands: ["Santana's Blues Band"],
    instrument: ["Bass Guitar"],
    genre: ["Rock", "Blues", "Blues Rock", "Latin Rock", "Latin Jazz"],
    occupation: ["Musician"],
  },
  {
    name: "Michael Carabello",
    profilePicture: "/images/artists/MichaelCarabello.jpg",
    origin: "San Francisco, California, United States",
    birthday: "1947-11-18",
    deathDate: "",
    bands: ["Santana's Blues Band"],
    instrument: ["Bass Guitar"],
    genre: ["Rock", "Blues", "Blues Rock", "Latin Rock", "Latin Jazz"],
    occupation: ["Musician"],
  },

  {
    name: "Chuck Berry",
    profilePicture: "/images/artists/ChuckBerry.jpg",
    origin: "St. Louis, Missouri, United States",
    birthday: "1926-10-01",
    deathDate: "2017-03-18",
    bands: ["Chuck Berry"],
    instrument: ["Guitar", "Vocals"],
    genre: ["Rock & Roll", "Rhythm & Blues"],
    occupation: ["Musician"],
  },

  {
    name: "Roger Waters",
    profilePicture: "/images/artists/RogerWaters.jpg",
    origin: "Great Bookham, England",
    birthday: "1943-09-06",
    deathDate: "",
    bands: ["Pink Floyd", "The Bleeding", "Heaart Band"],
    instrument: ["Bass Guitar", "Vocals", "Guitar"],
    genre: [
      "Progressive Rock",
      "Psychedelic Rock",
      "Blues Rock",
      "Rock",
      "Experimental Rock",
    ],
    occupation: ["Musician", "Songwriter", "Producer"],
  },

  {
    name: "Syd Barrett",
    profilePicture: "/images/artists/SydBarrett.jpg",
    origin: "Cambridge, England",
    birthday: "1946-01-06",
    deathDate: "2006-07-07",
    bands: ["Pink Floyd"],
    instrument: ["Vocals", "Guitar"],
    genre: [
      "Progressive Rock",
      "Psychedelic Rock",
      "Blues Rock",
      "Rock",
      "Experimental Rock",
    ],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "Richard Wright",
    profilePicture: "/images/artists/RichardWright.jpg",
    origin: "Hatch End, Middlesex, England",
    birthday: "1943-07-28",
    deathDate: "2008-09-15",
    bands: ["Pink Floyd"],
    instrument: ["Vocals", "Keyboards"],
    genre: [
      "Progressive Rock",
      "Psychedelic Rock",
      "Blues Rock",
      "Rock",
      "Experimental Rock",
    ],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "Nick Mason",
    profilePicture: "//images/artists/NickMason.jpg",
    origin: "Birmingham, Warwickshire, England",
    birthday: "1944-01-27",
    deathDate: "",
    bands: ["Pink Floyd", "Nick Mason's Saucerful of Secrets"],
    instrument: ["Drums"],
    genre: [
      "Progressive Rock",
      "Psychedelic Rock",
      "Blues Rock",
      "Rock",
      "Experimental Rock",
    ],
    occupation: ["Musician", "Producer"],
  },
  {
    name: "David Gilmour",
    profilePicture: "//images/artists/DavidGilmour.jpg",
    origin: "Cambridge, England",
    birthday: "1946-03-06",
    deathDate: "",
    bands: ["Pink Floyd", "David Gilmour"],
    instrument: ["Guitar", "Vocals"],
    genre: [
      "Progressive Rock",
      "Psychedelic Rock",
      "Blues Rock",
      "Rock",
      "Experimental Rock",
    ],
    occupation: ["Musician", "Songwritter"],
  },

  {
    name: "Brian Jones",
    profilePicture: "//images/artists/BrianJones.jpg",
    origin: "Cheltenham, Gloucestershire, England",
    birthday: "1942-02-28",
    deathDate: "1969-07-03",
    bands: ["The Rolling Stones"],
    instrument: [
      "Guitar",
      "Vocals",
      "Harmonica",
      "Sitar",
      "Saxophone",
      "Keyboards",
    ],
    genre: ["Blues Rock", "Rock", "Blues", "Rhythm & Blues"],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "Mick Jagger",
    profilePicture: "/images/artists/MickJagger.jpg",
    origin: "Dartford, Kent, England",
    birthday: "1943-07-26",
    deathDate: "",
    bands: ["The Rolling Stones"],
    instrument: ["Guitar", "Vocals", "Harmonica"],
    genre: ["Blues Rock", "Rock", "Blues", "Rhythm & Blues"],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "Keith Richards",
    profilePicture: "/images/artists/MickJagger.jpg",
    origin: "Dartford, Kent, England",
    birthday: "1943-12-18",
    deathDate: "",
    bands: ["The Rolling Stones"],
    instrument: ["Guitar", "Vocals"],
    genre: ["Blues Rock", "Rock", "Blues", "Rhythm & Blues"],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "Ronnie Wood",
    profilePicture: "/images/artists/RonWood.jpg",
    origin: "Hillingdon, England",
    birthday: "1947-06-01",
    deathDate: "",
    bands: [
      "The Rolling Stones",
      "The Birds",
      "The Creation",
      "The Jeff Beck Group",
      "The New Barbarians",
    ],
    instrument: ["Guitar"],
    genre: ["Blues Rock", "Rock", "Blues", "Rhythm & Blues"],
    occupation: ["Musician", "Producer"],
  },
  {
    name: "Mick Taylor",
    profilePicture: "/images/artists/MickTaylor.jpg",
    origin: "Welwyn Garden City, England",
    birthday: "1949-01-14",
    deathDate: "",
    bands: [
      "The Rolling Stones",
      "John Mayall's Bluesbreakers",
      "The Jack Bruce Band",
      "The Gods",
    ],
    instrument: ["Guitar"],
    genre: ["Blues Rock", "Rock", "Blues", "Rhythm & Blues"],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "Bill Wyman",
    profilePicture: "/images/artists/BillWyman.jpg",
    origin: "London, England",
    birthday: "1936-10-24",
    deathDate: "",
    bands: ["The Rolling Stones"],
    instrument: ["Bass Guitar", "Vocals"],
    genre: ["Blues Rock", "Rock", "Blues", "Rhythm & Blues"],
    occupation: ["Musician", "Songwriter", "Photographer"],
  },
  {
    name: "Charlie Watts",
    profilePicture: "/images/artists/CharlieWatts.jpg",
    origin: "London, England",
    birthday: "1941-06-02",
    deathDate: "2021-08-24",
    bands: ["The Rolling Stones"],
    instrument: ["Drums"],
    genre: ["Blues Rock", "Rock", "Blues", "Rhythm & Blues"],
    occupation: ["Musician"],
  },
  {
    name: "David Bowie",
    profilePicture: "/images/artists/DavidBowie.jpg",
    origin: "London, England",
    birthday: "1947-01-08",
    deathDate: "2016-01-10",
    bands: [],
    instrument: ["Vocals", "Guitar", "Piano"],
    genre: ["Rock", "Art Rock", "Glam Rock", "Pop"],
    occupation: ["Musician", "Songwriter", "Actor"],
  },
  {
    name: "Morrisey",
    profilePicture: "/images/artists/Morrisey.jpg",
    origin: "London, England",
    birthday: "1959-05-22",
    deathDate: "",
    bands: ["The Smiths"],
    instrument: ["Vocals"],
    genre: ["Rock", "Indie Rock", "Alternative Rock", "Indie Pop"],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "Johnny Marr",
    profilePicture: "/images/artists/JohnnyMarr.jpg",
    origin: "Manchester, England",
    birthday: "1963-10-31",
    deathDate: "",
    bands: ["The Smiths", "The Pretenders", "Modest Mouse"],
    instrument: ["Guitar", "Vocals"],
    genre: ["Rock", "Indie Rock", "Alternative Rock", "Indie Pop"],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "Andy Rourke",
    profilePicture: "/images/artists/AndyRourke.jpg",
    origin: "Manchester, England",
    birthday: "1964-01-17",
    deathDate: "",
    bands: ["The Smiths", "The Pretenders"],
    instrument: ["Bass Guitar", "Guitar"],
    genre: ["Rock", "Indie Rock", "Alternative Rock", "Indie Pop"],
    occupation: ["Musician"],
  },
  {
    name: "Mike Joyce",
    profilePicture: "/images/artists/MikeJoyce.jpg",
    origin: "Fallowfield, England",
    birthday: "1963-06-01",
    deathDate: "",
    bands: ["The Smiths"],
    instrument: ["Drums"],
    genre: ["Rock", "Indie Rock", "Alternative Rock", "Indie Pop"],
    occupation: ["Musician"],
  },
  {
    name: "Jimi Hendrix",
    profilePicture: "/images/artists/JimiHendrix.jpg",
    origin: "Seattle, Washington, United States",
    birthday: "1942-11-27",
    deathDate: "1970-09-18",
    bands: ["The Jimi Hendrix Experience"],
    instrument: ["Guitar", "Vocals"],
    genre: ["Rock", "Psychedelic Rock", "Blues Rock", "Rhythm & Blues"],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "Noel Redding",
    profilePicture: "/images/artists/NoelRedding.jpg",
    origin: "Folkestone, Kent, England",
    birthday: "1945-12-25",
    deathDate: "2003-05-11",
    bands: ["The Jimi Hendrix Experience"],
    instrument: ["Guitar", "Bass Guitar"],
    genre: [
      "Rock",
      "Psychedelic Rock",
      "Blues Rock",
      "Rhythm & Blues",
      "Folk Rock",
    ],
    occupation: ["Musician"],
  },
  {
    name: "Mitch Mitchell",
    profilePicture: "/images/artists/MitchMitchell.jpg",
    origin: "London, England",
    birthday: "1946-07-09",
    deathDate: "2008-11-12",
    bands: ["The Jimi Hendrix Experience"],
    instrument: ["Drums"],
    genre: [
      "Rock",
      "Psychedelic Rock",
      "Blues Rock",
      "Rhythm & Blues",
      "Folk Rock",
    ],
    occupation: ["Musician"],
  },
  {
    name: "Pete Townshend",
    profilePicture: "/images/artists/PeteTownshend.jpg",
    origin: "Chiswick, England",
    birthday: "1945-05-19",
    deathDate: "",
    bands: ["The Who"],
    instrument: ["Guitar", "Vocals"],
    genre: ["Rock", "Art Rock", "Hard Rock", "Jazz"],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "Roger Daltrey",
    profilePicture: "/images/artists/RogerDaltrey.jpg",
    origin: "London, England",
    birthday: "1944-05-01",
    deathDate: "",
    bands: ["The Who"],
    instrument: ["Vocals"],
    genre: ["Rock", "Art Rock", "Hard Rock", "Jazz"],
    occupation: ["Musician", "Songwriter", "Actor"],
  },
  {
    name: "Mark Knopfler",
    profilePicture: "/images/artists/MarkKnopfler.jpg",
    origin: "Newcastle upon Tyne, England",
    birthday: "1949-08-12",
    deathDate: "",
    bands: ["Dire Straits"],
    instrument: ["Vocals", "Guitar"],
    genre: ["Rock", "Blues Rock", "Country Rock", "Celtic Rock"],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "David Knopfler",
    profilePicture: "/images/artists/DavidKnopfler.jpg",
    origin: "Newcastle upon Tyne, England",
    birthday: "1952-12-27",
    deathDate: "",
    bands: ["Dire Straits"],
    instrument: ["Vocals", "Guitar"],
    genre: ["Rock", "Blues Rock", "Country Rock", "Celtic Rock"],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "John Illsley",
    profilePicture: "/images/artists/JohnIllsley.jpg",
    origin: "Leicester, England",
    birthday: "Juin 24, 1949",
    deathDate: "",
    bands: ["Dire Straits"],
    instrument: ["Bass Guitar", "Guitar", "Vocals"],
    genre: ["Rock", "Blues Rock", "Country Rock", "Celtic Rock"],
    occupation: ["Musician"],
  },
  {
    name: "Pick Withers",
    profilePicture: "/images/artists/PickWithers.jpg",
    origin: "Leicester, England",
    birthday: "1948-04-04",
    deathDate: "",
    bands: ["Dire Straits"],
    instrument: ["Drums"],
    genre: ["Rock", "Blues Rock", "Country Rock", "Celtic Rock"],
    occupation: ["Musician"],
  },
  {
    name: "Black Francis",
    profilePicture: "/images/artists/BlackFrancis.jpg",
    origin: "Boston, Massachusetts, United States",
    birthday: "1965-04-06",
    deathDate: "",
    bands: ["Pixies"],
    instrument: ["Vocals", "Guitar"],
    genre: [
      "Rock",
      "Alternative Rock",
      "Indie Rock",
      "Punk Rock",
      "Surf Rock",
      "Noise Rock",
    ],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "Joey Santiago",
    profilePicture: "/images/artists/JoeySantiago.jpg",
    origin: "Longmeadow, Massachusetts, United States",
    birthday: "1965-06-10",
    deathDate: "",
    bands: ["Pixies"],
    instrument: ["Guitar"],
    genre: [
      "Rock",
      "Alternative Rock",
      "Indie Rock",
      "Punk Rock",
      "Surf Rock",
      "Noise Rock",
    ],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "Kim Deal",
    profilePicture: "/images/artists/KimDeal.jpg",
    origin: "Dayton, Ohio, United States",
    birthday: "1961-06-10",
    deathDate: "",
    bands: ["Pixies", "The Breeders"],
    instrument: ["Guitar", "Bass Guitar", "Keyboards", "Drums", "Vocals"],
    genre: ["Rock", "Alternative Rock", "Indie Rock", "Noise Pop"],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "David Lovering",
    profilePicture: "/images/artists/DavidLovering.jpg",
    origin: "Winchester, Massachusetts, United States",
    birthday: "1961-12-06",
    deathDate: "",
    bands: ["Pixies"],
    instrument: ["Drums"],
    genre: ["Rock", "Alternative Rock"],
    occupation: ["Musician", "Magician"],
  },
  {
    name: "Robert Smith",
    profilePicture: "/images/artists/RobertSmith.jpg",
    origin: "Crawley, England",
    birthday: "1959-04-21",
    deathDate: "",
    bands: ["The Cure"],
    instrument: ["Vocals", "Guitar"],
    genre: ["Rock", "Alternative Rock", "Post Punk", "Gothic Rock", "New Wave"],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "Simon Gallup",
    profilePicture: "/images/artists/SimonGallup.jpg",
    origin: "Duxhurst, Surrey, England",
    birthday: "1960-06-01",
    deathDate: "",
    bands: ["The Cure"],
    instrument: ["Bass Guitar", "Keyboards"],
    genre: ["Rock", "Alternative Rock", "Post Punk", "Gothic Rock", "New Wave"],
    occupation: ["Musician"],
  },
  {
    name: "Thom Yorke",
    profilePicture: "/images/artists/ThomYorke.jpg",
    origin: "Wellingborough, Northamptonshire, England",
    birthday: "1968-10-07",
    deathDate: "",
    bands: ["Radiohead"],
    instrument: ["Vocals", "Guitar", "Keyboards"],
    genre: ["Rock", "Alternative Rock", "Experimental Rock", "Electronica"],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "Jonny Greenwood",
    profilePicture: "/images/artists/JonnyGreenwood.jpg",
    origin: "Oxford, England",
    birthday: "1971-11-05",
    deathDate: "",
    bands: ["Radiohead"],
    instrument: ["Guitar", "Keyboards"],
    genre: ["Rock", "Alternative Rock", "Experimental Rock", "Electronica"],
    occupation: ["Musician", "Composer"],
  },
  {
    name: "Colin Greenwood",
    profilePicture: "/images/artists/ColinGreenwood.jpg",
    origin: "Oxford, England",
    birthday: "1969-06-26",
    deathDate: "",
    bands: ["Radiohead"],
    instrument: ["Bass Guitar"],
    genre: ["Rock", "Alternative Rock", "Experimental Rock", "Electronica"],
    occupation: ["Musician"],
  },
  {
    name: "Ed O'Brien",
    profilePicture: "/images/artists/EdObrien.jpg",
    origin: "Oxford, England",
    birthday: "1968-04-15",
    deathDate: "",
    bands: ["Radiohead"],
    instrument: ["Guitar"],
    genre: ["Rock", "Alternative Rock", "Experimental Rock", "Electronica"],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "Philip Selway",
    profilePicture: "/images/artists/PhilipSelway.jpg",
    origin: "Abingdon-on-Thames, Oxfordshire, England",
    birthday: "1967-05-23",
    deathDate: "",
    bands: ["Radiohead"],
    instrument: ["Drums", "Guitar"],
    genre: ["Rock", "Alternative Rock", "Experimental Rock", "Electronica"],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "Jack White",
    profilePicture: "/images/artists/JackWhite.jpg",
    origin: "Detroit, Michigan, United States",
    birthday: "1975-07-09",
    deathDate: "",
    bands: ["The White Stripes"],
    instrument: ["Vocals", "Guitar", "Keyboards"],
    genre: ["Rock", "Alternative Rock", "Blues Rock", "Folk", "Country"],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "Meg White",
    profilePicture: "/images/artists/MegWhite.jpg",
    origin: "Grosse Point Farms, Michigan, United States",
    birthday: "1974-12-10",
    deathDate: "",
    bands: ["The White Stripes"],
    instrument: ["Drums"],
    genre: ["Rock", "Alternative Rock", "Blues Rock", "Folk", "Country"],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "Ian Curtis",
    profilePicture: "/images/artists/IanCurtis.jpg",
    origin: "Stretford, Lancashire, England",
    birthday: "1956-07-15",
    deathDate: "1980-05-18",
    bands: ["Joy Division"],
    instrument: ["Vocals"],
    genre: ["Rock", "Post Punk"],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "Bernard Sumner",
    profilePicture: "/images/artists/BernardSumner.jpg",
    origin: "Broughton, Lancashire, England",
    birthday: "1956-01-04",
    deathDate: "",
    bands: ["Joy Division", "New Order"],
    instrument: ["Vocals", "Guitar", "Keyboards"],
    genre: ["Rock", "Post Punk", "New Wave", "Synthpop", "Electronica"],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "Peter Hook",
    profilePicture: "/images/artists/PeterHook.jpg",
    origin: "Broughton, Salford, England",
    birthday: "1956-02-13",
    deathDate: "",
    bands: ["Joy Division", "New Order"],
    instrument: ["Bass Guitar", "Vocals"],
    genre: ["Rock", "Post Punk", "New Wave", "Synthpop", "Electronica"],
    occupation: ["Musician", "Songwriter"],
  },
  {
    name: "Stephen Morris",
    profilePicture: "/images/artists/StephenMorris.jpg",
    origin: "Macclesfield, Cheshire, England",
    birthday: "1957-10-28",
    deathDate: "",
    bands: ["Joy Division", "New Order"],
    instrument: ["Drums"],
    genre: ["Rock", "Post Punk", "New Wave", "Synthpop", "Electronica"],
    occupation: ["Musician"],
  },
  {
    name: "Gillian Gilbert",
    profilePicture: "/images/artists/GillianGilbert.jpg",
    origin: "Whalley Range, Manchester, England",
    birthday: "1961-01-27",
    deathDate: "",
    bands: ["New Order"],
    instrument: ["Keyboards", "Guitar", "Vocals"],
    genre: ["Rock", "Post Punk", "New Wave", "Synthpop", "Electronica"],
    occupation: ["Musician"],
  },
];

Artist.insertMany(artistSeed)
  .then(() => console.log("artists have been added"))
  // .then(mongoose.connection.close())
  .catch((err) => console.log(err));
