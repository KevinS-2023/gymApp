import { Image } from 'expo-image';
import { Button, StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('../../assets/images/calendar_month.svg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.container}>
        <View style={styles.row}>
          <Button title='Button1' ></Button>
        </View>
        
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  reactLogo: {
    marginTop: 45,
    height: '80%',
    width: '80%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginBottom: 10,          
  }
});
