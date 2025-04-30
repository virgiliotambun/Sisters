import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import TextInput from '../../components/molecules/TextInput';

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
    Home: HomePage,
    Profile: ProfileScreen,
  },
});

export default HomePage;

const styles = StyleSheet.create({});
