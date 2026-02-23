import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function ImageCard({ source, title }) {
  return (
    <View style={styles.card}>
      <Image source={source} style={styles.image} />
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    margin: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    width: 180,
  },
  image: { width: '100%', height: 120 },
  title: { padding: 10, fontSize: 16, fontWeight: 'bold', color: '#1f2937' },
});
