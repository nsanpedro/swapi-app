import axios from 'axios';
import { PEOPLE_URL } from '../config/config';

class PeopleService {
  static getPeople(page) {
    return fetch(`http://swapi.dev/api/people/?page=${page}`);
  }
}

export default PeopleService;
