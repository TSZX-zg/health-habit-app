import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from './src/screens/DashboardScreen';
import HabitListScreen from './src/screens/HabitListScreen';
import HabitDetailScreen from './src/screens/HabitDetailScreen';
import StatisticsScreen from './src/screens/StatisticsScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ title: '健康习惯追踪' }}
        />
        <Stack.Screen
          name="HabitList"
          component={HabitListScreen}
          options={{ title: '习惯列表' }}
        />
        <Stack.Screen
          name="HabitDetail"
          component={HabitDetailScreen}
          options={{ title: '习惯详情' }}
        />
        <Stack.Screen
          name="Statistics"
          component={StatisticsScreen}
          options={{ title: '统计分析' }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: '设置' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
