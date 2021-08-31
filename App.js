import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import LocationList from './screens/LocationList';
import AR_View from './screens/AR_View';

const Stack = createStackNavigator();

function StackFunction() {
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} 
          options={{ title: 'Home', headerShown:false, }} /> 
        <Stack.Screen name="LocationList" component={LocationList} 
          options={{ title: 'LocationList', headerShown:false, }} /> 
        
        <Stack.Screen name="AR_View" component={AR_View} 
          options={{ title: 'AR View', headerShown:true, }} /> 
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <StackFunction />
  </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
