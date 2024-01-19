import React from 'react'
import { Image, TouchableOpacity, View, StyleSheet } from 'react-native'
import * as WebBrowser from 'expo-web-browser'

export default function Socials() {
  const openLinkedin = () => {
    WebBrowser.openBrowserAsync('https://www.linkedin.com/in/phbord/')
  }
  
  const openInstagram = () => {
    WebBrowser.openBrowserAsync('https://www.instagram.com/explore/tags/phbord/')
  }

  return (
    <View style={styles.rsContainer}>
      <TouchableOpacity onPress={openLinkedin}>
        <Image style={styles.rsImage} source={require('../assets/linkedin.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={openInstagram}>
        <Image style={styles.rsImage} source={require('../assets/instagram.png')} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  rsContainer: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
  },
  rsImage: {
    width: 50,
    height: 50,
    margin: 20,
  },
})
