import { StyleSheet, View, Text } from 'react-native'
import MapView from 'react-native-maps'

export default function Maps() {
  return (
    <View style={styles.mapContainer}>
      <Text style={styles.name}>Voici ma position !</Text>
      <MapView style={styles.mapStyle} showsUserLocation={true} />
    </View>
  )
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  mapStyle: {
    width: "90%",
    height: "50%",
    borderRadius: 20,
    alignSelf: 'center',
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'poppins-regular',
    textAlign: 'center',
    marginBottom: 20,
  }
});
