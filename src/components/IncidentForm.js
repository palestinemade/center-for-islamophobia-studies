import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const IncidentForm = () => {
  const [description, setDescription] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');

  const handleSubmit = async () => {
    const token = ''; // Replace this with the actual way you get your token
    const response = await fetch('/api/incidents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ description, longitude, latitude }),
    });
    const data = await response.json();
    console.log(data);
    Alert.alert("Incident Reported", "Your incident has been reported successfully!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Report Incident</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Description"
        multiline
        numberOfLines={4}
        onChangeText={(text) => setDescription(text)}
        value={description}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Longitude"
        keyboardType="numeric"
        onChangeText={(text) => setLongitude(text)}
        value={longitude}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Latitude"
        keyboardType="numeric"
        onChangeText={(text) => setLatitude(text)}
        value={latitude}
      />
      <Button title="Report" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default IncidentForm;
