import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'


export default function Map() {
  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={
          {
            latitude: 57.0488,
            longitude: 9.9217,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }
        }
        provider='google'
      >
      </MapView>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
  
})