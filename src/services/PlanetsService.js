class PlanetsService {
  static getPlanets(page) {
    return fetch(`http://swapi.dev/api/planetse/?page=${page}`);
  }
}

export default PlanetsService;
