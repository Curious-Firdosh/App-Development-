import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/home";
import Details from "./screens/details";
import ProfileScreen from "./screens/profile";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",

          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "home") {
              iconName = "home";
            } else if (route.name === "details") {
              iconName = "information-circle";
            } else if (route.name === "profile") {
              iconName = "person";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="home"
          component={HomeScreen}
           options={{
            title : "home",
           }}
        />
        <Tab.Screen name="details" component={Details} />
        <Tab.Screen name="profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return <TabNavigator />;
}
