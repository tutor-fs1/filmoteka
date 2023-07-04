import { Component } from "react";
import "./App.css";
import { Container } from "./common/Container";
import { Modal } from "./common/Modal";
import { Header } from "./header/Header";
import { Main } from "./main/Main";

class App extends Component {
  state = {
    modalIsVisible: false,
    selectedMovie: false,
  };
  constructor() {
    super();
  }
  openModal(id) {
    this.setState({
      modalIsVisible: true,
      selectedMovie: id,
    });
  }
  closeModal() {
    this.setState({
      modalIsVisible: false,
      selectedMovie: false,
    });
  }
  render() {
    return (
      <>
        {this.state.modalIsVisible && (
          <Modal
            closeModal={this.closeModal.bind(this)}
            id={this.state.selectedMovie}
          />
        )}
        <Container>
          <Header />
        </Container>
        <Container>
          <Main openModal={this.openModal.bind(this)} />
        </Container>
        <Container solidColor="#dedede">footer</Container>
      </>
    );
  }
}

const data = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/u17VLZqWFbeJsj1HpvB6QOOHvlC.jpg",
      id: 455476,
      title: "Knights of the Zodiac",
      original_language: "en",
      original_title: "Knights of the Zodiac",
      overview:
        "When a headstrong street orphan, Seiya, in search of his abducted sister unwittingly taps into hidden powers, he discovers he might be the only person alive who can protect a reincarnated goddess, sent to watch over humanity. Can he let his past go and embrace his destiny to become a Knight of the Zodiac?",
      poster_path: "/qW4crfED8mpNDadSmMdi7ZDzhXF.jpg",
      media_type: "movie",
      genre_ids: [14, 28, 12],
      popularity: 318.342,
      release_date: "2023-04-27",
      video: false,
      vote_average: 6.474,
      vote_count: 172,
    },
    {
      adult: false,
      backdrop_path: "/37LyKFPr7ksoXMea7MIWFa8Llaj.jpg",
      id: 714669,
      title: "Run Rabbit Run",
      original_language: "en",
      original_title: "Run Rabbit Run",
      overview:
        "Sarah is a fertility doctor with a firm understanding of the cycle of life. When she is forced to make sense of the increasingly strange behavior of her young daughter Mia, she must challenge her own beliefs and confront a ghost from her past.",
      poster_path: "/7b6gA6qvpxl48pjQ0m8ezNsFiEn.jpg",
      media_type: "movie",
      genre_ids: [27, 53],
      popularity: 18.196,
      release_date: "2023-01-19",
      video: false,
      vote_average: 5.867,
      vote_count: 15,
    },
    {
      adult: false,
      backdrop_path: "/j0IobR8VH9x0Y5koAcnB7VkPW04.jpg",
      id: 335977,
      title: "Indiana Jones and the Dial of Destiny",
      original_language: "en",
      original_title: "Indiana Jones and the Dial of Destiny",
      overview:
        "Finding himself in a new era, approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
      poster_path: "/y4zAHCRmS1wof5bUmEM9CZOYQ04.jpg",
      media_type: "movie",
      genre_ids: [12, 28],
      popularity: 450.885,
      release_date: "2023-06-28",
      video: false,
      vote_average: 6.191,
      vote_count: 68,
    },
    {
      adult: false,
      backdrop_path: "/2I5eBh98Q4aPq8WdQrHdTC8ARhY.jpg",
      id: 569094,
      title: "Spider-Man: Across the Spider-Verse",
      original_language: "en",
      original_title: "Spider-Man: Across the Spider-Verse",
      overview:
        "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
      poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
      media_type: "movie",
      genre_ids: [28, 12, 16, 878],
      popularity: 1855.44,
      release_date: "2023-05-31",
      video: false,
      vote_average: 8.571,
      vote_count: 1838,
    },
    {
      adult: false,
      backdrop_path: "/e2Jd0sYMCe6qvMbswGQbM0Mzxt0.jpg",
      id: 385687,
      title: "Fast X",
      original_language: "en",
      original_title: "Fast X",
      overview:
        "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
      poster_path: "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
      media_type: "movie",
      genre_ids: [28, 80, 53],
      popularity: 4052.245,
      release_date: "2023-05-17",
      video: false,
      vote_average: 7.291,
      vote_count: 2169,
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
      genre_ids: [16, 35, 10751, 14, 10749],
      popularity: 1178.288,
      release_date: "2023-06-14",
      video: false,
      vote_average: 7.4,
      vote_count: 228,
    },
    {
      adult: false,
      backdrop_path: "/nniZPBIfrep9wbx0l1529RHXeD8.jpg",
      id: 502356,
      title: "The Super Mario Bros. Movie",
      original_language: "en",
      original_title: "The Super Mario Bros. Movie",
      overview:
        "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
      media_type: "movie",
      genre_ids: [16, 10751, 12, 14, 35],
      popularity: 1444.934,
      release_date: "2023-04-05",
      video: false,
      vote_average: 7.795,
      vote_count: 5212,
    },
    {
      adult: false,
      backdrop_path: "/fhquRW28vRZHr26orSaFFnhYIA0.jpg",
      id: 697843,
      title: "Extraction 2",
      original_language: "en",
      original_title: "Extraction 2",
      overview:
        "Tasked with extracting a family who is at the mercy of a Georgian gangster, Tyler Rake infiltrates one of the world's deadliest prisons in order to save them. But when the extraction gets hot, and the gangster dies in the heat of battle, his equally ruthless brother tracks down Rake and his team to Vienna, in order to get revenge.",
      poster_path: "/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
      media_type: "movie",
      genre_ids: [28, 53],
      popularity: 2167.075,
      release_date: "2023-06-09",
      video: false,
      vote_average: 7.642,
      vote_count: 972,
    },
    {
      adult: false,
      backdrop_path: "/fgw4rFs4XMWdJTWp1eMacHKQqbZ.jpg",
      id: 603692,
      title: "John Wick: Chapter 4",
      original_language: "en",
      original_title: "John Wick: Chapter 4",
      overview:
        "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
      poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
      media_type: "movie",
      genre_ids: [28, 53, 80],
      popularity: 1760.415,
      release_date: "2023-03-22",
      video: false,
      vote_average: 7.861,
      vote_count: 3381,
    },
    {
      adult: false,
      backdrop_path: "/fEe2csLOUsTyaLdCccVJfFeJzhx.jpg",
      id: 298618,
      title: "The Flash",
      original_language: "en",
      original_title: "The Flash",
      overview:
        "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
      poster_path: "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
      media_type: "movie",
      genre_ids: [878, 28, 12],
      popularity: 891.684,
      release_date: "2023-06-13",
      video: false,
      vote_average: 6.724,
      vote_count: 669,
    },
    {
      adult: false,
      backdrop_path: "/mmSSn8Yn3GbJv9MsSnD4J1LnN9l.jpg",
      id: 988078,
      title: "Through My Window: Across the Sea",
      original_language: "es",
      original_title: "A través del mar",
      overview:
        "After a year of long-distance, Raquel and Ares reunite on a steamy beach trip. Faced with fresh flirtations and insecurities, will their love prevail?",
      poster_path: "/dAyJqJ8KoglZysttC6BfVmDFQUt.jpg",
      media_type: "movie",
      genre_ids: [10749, 18, 35],
      popularity: 687.447,
      release_date: "2023-06-23",
      video: false,
      vote_average: 6.631,
      vote_count: 240,
    },
    {
      adult: false,
      backdrop_path: "/4pNlHx6ytdYBDs94PgcS0wQkbc4.jpg",
      id: 76600,
      title: "Avatar: The Way of Water",
      original_language: "en",
      original_title: "Avatar: The Way of Water",
      overview:
        "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      media_type: "movie",
      genre_ids: [878, 12, 28],
      popularity: 856.036,
      release_date: "2022-12-14",
      video: false,
      vote_average: 7.681,
      vote_count: 8881,
    },
    {
      adult: false,
      backdrop_path: "/thyP4ymuYo846DzMbghwja6lbY0.jpg",
      id: 647250,
      title: "The Machine",
      original_language: "en",
      original_title: "The Machine",
      overview:
        "Bert Kreischer faces a familial crisis and the arrival of his estranged father when the ghost of his booze-soaked past arrives: a murderous mobster hellbent on kidnapping Bert back to the motherland to atone for his crimes. Together, he and his father must retrace the steps of his younger self in the midst of a war between a sociopathic crime family while they attempt to find common ground.",
      poster_path: "/x9dGI7LIOMMlFzyIBUta1svft2Y.jpg",
      media_type: "movie",
      genre_ids: [35, 28, 80],
      popularity: 491.483,
      release_date: "2023-05-25",
      video: false,
      vote_average: 6.292,
      vote_count: 36,
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
      popularity: 247.262,
      release_date: "2023-07-19",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/uvjI5xzMv7ZBYPWnt9nGXUa2v4u.jpg",
      id: 1136736,
      title: "Lust Stories 2",
      original_language: "hi",
      original_title: "Lust Stories 2",
      overview:
        "Four eminent Indian directors explore sex, desire and love through short films in this sequel to 2018's Emmy-nominated 'Lust Stories'.",
      poster_path: "/p5x729JI6wZs9hCqX7tc7oH87ih.jpg",
      media_type: "movie",
      genre_ids: [18, 10749],
      popularity: 30.724,
      release_date: "2023-06-29",
      video: false,
      vote_average: 6.3,
      vote_count: 3,
    },
    {
      adult: false,
      backdrop_path: "/cKE9qZqYtF4jimf0GFOqKfy7NEU.jpg",
      id: 884605,
      title: "No Hard Feelings",
      original_language: "en",
      original_title: "No Hard Feelings",
      overview:
        "On the brink of losing her childhood home, Maddie discovers an intriguing job listing: wealthy helicopter parents looking for someone to “date” their introverted 19-year-old son, Percy, before he leaves for college. To her surprise, Maddie soon discovers the awkward Percy is no sure thing.",
      poster_path: "/5xeNPGbM8ImVdJACUoGpXT8Pxx3.jpg",
      media_type: "movie",
      genre_ids: [35, 10749],
      popularity: 425.113,
      release_date: "2023-06-15",
      video: false,
      vote_average: 6.349,
      vote_count: 86,
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
      popularity: 140.443,
      release_date: "2023-07-08",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/qWQSnedj0LCUjWNp9fLcMtfgadp.jpg",
      id: 667538,
      title: "Transformers: Rise of the Beasts",
      original_language: "en",
      original_title: "Transformers: Rise of the Beasts",
      overview:
        "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
      poster_path: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
      media_type: "movie",
      genre_ids: [28, 12, 878],
      popularity: 1342.807,
      release_date: "2023-06-06",
      video: false,
      vote_average: 7.119,
      vote_count: 493,
    },
    {
      adult: false,
      backdrop_path: "/b8tX15xHPai3bYeKYgAZikANTGl.jpg",
      id: 882569,
      title: "Guy Ritchie's The Covenant",
      original_language: "en",
      original_title: "Guy Ritchie's The Covenant",
      overview:
        "During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of grueling terrain.",
      poster_path: "/kVG8zFFYrpyYLoHChuEeOGAd6Ru.jpg",
      media_type: "movie",
      genre_ids: [10752, 28, 53],
      popularity: 650.163,
      release_date: "2023-04-19",
      video: false,
      vote_average: 7.781,
      vote_count: 823,
    },
    {
      adult: false,
      backdrop_path: "/q3IK7KJPdfl8AeJnBvB1AQbIhBM.jpg",
      id: 447365,
      title: "Guardians of the Galaxy Vol. 3",
      original_language: "en",
      original_title: "Guardians of the Galaxy Vol. 3",
      overview:
        "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
      poster_path: "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
      media_type: "movie",
      genre_ids: [28, 878, 12],
      popularity: 934.598,
      release_date: "2023-05-03",
      video: false,
      vote_average: 8.052,
      vote_count: 2127,
    },
  ],
  total_pages: 1000,
  total_results: 20000,
};

export default App;
