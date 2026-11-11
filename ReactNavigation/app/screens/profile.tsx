import { useNavigation, type NavigationProp } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

const ProfileScreen = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Text>Profile Screen</Text>

      <Pressable onPress={() => navigation.navigate("home")}>
        <Text>Back To Home</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
