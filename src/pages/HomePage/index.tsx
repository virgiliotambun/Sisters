import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const categories = [
  {name: 'Hoodies', image: require('../../assets/Hoodie.svg')},
  {name: 'Shorts', image: require('../../assets/Shorts.svg')},
  {name: 'Shoes', image: require('../../assets/Shoes.svg')},
  {name: 'Bag', image: require('../../assets/Bags.svg')},
  {name: 'Accessories', image: require('../../assets/Accessories.svg')},
];

const products = [
  {
    id: '1',
    name: "Men's Harrington Jacket",
    price: '$148.00',
    image: require('../../assets/Harringtons.svg'),
    favorite: false,
  },
  {
    id: '2',
    name: "Max Cirro Men's Slides",
    price: '$55.00',
    oldPrice: '$100.97',
    image: require('../../assets/Slides.svg'),
    favorite: true,
  },
  {
    id: '3',
    name: "Men's Oracle Shirt",
    price: '$66.97',
    image: require('../../assets/Shirt.svg'),
    favorite: false,
  },
];

const HomePage = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{paddingBottom: 100}}>
        {/* Profile */}
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/ProfileBroski.svg')}
            style={styles.profile}
          />
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Icon name="search-outline" size={18} color="#bbb" />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#aaa"
            style={styles.searchInput}
          />
        </View>

        {/* Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((item, index) => (
            <View key={index} style={styles.categoryItem}>
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Top Selling */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Selling</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {products.map(item => (
            <View key={item.id} style={styles.productCard}>
              <Image source={item.image} style={styles.productImage} />
              <TouchableOpacity style={styles.favoriteIcon}>
                <Icon
                  name={item.favorite ? 'heart' : 'heart-outline'}
                  size={16}
                  color={item.favorite ? 'red' : '#999'}
                />
              </TouchableOpacity>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              {item.oldPrice && (
                <Text style={styles.oldPrice}>{item.oldPrice}</Text>
              )}
            </View>
          ))}
        </ScrollView>
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home-outline" size={24} color="#FFB6C1" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="notifications-outline" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="heart-outline" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person-outline" size={24} color="#999" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#F2F9FF',
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: '#000',
    fontSize: 14,
    padding: 0,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  seeAll: {
    color: '#999',
    fontSize: 14,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#F2F9FF',
    marginBottom: 6,
  },
  categoryText: {
    fontSize: 12,
    textAlign: 'center',
  },
  productCard: {
    width: 180,
    marginRight: 20,
    backgroundColor: '#F2F9FF',
    borderRadius: 16,
    padding: 14,
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 140,
    resizeMode: 'contain',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  productName: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 8,
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  oldPrice: {
    fontSize: 13,
    color: '#aaa',
    textDecorationLine: 'line-through',
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    zIndex: 100,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
