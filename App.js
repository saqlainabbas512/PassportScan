import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Passport from './app/screens/passport-scaning/passport'
import PassportImage from './app/screens/passport-scaning/passport1';
import PassportContent from './app/screens/passport-scaning/passportContent';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Passport" component={Passport} />
        <Stack.Screen name="PassportImage" component={PassportImage} />
        <Stack.Screen name="PassportContent" component={PassportContent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
