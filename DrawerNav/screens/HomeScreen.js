import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import CustomCard from '../components/CustomCard';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Welcome to Drawer App</Text>
      <View style={styles.cardContainer}>
        <CustomCard
          title="Input Form"
          iconName="input"
          onPress={() => navigation.navigate('Input Form')}
        />
        <CustomCard
          title="Gallery"
          iconName="photo"
          onPress={() => navigation.navigate('Gallery')}
        />
        <CustomCard
          title="About"
          iconName="info"
          onPress={() => navigation.navigate('About')}
        />
        <CustomCard
          title="Links"
          iconName="link"
          onPress={() => navigation.navigate('Links')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#1f2937' },
  cardContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
});
