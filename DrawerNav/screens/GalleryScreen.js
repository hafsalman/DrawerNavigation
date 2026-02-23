import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ImageCard from '../components/ImageCard';

export default function GalleryScreen() {
  const images = [
    { 
      source: { uri: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=60' }, 
      title: 'Laptop Work' 
    },
    { 
      source: { uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60' }, 
      title: 'Nature View' 
    },
    { 
      source: { uri: 'https://images.unsplash.com/photo-1581091870622-5fd5e0bb2c7f?auto=format&fit=crop&w=800&q=60' }, 
      title: 'Coffee Time' 
    },
    { 
      source: { uri: 'https://images.unsplash.com/photo-1531177070682-34d9a73aa7b4?auto=format&fit=crop&w=800&q=60' }, 
      title: 'City Lights' 
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.gallery}>
        {images.map((img, index) => (
          <ImageCard key={index} source={img.source} title={img.title} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, alignItems: 'center' },
  gallery: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
});
