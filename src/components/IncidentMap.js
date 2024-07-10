import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Icon } from 'react-native-elements';

const IncidentMap = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // Use Google Maps
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Add Markers here */}
      </MapView>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
        />
        <Icon name="bell" type="font-awesome" style={styles.icon} />
        <Icon name="user" type="font-awesome" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    marginLeft: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    left: 10,
    padding: 10,
    position: 'absolute',
    right: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    top: 50,
  },
  searchInput: {
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
});

export default IncidentMap;
