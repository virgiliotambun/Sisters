import React from 'react';
import SplashScreen from './src/pages/SplashScreen';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import ForgotPassword from './src/pages/ForgotPassword';
import OrderPlaced from './src/pages/OrderPlaced';


const Stack = createNativeStackNavigator();


const App = () => {
  return <SplashScreen />;
};

export default App;
