import axios from 'axios';
import { PLANETS_URL } from '../config/config';

class PlanetsService {
  static getPlanets() {
    return fetch(PLANETS_URL);
  }
}

export default PlanetsService;
