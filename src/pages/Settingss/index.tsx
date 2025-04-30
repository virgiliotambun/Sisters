import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Settingss = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View>
        <View style={styles.profileWrapper}>
          <Image
            source={{uri: 'https://i.pravatar.cc/100'}}
            style={styles.avatar}
          />

          {/* User Info */}
          <TouchableOpacity
            style={styles.userInfoButton}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('EditProfile')}>
            <View style={styles.userInfo}>
              <Text style={styles.name}>Gilbert Jones</Text>
              <Text style={styles.email}>Gilbertjones001@gmail.com</Text>
              <Text style={styles.phone}>121-224-7890</Text>
            </View>
            <Text style={styles.edit}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuButtonText}>Address</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuButtonText}>Help</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuButtonText}>Support</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomWrapper}>
        <TouchableOpacity style={styles.signOutButton}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Settingss;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  profileWrapper: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userInfoButton: {
    flexDirection: 'row',
    backgroundColor: '#F5F9FF',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#4DA6FF',
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  email: {
    color: '#999',
    fontSize: 14,
    marginTop: 4,
  },
  phone: {
    color: '#999',
    fontSize: 14,
    marginTop: 4,
  },
  redDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'red',
    marginTop: 6,
  },
  edit: {
    color: '#FFCCE1',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 12,
  },
  buttonGroup: {
    paddingHorizontal: 24,
  },
  menuButton: {
    backgroundColor: '#F5F9FF',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuButtonText: {
    fontSize: 16,
    color: '#000',
  },
  arrow: {
    fontSize: 18,
    color: '#888',
  },
  bottomWrapper: {
    alignItems: 'center',
    marginTop: 24,
  },
  signOutButton: {
    paddingVertical: 12,
  },
  signOutText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
