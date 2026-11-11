import {createDrawerNavigator} from "@react-navigation/drawer"
import HomeScreen from "./screens/home";
import ProfileScreen from "./screens/profile";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default MyDrawer