import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';

const HomePage = () => {
  return (
    <ScrollView>
      <View>
        <Text>HomePage</Text>
      </View>
    </ScrollView>
  );
};

const MyTabs = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
});

export default HomePage;

const styles = StyleSheet.create({});
