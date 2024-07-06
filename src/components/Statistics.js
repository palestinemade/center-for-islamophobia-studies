import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Statistics = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Statistics</Text>
      <Text style={styles.statText}>Number of incidents reported: 123</Text>
      <Text style={styles.statText}>Number of resolved incidents: 100</Text>
      {/* Add more statistics as needed */}
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
  statText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Statistics;
