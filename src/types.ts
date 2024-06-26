// tipados de datos

export interface ApodData {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

export interface NeoWsDataItem {
  id: string;
  name: string;
  absolute_magnitude_h: number;
  estimated_diameter_min: number;
  estimated_diameter_max: number;
  close_approach_date: string;
  miss_distance_kilometers: number;
  is_potentially_hazardous_asteroid: boolean;
}

