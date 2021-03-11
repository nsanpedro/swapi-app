import axios from 'axios';
import { PEOPLE_URL } from '../config/config';

class PeopleService {
  static getPeople() {
    return fetch(PEOPLE_URL);
  }
}

export default PeopleService;
