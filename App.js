import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Passport from './app/screens/passport-scaning/passport'
import PassportImage from './app/screens/passport-scaning/passport1';
import PassportContent from './app/screens/passport-scaning/passportContent';
import FirstStep from './app/screens/face-recognition/firstStep';
import FaceDirectionRight from './app/screens/face-recognition/faceDirectionRight';
import FaceAndPassport from './app/screens/face-recognition/faceAndPassport';
import FaceDirectionLeft from './app/screens/face-recognition/faceDirectionLeft';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Passport" component={Passport} />
        <Stack.Screen name="PassportImage" component={PassportImage} />
        <Stack.Screen name="PassportContent" component={PassportContent} />
        <Stack.Screen name="FirstStep" component={FirstStep} />
        <Stack.Screen
          name="FaceDirectionRight"
          component={FaceDirectionRight}
        />
        <Stack.Screen
          name="FaceDirectionLeft"
          component={FaceDirectionLeft}
        />
        <Stack.Screen name="FaceAndPassport" component={FaceAndPassport} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

