//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Instagram from './components/instagram-feed/InstagramFeed';
// import MusicPlayer from './components/music-player/MusicPlayer';
// import ButtonComponent from './components/hoc/ButtonComponent';
// import TouchComponent from './components/hoc/TouchComponent';
// import TrafficSignal from './components/TrafficSignal';


export default function App() {
  return (
    <View>
      {/* <Text style={{fontSize:15, }}>Welcome To The Next Gen! </Text> */}
      {/* <ButtonComponent />
      <TouchComponent /> */}
      {/* <TrafficSignal /> */}
      {/* <MusicPlayer /> */}

      <Instagram />
    </View>
  );
}

