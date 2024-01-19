import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useFonts } from 'expo-font';
import Avatar from './components/Avatar';
import About from './components/About';
import Socials from './components/Socials';
import CallButton from './components/CallButton';
import Maps from './pages/Maps';


export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  })

  if (!fontsLoaded && !fontError) {
    return null
  }
  else {
    return (
      <PagerView style={styles.container}>
        <View style={styles.page}>
          <Avatar />
          <About />
          <Socials />
          <CallButton />
        </View>
        <View>
          <Maps />
        </View>
      </PagerView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2f30',
  },
  page: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
