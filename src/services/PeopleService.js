import axios from 'axios';
import { PEOPLE_URL } from '../config/config';

class PeopleService {
  static getPeople() {
    return axios.get(PEOPLE_URL);
  }
}

export default PeopleService;
