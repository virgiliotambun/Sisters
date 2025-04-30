import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Address = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>{'←'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Address</Text>
      </View>

      {/* ALAMAT */}
      <View style={styles.addressCard}>
        <Text style={styles.addressText}>2715 Ash Dr. San Jose, South...</Text>
        <TouchableOpacity>
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.addressCard, styles.selected]}>
        <Text style={styles.addressText}>2715 Ash Dr. San Jose, South...</Text>
        <TouchableOpacity>
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 74, // Sesuai dengan posisi top dari Text
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: '50%',
    transform: [{translateY: -16}],
    backgroundColor: '#F29FF',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 18,
    color: '#000',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#272727',
    fontFamily: 'Gabarito',
  },

  addressCard: {
    backgroundColor: '#F2F9FF',
    width: 342,
    height: 72,
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  selected: {
    borderWidth: 2,
    borderColor: '#F2F9FF',
  },
  addressText: {
    fontSize: 16,
    color: '#272727',
    fontWeight: '700',
    fontFamily: 'Gabarito',
    flex: 1,
  },
  edit: {
    color: '#FFCCE1',
    fontWeight: 'bold',
    marginLeft: 12,
    fontFamily: 'Gabarito',
  },
});
