import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const SearchResult = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Text style={styles.searchText}>Blouse and Jean</Text>
      </View>
      <View style={styles.centerContent}>
        <Image
          source={require('../../assets/magnifier.png')}
          style={styles.icon}
        />
        <Text style={styles.message}>
          Sorry, we couldn't find any{'\n'}matching result for your{'\n'}Search.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Explore Categories</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBox: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 60,
    marginHorizontal: 24,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
  },
  searchText: {
    fontSize: 14,
    color: '#000',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  message: {
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#FDCEDF',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
