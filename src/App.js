import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import IncidentMap from './components/IncidentMap';
import NewsFeed from './components/NewsFeed';
import IncidentForm from './components/IncidentForm';
import LiveStream from './components/LiveStream';
import Statistics from './components/Statistics';
import './firebase'; // Ensure Firebase is set up correctly for React Native

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
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Report') {
              iconName = 'add-circle';
            } else if (route.name === 'Go Live') {
              iconName = 'live-tv';
            } else if (route.name === 'Stats') {
              iconName = 'bar-chart';
            }
            return <Icon name={iconName} type="material" color={color} size={size} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
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
