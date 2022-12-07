import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyTabs from './Navigation/TabNavigator'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return(
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
    )
}   