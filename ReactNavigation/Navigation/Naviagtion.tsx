import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import Details from "./screens/details";
import HomePage from "./screens/home";
import ProfileScreen from "./screens/profile";
import { Pressable, Text } from "react-native";
import NativeModal from "./screens/Modal";

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomePage}
        options={{
          title: "Home",
          headerStyle: { backgroundColor: "#0cf41f" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerRight: () => (
            <Pressable onPress={() => alert("This is a button!")}>
              <Text>Profile</Text>
            </Pressable>
          ),
        }}
      />

      <Stack.Screen
        name="details"
        component={Details}
        options={{
          title: "Details",
          headerStyle: { backgroundColor: "#f40c0c" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />

      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />

      <Stack.Screen
        name="modal"
        component={NativeModal}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
