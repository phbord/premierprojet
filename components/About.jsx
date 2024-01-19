import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as Speech from 'expo-speech'

export default function About() {
  useEffect(() => {
    //Speech.getAvailableVoicesAsync().then(voices => console.log('Liste des voix =>', voices))
    Speech.speak('Bienvenue sur mon profil', {
      identifier: "fr-FR-language",
      language: "fr-FR",
      name: "fr-FR-language",
      quality: "Enhanced",
    })
  }, [])

  return (
    <View>
      <Text style={styles.title}>Mon nom est Pierre-Henri</Text>
      <Text style={styles.desc}>applications mobiles avec Expo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: "#ffffff",
    fontSize: 25,
    fontFamily: 'poppins-bold',
    textAlign: "center",
  },
  desc: {
    color: "#848484",
    marginTop: 15,
    fontFamily: 'poppins-regular',
    textAlign: "center",
  },
})
