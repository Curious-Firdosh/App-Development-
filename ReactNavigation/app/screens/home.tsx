import {
  NavigationProp,
  ParamListBase,
  useNavigation
} from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

// HomeScreen.jsx
const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <View>
      <Text className=" ">Home</Text>
      <Pressable
        onPress={() =>
          navigation.navigate("details", {
            itemId: 45,
            productName: "Jacket For Winter",
          })
        }
      >
        <Text className="font-bold text-">Details</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
