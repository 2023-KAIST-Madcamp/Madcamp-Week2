import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, } from 'react-native'
import MapView, {Heatmap , Marker} from 'react-native-maps';

function Result({navigation}) {

    const initialRegion = {
        latitude: 36.5, // Center latitude
        longitude: 30, // Center longitude
        latitudeDelta: 360, // Zoom level. Adjust as needed for your view
        longitudeDelta: 360, // Zoom level. Adjust as needed for your view
      };
    return (
        <View style={styles.container}>
                 <MapView 
                 initialRegion={initialRegion}
                 style={styles.map} >
                        {/* Add markers or other map elements here */}
                        <Marker
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                        }}
                        title="Marker Title"
                        description="Marker Description"
                        />
                </MapView>
      </View>
    )
  }


  const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });
export default Result
