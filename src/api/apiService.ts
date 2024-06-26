// apiService.ts

import axios from 'axios';
import { ApodData, NeoWsDataItem } from '../types';

const NASA_API_KEY = 'z2uiWe5Kff5LCmcrD4E0b6NvVLoUfMIokUO85zrZ';
const NASA_APOD_URL = 'https://api.nasa.gov/planetary/apod';
const NASA_NEOWS_URL = 'https://api.nasa.gov/neo/rest/v1';

export async function fetchApodData(): Promise<ApodData> {
  try {
    const response = await axios.get(NASA_APOD_URL, {
      params: {
        api_key: NASA_API_KEY,
        // lang: 'es', no la pude pasar en español, daba un error el cual no se pudo solucionar :D
      },
    });
    // Ajustar el formato de la fecha si es necesario
    const formattedDate = new Date(response.data.date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return { ...response.data, date: formattedDate } as ApodData;
  } catch (error) {
    console.error('Error fetching APOD data:', error);
    throw error;
  }
}

// Library

export async function fetchNeoWsData(startDate: string, endDate: string): Promise<NeoWsDataItem[]> {
  try {
    const response = await axios.get(`${NASA_NEOWS_URL}/feed`, {
      params: {
        start_date: startDate,
        end_date: endDate,
        api_key: NASA_API_KEY,
      },
    });

    // Procesar los datos de NEOs desde la respuesta
    const neosData: NeoWsDataItem[] = [];

    for (const date in response.data.near_earth_objects) {
      response.data.near_earth_objects[date].forEach((neo: any) => {
        neosData.push({
          id: neo.id,
          name: neo.name,
          absolute_magnitude_h: neo.absolute_magnitude_h,
          estimated_diameter_min: neo.estimated_diameter.kilometers.estimated_diameter_min,
          estimated_diameter_max: neo.estimated_diameter.kilometers.estimated_diameter_max,
          close_approach_date: date,
          miss_distance_kilometers: neo.close_approach_data[0].miss_distance.kilometers,
          is_potentially_hazardous_asteroid: neo.is_potentially_hazardous_asteroid,
        });
      });
    }

    return neosData;
  } catch (error) {
    console.error('Error fetching NeoWs data:', error);
    throw error;
  }
}