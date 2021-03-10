import axios from 'axios';
import { PLANETS_URL } from '../config/config';

class PlanetsService {
  static getPlanets() {
    return axios.get(PLANETS_URL);
  }
}

export default PlanetsService;