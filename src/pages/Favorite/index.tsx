import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Products = [
  {
    id: '1',
    name: 'Nike Fuel Pack',
    price: '$32.00',
    image: require('../../assets/Nike.svg'),
    favorite: true,
  },
  {
    id: '2',
    name: 'Nike Show X Rush',
    price: '$204',
    image: require('../../assets/Shades.svg'),
    favorite: true,
  },
  {
    id: '3',
    name: "Men's T-Shirt",
    price: '$45.00',
    image: require('../../assets/Tshirt.svg'),
    favorite: true,
  },
  {
    id: '4',
    name: "Men's Skate T-Shirt",
    price: '$45.00',
    image: require('../../assets/Shirty.svg'),
    favorite: true,
  },
];

const Favorite = () => {
  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <TouchableOpacity style={styles.heartIcon}>
        <Icon name="heart" size={20} color="red" />
      </TouchableOpacity>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Favourites (12)</Text>
      <FlatList
        data={Products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />

      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home-outline" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="notifications-outline" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="heart-outline" size={24} color="#FFB6C1" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person-outline" size={24} color="#999" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 16,
    paddingTop: 100,
    textAlign: 'center',
    color: 'black',
  },
  list: {
    paddingHorizontal: 10,
  },
  card: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    margin: 10,
    borderRadius: 10,
    padding: 20,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 25,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  name: {
    marginTop: 10,
    fontWeight: '500',
  },
  price: {
    fontWeight: 'bold',
    marginTop: 4,
    color: 'black',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
  },
});
