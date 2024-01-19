import React from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet, Linking } from 'react-native'

export default function CallButton() {
  const handlePress = () => {
    Linking.openURL('tel:0678921791')
  }
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Contacter</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    paddingHorizontal: 100,
    paddingVertical: 20,
    backgroundColor: '#fbc46b',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'poppins-bold',
    fontWeight: '600',
  },
})
