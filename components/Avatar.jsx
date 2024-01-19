import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export default function Avatar() {
  const [image, setImage] = useState('')

  const pickImage = async () => {
    // demande de permission pour accéder à l'appareil photo
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync()

    // permission non accordée
    if (permissionResult.granted === false) {
      alert("Permission non accordée !")
      return
    }

    // ouvre l'appareil photo et stocke le résultat dans un objet
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // photos
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
    result.cancelled === false && setImage(result.uri)
  }

  return (
    <TouchableOpacity onPress={pickImage}>
      {
        image === ''
          ? <Image style={styles.uploadImage} source={require('../assets/upload.png')} />
          : <Image style={[styles.uploadImage, styles.avatar]} source={{ uri: image }} />
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  uploadImage: {
    marginBottom: 40,
    alignSelf: 'center',
    width: 110,
    height: 110,
  },
  avatar: {
    borderRadius: 10,
  }
})
