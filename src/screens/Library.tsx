// En NeoWsListScreen.tsx (o donde estés llamando fetchNeoWsData)

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { fetchNeoWsData } from '../api/apiService';
import { NeoWsDataItem } from '../types';

export const Library: React.FC = () => {
  const [neosData, setNeosData] = useState<NeoWsDataItem[]>([]);

  useEffect(() => {
    const startDate = '2024-06-01'; // Fecha de inicio válida (YYYY-MM-DD)
    const endDate = '2024-06-07'; // Fecha de fin válida (YYYY-MM-DD)

    const fetchAndSetNeosData = async () => {
      try {
        const data = await fetchNeoWsData(startDate, endDate);
        setNeosData(data);
      } catch (error) {
        console.error('Error fetching NeoWs data:', error);
      }
    };

    fetchAndSetNeosData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Objetos Cercanos a la Tierra</Text>
      <FlatList
        data={neosData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>Nombre: {item.name}</Text>
            <Text>Magnitud Absoluta: {item.absolute_magnitude_h}</Text>
            <Text>Diámetro Estimado (km): {item.estimated_diameter_min} - {item.estimated_diameter_max}</Text>
            <Text>Fecha de Aproximación: {item.close_approach_date}</Text>
            <Text>Distancia de Aproximación (km): {item.miss_distance_kilometers}</Text>
            <Text>Potencialmente Peligroso: {item.is_potentially_hazardous_asteroid ? 'Sí' : 'No'}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
