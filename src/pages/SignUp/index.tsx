import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../../components/molecules/Header'; // Assuming this is your custom header
import TextInput from '../../components/molecules/TextInput'; // Assuming this is your custom input
import Button from '../../components/atoms/Button';   // Assuming this is your custom button
import Gap from '../../components/atoms/Gap';     // Assuming this is your custom gap

const SignUp = () => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Create Account" />
      <View style={styles.contentContainer}>

        <View style={styles.customerContainer}>
            <TouchableOpacity style={styles.customerButton}>
                <Text style={styles.customerText}>Customer</Text>
            </TouchableOpacity>
        </View>
        <Gap height={24} />

        <TextInput
          label="Firstname"
          placeholder="Firstname"
          style={styles.inputStyle}
        />
        <Gap height={16} />
        <TextInput
          label="Lastname"
          placeholder="Lastname"
          style={styles.inputStyle}
        />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Email Address"
          style={styles.inputStyle}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Password"
          secureTextEntry={true}
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
    backgroundColor: '#FFFFFF', // White background for the whole page
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20, // Add some top padding to the content
  },
  inputStyle: {
    backgroundColor: '#F2F9FF', // Light blue background for inputs
    borderRadius: 8,         // Rounded corners for inputs
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 0,       // Remove the border
  },
    customerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start', // Align items to the start (left)
        marginTop: 10,
    },
    customerButton: {
        backgroundColor: '#FFCCE1', // Light pink for the Customer button
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 8,
        shadowColor: '#000', // Add shadow for the button
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    customerText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default SignUp;
