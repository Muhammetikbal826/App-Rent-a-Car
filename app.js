import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen from './src/screens/CoursesScreen';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRoutename="Home">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CoursesScreen" component=
      {CoursesScreen} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({});


