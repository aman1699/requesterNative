import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Signup from "./components/signup";
import Login from "./components/login";
import "react-native-gesture-handler";
import userList from "./components/userList";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import Message from './components/message';
import Status from './components/status';

function Ta() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Message") {
            iconName = "message1";
          } else if (route.name === "Status") {
            iconName = "staro";
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={35} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#009387",
        inactiveTintColor: "black",

        // style: {
        // backgroundColor: "#009387",

        // },
        // labelStyle: {
        // fontSize:10,
        //  margin: 0,
        //   padding: 0,

        // },
      }}
    >
      <Tab.Screen name="Home" component={userList} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Status" component={Status} />
    </Tab.Navigator>
  );
}
function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Ta}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default App;
