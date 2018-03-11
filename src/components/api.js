// Base API Configuration
import axios from 'axios';

export const API = axios.get({
    baseURL: 'http://www.dnd5eapi.co/api/races{index}'
});
