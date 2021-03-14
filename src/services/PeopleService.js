class PeopleService {
  static getPeople(page) {
    return fetch(`http://swapi.dev/api/people/?page=${page}`);
  }
}

export default PeopleService;
