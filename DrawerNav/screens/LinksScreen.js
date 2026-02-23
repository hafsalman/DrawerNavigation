import React from 'react';
import { View, Linking, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <CustomButton
        title="Open Google"
        onPress={() => Linking.openURL('https://www.google.com')}
      />
      <CustomButton
        title="Visit GitHub"
        onPress={() => Linking.openURL('https://github.com')}
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 20 } });
