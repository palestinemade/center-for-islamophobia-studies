import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import IncidentMap from './src/components/IncidentMap';
import NewsFeed from './src/components/NewsFeed';
import IncidentForm from './src/components/IncidentForm';
import LiveStream from './src/components/LiveStream';
import Statistics from './src/components/Statistics';
import './src/firebase'; // Ensure Firebase is set up correctly for React Native
import getIconType from './src/utils/getIconType';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Incident Map" component={IncidentMap} />
    <Stack.Screen name="News Feed" component={NewsFeed} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            let iconType = 'material'; // Default icon type
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Report') {
              iconName = 'add-circle';
            } else if (route.name === 'Go Live') {
              iconName = 'live-tv';
            } else if (route.name === 'Stats') {
              iconName = 'bar-chart';
            }
            return <Icon name={iconName} type={iconType} color={color} size={size} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Report" component={IncidentForm} />
        <Tab.Screen name="Go Live" component={LiveStream} />
        <Tab.Screen name="Stats" component={Statistics} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
