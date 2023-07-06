import { Component } from "react";

export class LiveSearch extends Component {
  state = {
    searchTerm: "",
    filteredMovies: [],
  };
  constructor() {
    super();
  }

  updateTerm = e => {
    const searchTerm = e.target.value;
    this.setState({
      searchTerm: searchTerm,
    });
    this.filterMovies(searchTerm);
  };

  filterMovies = searchTerm => {
    const filteredMovies = filme.filter(film => {
      const normalizedTitle = film.title.toLowerCase().trim();
      const normalizedSearchTerm = searchTerm.toLowerCase().trim();
      return normalizedTitle.includes(normalizedSearchTerm);
    });
    this.setState({
      filteredMovies: filteredMovies,
    });
  };

  render = () => {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.updateTerm}
          />
        </div>
        <div>
          {this.state.searchTerm.length === 0 &&
            "Introduceti un termen de cautare"}
          {this.state.filteredMovies.length === 0 &&
            this.state.searchTerm.length > 0 &&
            "Nu am gasit filme dupa termenul tau."}
          {this.state.filteredMovies.length > 0 &&
            this.state.filteredMovies.map(film => {
              return <div key={film.id}>{film.title}</div>;
            })}
        </div>
      </div>
    );
  };
}

const filme = [
  {
    adult: false,
    backdrop_path: "/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg",
    id: 335977,
    title: "Indiana Jones and the Dial of Destiny",
    original_language: "en",
    original_title: "Indiana Jones and the Dial of Destiny",
    overview:
      "Finding himself in a new era, approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
    poster_path: "/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
    media_type: "movie",
    genre_ids: [12, 28, 14],
    popularity: 740.388,
    release_date: "2023-06-28",
    video: false,
    vote_average: 6.6,
    vote_count: 438,
  },
  {
    adult: false,
    backdrop_path: "/4QpKxH614YFIsmiIBVUbsnG2H8w.jpg",
    id: 961323,
    title: "Nimona",
    original_language: "en",
    original_title: "Nimona",
    overview:
      "A knight framed for a tragic crime teams with a scrappy, shape-shifting teen to prove his innocence.",
    poster_path: "/2NQljeavtfl22207D1kxLpa4LS3.jpg",
    media_type: "movie",
    genre_ids: [16, 878, 28, 12, 14],
    popularity: 245.841,
    release_date: "2023-06-23",
    video: false,
    vote_average: 7.842,
    vote_count: 133,
  },
  {
    adult: false,
    backdrop_path: "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
    id: 447365,
    title: "Guardians of the Galaxy Vol. 3",
    original_language: "en",
    original_title: "Guardians of the Galaxy Vol. 3",
    overview:
      "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    poster_path: "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    media_type: "movie",
    genre_ids: [28, 878, 12],
    popularity: 816.21,
    release_date: "2023-05-03",
    video: false,
    vote_average: 8.053,
    vote_count: 2172,
  },
  {
    adult: false,
    backdrop_path: "/7fN5rEBcRoylG3oZPZl1Qe6y7UV.jpg",
    id: 575264,
    title: "Mission: Impossible - Dead Reckoning Part One",
    original_language: "en",
    original_title: "Mission: Impossible - Dead Reckoning Part One",
    overview:
      "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the fate of the world at stake, and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan is forced to consider that nothing can matter more than his mission – not even the lives of those he cares about most.",
    poster_path: "/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    media_type: "movie",
    genre_ids: [28, 12, 53],
    popularity: 278.244,
    release_date: "2023-07-08",
    video: false,
    vote_average: 7.833,
    vote_count: 5,
  },
  {
    adult: false,
    backdrop_path: "/4tdV5AeojEdbvn6VpeQrbuDlmzs.jpg",
    id: 916224,
    title: "Suzume",
    original_language: "ja",
    original_title: "すずめの戸締まり",
    overview:
      "Suzume, 17, lost her mother as a little girl. On her way to school, she meets a mysterious young man. But her curiosity unleashes a calamity that endangers the entire population of Japan, and so Suzume embarks on a journey to set things right.",
    poster_path: "/vIeu8WysZrTSFb2uhPViKjX9EcC.jpg",
    media_type: "movie",
    genre_ids: [16, 18, 12, 14],
    popularity: 439.907,
    release_date: "2022-11-11",
    video: false,
    vote_average: 7.865,
    vote_count: 478,
  },
  {
    adult: false,
    backdrop_path: "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    id: 569094,
    title: "Spider-Man: Across the Spider-Verse",
    original_language: "en",
    original_title: "Spider-Man: Across the Spider-Verse",
    overview:
      "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
    poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    media_type: "movie",
    genre_ids: [28, 12, 16, 878],
    popularity: 1542.139,
    release_date: "2023-05-31",
    video: false,
    vote_average: 8.537,
    vote_count: 2041,
  },
  {
    adult: false,
    backdrop_path: "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
    id: 385687,
    title: "Fast X",
    original_language: "en",
    original_title: "Fast X",
    overview:
      "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
    poster_path: "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    media_type: "movie",
    genre_ids: [28, 80, 53],
    popularity: 3283.417,
    release_date: "2023-05-17",
    video: false,
    vote_average: 7.348,
    vote_count: 2428,
  },
  {
    adult: false,
    backdrop_path: "/5DKVH8KeqFwPacWFMyYqTaECxJP.jpg",
    id: 955555,
    title: "The Roundup: No Way Out",
    original_language: "ko",
    original_title: "범죄도시3",
    overview:
      "Detective Ma Seok-do changes his affiliation from the Geumcheon Police Station to the Metropolitan Investigation Team, in order to eradicate Japanese gangsters who enter Korea to commit heinous crimes.",
    poster_path: "/w5ZzelrldWr7CmOTSiwagoe5Vl9.jpg",
    media_type: "movie",
    genre_ids: [80, 28],
    popularity: 135.432,
    release_date: "2023-05-31",
    video: false,
    vote_average: 6.2,
    vote_count: 52,
  },
  {
    adult: false,
    backdrop_path: "/aO6hDsqTIAtQFUBoPWklmPFsSTW.jpg",
    id: 614479,
    title: "Insidious: The Red Door",
    original_language: "en",
    original_title: "Insidious: The Red Door",
    overview:
      "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
    poster_path: "/azTC5osYiqei1ofw6Z3GmUrxQbi.jpg",
    media_type: "movie",
    genre_ids: [27, 9648, 53],
    popularity: 488.646,
    release_date: "2023-07-05",
    video: false,
    vote_average: 6.438,
    vote_count: 16,
  },
  {
    adult: false,
    backdrop_path: "/oqP1qEZccq5AD9TVTIaO6IGUj7o.jpg",
    id: 455476,
    title: "Knights of the Zodiac",
    original_language: "en",
    original_title: "Knights of the Zodiac",
    overview:
      "When a headstrong street orphan, Seiya, in search of his abducted sister unwittingly taps into hidden powers, he discovers he might be the only person alive who can protect a reincarnated goddess, sent to watch over humanity. Can he let his past go and embrace his destiny to become a Knight of the Zodiac?",
    poster_path: "/qW4crfED8mpNDadSmMdi7ZDzhXF.jpg",
    media_type: "movie",
    genre_ids: [14, 28, 12],
    popularity: 3355.755,
    release_date: "2023-04-27",
    video: false,
    vote_average: 6.521,
    vote_count: 307,
  },
  {
    adult: false,
    backdrop_path: "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
    id: 502356,
    title: "The Super Mario Bros. Movie",
    original_language: "en",
    original_title: "The Super Mario Bros. Movie",
    overview:
      "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
    poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    media_type: "movie",
    genre_ids: [16, 10751, 12, 14, 35],
    popularity: 1256.912,
    release_date: "2023-04-05",
    video: false,
    vote_average: 7.8,
    vote_count: 5407,
  },
  {
    adult: false,
    backdrop_path: "/jQbnhNvFQXO7jwLzdrceCTspEeI.jpg",
    id: 346698,
    title: "Barbie",
    original_language: "en",
    original_title: "Barbie",
    overview:
      "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    poster_path: "/cgYg04miVQUAG2FKk3amSnnHzOp.jpg",
    media_type: "movie",
    genre_ids: [35],
    popularity: 463.245,
    release_date: "2023-07-19",
    video: false,
    vote_average: 0.0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: "/k1gMjXi1vtwTDiGwfBw7L897zs3.jpg",
    id: 1140056,
    title: "Gold Brick",
    original_language: "fr",
    original_title: "Cash",
    overview:
      "Determined to even the scales and profit from his thankless job, a factory worker schemes to traffic luxury perfumes from under his employer's nose.",
    poster_path: "/4x9u5HsxeSJu9SW9Pf6fVVDPwxv.jpg",
    media_type: "movie",
    genre_ids: [35, 18],
    popularity: 27.618,
    release_date: "2023-07-06",
    video: false,
    vote_average: 6.3,
    vote_count: 2,
  },
  {
    adult: false,
    backdrop_path: "/cSYLX73WskxCgvpN3MtRkYUSj1T.jpg",
    id: 976573,
    title: "Elemental",
    original_language: "en",
    original_title: "Elemental",
    overview:
      "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
    poster_path: "/8riWcADI1ekEiBguVB9vkilhiQm.jpg",
    media_type: "movie",
    genre_ids: [16, 35, 10751, 14, 10749, 18],
    popularity: 1072.694,
    release_date: "2023-06-14",
    video: false,
    vote_average: 7.5,
    vote_count: 344,
  },
  {
    adult: false,
    backdrop_path: "/7I6VUdPj6tQECNHdviJkUHD2u89.jpg",
    id: 603692,
    title: "John Wick: Chapter 4",
    original_language: "en",
    original_title: "John Wick: Chapter 4",
    overview:
      "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    media_type: "movie",
    genre_ids: [28, 53, 80],
    popularity: 1437.077,
    release_date: "2023-03-22",
    video: false,
    vote_average: 7.86,
    vote_count: 3531,
  },
  {
    adult: false,
    backdrop_path: "/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
    id: 76600,
    title: "Avatar: The Way of Water",
    original_language: "en",
    original_title: "Avatar: The Way of Water",
    overview:
      "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    media_type: "movie",
    genre_ids: [878, 12, 28],
    popularity: 752.666,
    release_date: "2022-12-14",
    video: false,
    vote_average: 7.675,
    vote_count: 9001,
  },
  {
    adult: false,
    backdrop_path: "/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
    id: 298618,
    title: "The Flash",
    original_language: "en",
    original_title: "The Flash",
    overview:
      "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
    poster_path: "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    media_type: "movie",
    genre_ids: [878, 28, 12],
    popularity: 786.283,
    release_date: "2023-06-13",
    video: false,
    vote_average: 6.707,
    vote_count: 740,
  },
  {
    adult: false,
    backdrop_path: "/wRxLAw4l17LqiFcPLkobriPTZAw.jpg",
    id: 697843,
    title: "Extraction 2",
    original_language: "en",
    original_title: "Extraction 2",
    overview:
      "Tasked with extracting a family who is at the mercy of a Georgian gangster, Tyler Rake infiltrates one of the world's deadliest prisons in order to save them. But when the extraction gets hot, and the gangster dies in the heat of battle, his equally ruthless brother tracks down Rake and his team to Vienna, in order to get revenge.",
    poster_path: "/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
    media_type: "movie",
    genre_ids: [28, 53],
    popularity: 1422.453,
    release_date: "2023-06-09",
    video: false,
    vote_average: 7.607,
    vote_count: 1177,
  },
  {
    adult: false,
    backdrop_path: "/3wooMoV9bGyjYrwNFbJiDXcBOYs.jpg",
    id: 1145612,
    title: "Fate/strange Fake -Whispers of Dawn-",
    original_language: "ja",
    original_title: "Fate/strange Fake -Whispers of Dawn-",
    overview:
      "In a Holy Grail War, Mages (Masters) and their Heroic Spirits (Servants) fight for the control of the Holy Grail—an omnipotent wish-granting device said to fulfill any desire. Years have passed since the end of the Fifth Holy Grail War in Japan. Now, signs portend the emergence of a new Holy Grail in the western American city of Snowfield. Sure enough, Masters and Servants begin to gather... A missing Servant class... Impossible Servant summonings... A nation shrouded in secrecy... And a city created as a battleground. In the face of such irregularities, the Holy Grail War is twisted and driven into the depth of madness. Let the curtain rise on a masquerade of humans and heroes, made to dance upon the stage of a false Holy Grail.",
    poster_path: "/7Cf2NS9oH1VpH23NyWR4J7WIOv9.jpg",
    media_type: "movie",
    genre_ids: [16, 28, 14, 18, 10770],
    popularity: 14.76,
    release_date: "2023-07-01",
    video: false,
    vote_average: 8.1,
    vote_count: 7,
  },
  {
    adult: false,
    backdrop_path: "/ioCuhiUs0SW5UgembG0UiQZWPLY.jpg",
    id: 1040148,
    title: "Ruby Gillman, Teenage Kraken",
    original_language: "en",
    original_title: "Ruby Gillman, Teenage Kraken",
    overview:
      "A shy teenager discovers that she's part of a legendary royal lineage of mythical sea krakens and that her destiny, in the depths of the oceans, is bigger than she ever dreamed.",
    poster_path: "/lotWiuWuTGlQ94rzBdy6ZmKZnTA.jpg",
    media_type: "movie",
    genre_ids: [16, 10751, 14, 35],
    popularity: 240.166,
    release_date: "2023-06-28",
    video: false,
    vote_average: 6.479,
    vote_count: 24,
  },
];
