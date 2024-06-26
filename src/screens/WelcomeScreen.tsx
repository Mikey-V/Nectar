// WelcomeScreen.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Linking, ScrollView } from 'react-native';
import { fetchApodData } from '../api/apiService';
import { ApodData } from '../types';

export const WelcomeScreen: React.FC = () => {
  const [apodData, setApodData] = useState<ApodData | null>(null);

  useEffect(() => {
    const fetchAndSetApodData = async () => {
      try {
        const data = await fetchApodData();
        setApodData(data);
      } catch (error) {
        console.error('Error fetching APOD data:', error);
      }
    };

    fetchAndSetApodData();
  }, []);

  if (!apodData) {
    return <View style={styles.container}><Text>Cargando...</Text></View>;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>¡Bienvenido a Mi App!</Text>
        <Text style={styles.subtitle}>Imagen Astronómica del Día (APOD)</Text>
        <Image source={{ uri: apodData.url }} style={styles.roundedImage} />
        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Título:</Text>
            <Text style={styles.tableData}>{apodData.title}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Fecha:</Text>
            <Text style={styles.tableData}>{apodData.date}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Descripción:</Text>
            <Text style={styles.tableData}>{apodData.explanation}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Ver en HD:</Text>
            <Text style={[styles.tableData, styles.hdLink]} onPress={() => Linking.openURL(apodData.hdurl)}>Ver en HD</Text>
          </View>
        </View>
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  roundedImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
  tableContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  tableLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  tableData: {
    flex: 1,
  },
  hdLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

