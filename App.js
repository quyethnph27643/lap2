
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Manager from './Manager';

const Stack = createNativeStackNavigator();

const Home = (props) => {
  const nav = props.navigation;
  const list = [
    {
        id: 1,
        name : 'pho',
        price: 100000,
    },
    {
        id: 1,
        name : 'bun',
        price: 1000000,
    },

  ]
  return (<View>
    <Text>HOME</Text>
      <Button
      title="sang Manager"
      onPress={() => nav.navigate('Manager',{data: list})}
      />
      <Button
      title="sang About"
      onPress={() => nav.navigate('About',
      {nameUser:"quyet",Msv:"PH27643"},
      )}
      />
      </View>
      );
      
};
const About = (props) => {
    const route = props.route;
    const nameFromHome = route.params.nameUser;
    const msv = route.params.Msv;
    return (
        <View>
            <Text>
                About
            </Text>
            <Text>
                Họ tên: {nameFromHome}
            </Text>
            <Text>
                Mã sinh viên: {msv}
            </Text>
        </View>
    );
};

const App = () => {
  return (
  <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name='Home' component={Home}
        />
          <Stack.Screen
              name="Manager" component={Manager}
          />
          <Stack.Screen
          name="About" component={About}
          />
      </Stack.Navigator>
  </NavigationContainer>
  );
};
export default App;