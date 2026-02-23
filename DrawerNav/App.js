import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import InputFormScreen from './screens/InputFormScreen';
import GalleryScreen from './screens/GalleryScreen';
import AboutScreen from './screens/AboutScreen';
import LinksScreen from './screens/LinksScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#1f2937' },
          headerTintColor: '#fff',
          drawerActiveTintColor: '#1f2937',
          drawerLabelStyle: { fontSize: 16 },
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Input Form" component={InputFormScreen} />
        <Drawer.Screen name="Gallery" component={GalleryScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Links" component={LinksScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
