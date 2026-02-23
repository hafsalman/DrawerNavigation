import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function InputFormScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    Alert.alert('Form Submitted', `Name: ${name}\nEmail: ${email}`);
  };

  return (
    <View style={styles.container}>
      <CustomInput placeholder="Name" value={name} onChangeText={setName} />
      <CustomInput placeholder="Email" value={email} onChangeText={setEmail} />
      <CustomButton title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});
