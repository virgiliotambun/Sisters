import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.ibb.co/Z8n2Wvz/sisters.png' }} //  USE a regular image.
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC1DA', // Pink background
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
