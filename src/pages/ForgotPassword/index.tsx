import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/molecules/Header'; 
import TextInput from '../../components/molecules/TextInput'; 
import Button from '../../components/atoms/Button';   
import Gap from '../../components/atoms/Gap';     

const ForgotPassword = () => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Forgot Password" />
      <View style={styles.contentContainer}>
        <Gap height={24} />
        <TextInput
          label="Email Address"
          placeholder="Enter Email Address"
          style={styles.inputStyle}
        />
        <Gap height={24} />
        <Button label="Continue" color="#FFCCE1" textColor="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop:40,
  },
  inputStyle: {
    backgroundColor: '#F2F9FF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 0,
  },
});

export default ForgotPassword;
