/* ============================================================
   MISSION CONFIG  —  edit this file to update the facts.
   Anything marked TODO is a guess or a blank you should fill in.
   ============================================================ */

window.MISSION = {

  missionary: {
    firstName: "Lincoln",
    lastName: "Malley",
    title: "Elder",
    get fullName() { return this.title + " " + this.firstName + " " + this.lastName; },
    email: "lincoln.malley@missionary.org",
    portrait: "photos/lincoln.jpg",          // his mission photo
    tagline: "¡Hola! Serving in Spanish at the foot of the Wasatch, one doorstep at a time.",
    homeWard: "Naperville 1st Ward",
    farewellDate: ""                         // TODO: optional, YYYY-MM-DD
  },

  mission: {
    name: "Utah Spanish Fork Mission",
    shortName: "Spanish Fork",
    country: "US",
    language: "Spanish",
    languageNative: "Español",
    presidentName: "President Kerry B. Dickerson and Sister Alison C. Dickerson",
    // The About page's "mission president" section. bio is in our own words from
    // the source; the section stays hidden while names or bio are empty.
    president: {
      names: "President Kerry B. Dickerson and Sister Alison C. Dickerson",
      since: "2024-07-01",                   // the mission was created that day; they are its first leaders
      photo: "",                             // optional: a photo of them, e.g. one he sends
      bio: [
        "President and Sister Dickerson were called from the Lebanon 3rd Ward of the Cookeville Tennessee Stake, and they are the parents of eight children. They are the first leaders of the Utah Spanish Fork Mission, which opened in July 2024.",
        "President Dickerson served his own mission in Ecuador, in the Quito Mission, and has been a bishop, a branch president and a counselor in a stake presidency. Sister Dickerson has served as a Primary president, a counselor in a Young Women presidency, and a Sunday School and Relief Society teacher."
      ],
      source: { label: "Church News", url: "https://www.thechurchnews.com/2024/1/19/24040238/16-new-mission-presidents-and-companions-serving-from-barbados-to-bangkok/" }
    },
    officeAddress: [                         // TODO: confirm from the mission office
      "Utah Spanish Fork Mission",
      "US"
    ],
    mapCenter: [40.1149, -111.6549],         // Spanish Fork, Utah
    mapZoom: 7,
    // Rough box around southern Utah County and the valleys south of it
    // (Spanish Fork, Utah Lake's south end, the Wasatch Front). Decorative only.
    boundsHint: [[40.4, -112.1], [39.5, -111.2]]
  },

  dates: {
    mtcStart: "2025-09-19",                  // entered the Mexico City MTC
    manilaMtcStart: "",                      // no second MTC known for this mission
    fieldStart: "",                          // TODO: not known yet, YYYY-MM-DD
    release: "2027-09-01",                   // expected release / homecoming
    transferLength: 6                        // weeks per transfer
  },

  links: {
    // The shared album the family links to
    googlePhotos: "https://photos.app.goo.gl/D3URGbxrSGa2Y6Ue8"
  },

  /* ------------------------------------------------------------
     GOOGLE MAPS
     Paste your Maps JavaScript API key below and the map page turns
     on. See "Setting up the map" in README.md for how to get one.
     Until a key is here, the page shows a friendly notice instead of
     a broken map. The key is visible in the page source — that is
     normal for Google Maps — so restrict it by website in the Google
     Cloud console once the site is deployed.
     ------------------------------------------------------------ */
  maps: {
    apiKey: "AIzaSyAFgOVCbW4-VKrasthQZ4g2PvMfPcQm0J4",           // <-- paste the key between the quotes
    defaultZoom: 17,      // how close the map starts. 15 = neighbourhood, 18 = rooftops
    mapType: "hybrid"     // "hybrid" = satellite with street names, "satellite" = imagery only
  },

  /* ------------------------------------------------------------
     AREAS — add a new entry every time he gets transferred.
     Set `current: true` on exactly one, and give the previous one
     an `end` date. Look up lat/lng by searching the town on
     Google Maps and copying the two numbers from the URL.
     ------------------------------------------------------------ */
  areas: [
    {
      name: "Mexico CTM",
      region: "Mexico City, Mexico",
      type: "mtc",
      start: "2025-09-19",
      end: null,
      lat: 19.5381,                          // Mexico City MTC campus (former Benemérito de las Américas), Gustavo A. Madero — TODO: confirm pin
      lng: -99.1532,
      zoom: 17,                              // optional: overrides maps.defaultZoom for this area
      companion: "",
      note: "",
      current: true
    }
  ]
};
