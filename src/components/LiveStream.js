import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LiveStream = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Live Stream</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default LiveStream;
