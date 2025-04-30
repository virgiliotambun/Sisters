import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';

const SignUp = () => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Sign Up" />
      <View style={styles.contentContainer}>
        <View style={styles.profilContainer}>
          <View style={styles.profil}>
            <View style={styles.add}>
              <Text style={styles.addLabel}>Add Photo</Text>
            </View>
          </View>
        </View>
        <Gap height={16} />
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email Address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
  profilContainer: {
    marginTop: 26,
    alignItems: 'center',
  },
  profil: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 130,
    width: 130,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
  },
  add: {
    backgroundColor: '#F0F0F0',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addLabel: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    width: 40,
    textAlign: 'center',
  },
});
