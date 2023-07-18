export const fetchMovie = (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8b218b85545392c9f8705c30fbfd1bce`).then(res => res.json())
}
export const fetchRandomPage = (randomPage) => {
  return fetch(`https://api.themoviedb.org/3/trending/movie/day?page=${randomPage}&api_key=8b218b85545392c9f8705c30fbfd1bce`)
    .then(response => {
      return response.json();
    })
}