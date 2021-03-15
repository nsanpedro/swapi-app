class PlanetsService {
  static getPlanets(page) {
    return fetch(`http://swapi.dev/api/planetsa/?page=${page}`);
  }
}

export default PlanetsService;
