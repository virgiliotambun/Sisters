import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import BellIcon from '../../assets/bell.png'; // Pastikan file ini ada

const Notifications = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <View style={styles.contentWrapper}>
        <Image source={BellIcon} style={styles.icon} />
        <Text style={styles.message}>No Notification yet</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Explore Categories</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  header: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 71,
    color: '#272727', // sesuai warna Black/100 dari gambar
    fontFamily: 'Gabarito-Bold', // jika menggunakan custom font
  },
  contentWrapper: {
    position: 'absolute',
    top: 294,
    left: 24,
    width: 342,
    height: 230,
    gap: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  message: {
    fontSize: 16,
    fontWeight: '500',
    color: '#272727',
  },
  button: {
    backgroundColor: '#FCDDEC',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
