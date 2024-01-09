import React, { useRef } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Map({route}) {
  const mapRef = useRef(null);
  const {famous } = route.params

  // const initialRegion = {
  //   latitude: 13.4443,
  //   longitude: 144.7937,
  //   latitudeDelta: 0.9,
  //   longitudeDelta: 0.9,
  // };


  const initialRegion = {
    latitude: famous.first.coordinate.latitude,
    longitude: famous.first.coordinate.longitude,
    latitudeDelta: famous.first.coordinate.latitudeDelta,
    longitudeDelta: famous.first.coordinate.longitudeDelta,
  };

  const markers = famous.famous.map((item, index) => ({
    id: index + 1,
    coordinate: { latitude: item.coordinate.latitude, longitude: item.coordinate.longitude },
    title: item.title,
    // Add other properties as needed from famous.famous
  }));
  const handleZoomToCoordinates = (lat, long) => {

    console.log(lat)
    console.log(long)
    const newRegion = {
      latitude: lat,
      longitude: long,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    };

    if (mapRef.current) {
      mapRef.current.animateToRegion(newRegion, 1000);
    }
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion} ref={mapRef}>
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
          />
        ))}
      </MapView>
      <View style={styles.buttonContainer}>
        {markers.map((marker, index) => (
          <View key={marker.id} style={styles.buttonWrapper}>
            <Button
              title={marker.title}
              onPress={() => handleZoomToCoordinates(marker.coordinate.latitude, marker.coordinate.longitude)}
              style={styles.buttonText}
            />
          </View>
        ))}
      </View>    
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '90%',
  },
  buttonContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch', // Make the items stretch to have the same height
    marginBottom: 16, // Adjust the bottom margin as needed
    paddingHorizontal: 16, // Horizontal padding for buttons
  },
  buttonWrapper: {
    backgroundColor: 'transparent',
    flex: 1,
    height: 50,
    marginHorizontal: 4, // Add some margin between buttons
  },
  button: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: 'black',
  },

});