import axios from 'axios';
import { PLANETS_URL } from '../config/config';

class PlanetsService {
  static getPlanets(page) {
    return fetch(`http://swapi.dev/api/planets/?page=${page}`);
  }
}

export default PlanetsService;
