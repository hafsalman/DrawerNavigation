import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/icon.png')} // add a nice image in assets/images
        style={styles.image}
      />
      <Text style={styles.heading}>About This App</Text>
      <Text style={styles.paragraph}>
        This React Native app demonstrates the use of Drawer Navigation with multiple screens including forms,
        galleries, links, and information pages. The UI is clean, modern, and uses reusable components
        for better scalability and maintainability.
      </Text>
      <Text style={styles.paragraph}>
        Each screen is accessible via the drawer menu or from the home dashboard. This app is perfect for
        demonstrating React Native best practices and modern mobile app design.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  image: { width: 300, height: 200, borderRadius: 16, marginBottom: 20 },
  heading: { fontSize: 24, fontWeight: 'bold', color: '#1f2937', marginBottom: 12, textAlign: 'center' },
  paragraph: { fontSize: 16, color: '#374151', marginBottom: 12, textAlign: 'center' },
});
