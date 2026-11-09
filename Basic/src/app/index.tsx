
import { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const vegetables = [
  {
    id: 1,
    name: "Tomato",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.3PKhUq22POt9WHd_YQ_oxgHaFp?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 2,
    name: "Carrot",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.kYzYZSJ7XqspqP9LDiU7cAHaHa?r=0&w=1920&h=1920&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 3,
    name: "Cabbage",
    image:
      "https://www.liveeatlearn.com/wp-content/uploads/2023/08/RED-CABBAGE-768x768.jpg",
  },
];

const DATA = [
  {
    title: "Fresh Fruits",
    data: [
      { id: "1", name: "Apple", price: 120, emoji: "🍎" },
      { id: "2", name: "Banana", price: 40, emoji: "🍌" },
      { id: "3", name: "Mango", price: 100, emoji: "🥭" },
    ],
  },
  {
    title: "Vegetables",
    data: [
      { id: "4", name: "Potato", price: 30, emoji: "🥔" },
      { id: "5", name: "Tomato", price: 40, emoji: "🍅" },
      { id: "6", name: "Onion", price: 50, emoji: "🧅" },
    ],
  },
  {
    title: "Dairy Products",
    data: [
      { id: "7", name: "Milk", price: 60, emoji: "🥛" },
      { id: "8", name: "Cheese", price: 150, emoji: "🧀" },
      { id: "9", name: "Butter", price: 120, emoji: "🧈" },
    ],
  },
];

export default function Index() {
  const [openBasic, setBasicOpen] = useState(false);
  const [name, setName] = useState("");

  // Everything above the SectionList items
  const Header = () => (
    <View className="px-5 pt-5">

      {/* App Header */}
      <View className="flex-row justify-between items-center mb-6">
        <View>
          <Text className="text-gray-400 text-sm">Welcome to</Text>
          <Text className="text-white text-3xl font-extrabold">
            FreshMart 🛒
          </Text>
        </View>
        <View className="bg-emerald-500 p-3 rounded-full">
          <Text className="text-xl">🛍️</Text>
        </View>
      </View>

      {/* Search */}
      <TextInput
        placeholder="Search fruits, vegetables..."
        placeholderTextColor="#9CA3AF"
        className="bg-gray-800 text-white p-4 rounded-2xl mb-6"
      />

      {/* Accordion */}
      <Pressable
        onPress={() => setBasicOpen(!openBasic)}
        className="bg-emerald-900 p-4 rounded-2xl flex-row justify-between items-center"
      >
        <View>
          <Text className="text-emerald-300 text-xs font-bold">
            LEARN REACT NATIVE
          </Text>
          <Text className="text-white text-xl font-bold mt-1">
            Understand Components
          </Text>
        </View>
        <Text className="text-white text-2xl">
          {openBasic ? "−" : "+"}
        </Text>
      </Pressable>

      {openBasic && (
        <View className="bg-gray-800 p-4 rounded-2xl mt-2">
          <Image
            source={{
              uri: "https://t3.ftcdn.net/jpg/02/28/33/96/360_F_228339660_znkY8wXvjXNnqylBwUwwffT1E5yerjBg.jpg",
            }}
            className="w-full h-48 rounded-xl"
            resizeMode="cover"
          />

          <Text className="text-white text-lg font-bold mt-4">
            Explore React Native
          </Text>

          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor="#9CA3AF"
            className="bg-gray-700 text-white p-3 rounded-xl mt-3"
          />

          <Pressable
            onPress={() => alert(`Hello ${name || "User"}!`)}
            className="bg-emerald-500 p-3 rounded-xl mt-3"
          >
            <Text className="text-white text-center font-bold">
              Get Started
            </Text>
          </Pressable>
        </View>
      )}

      {/* Vegetables */}
      <View className="mt-8 mb-4">
        <Text className="text-white text-2xl font-bold">
          Fresh Vegetables 🥬
        </Text>
        <Text className="text-gray-400 mt-1">
          Handpicked fresh products
        </Text>
      </View>

      <FlatList
        data={vegetables}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ gap: 14 }}
        renderItem={({ item }) => (
          <View className="bg-gray-800 rounded-2xl p-3 w-40">
            <Image
              source={{ uri: item.image }}
              className="w-full h-32 rounded-xl"
              resizeMode="cover"
            />
            <Text className="text-white font-bold text-lg mt-3">
              {item.name}
            </Text>
            <Text className="text-emerald-400 text-xs mt-1">
              Fresh & Healthy
            </Text>
          </View>
        )}
      />

      {/* SectionList Heading */}
      <View className="mt-9 mb-4">
        <Text className="text-white text-2xl font-bold">
          Shop By Category
        </Text>
        <Text className="text-gray-400 mt-1">
          Explore our daily essentials
        </Text>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-950">
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={Header}
        stickySectionHeadersEnabled={false}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderSectionHeader={({ section }) => (
          <View className="px-5 pt-5 pb-3">
            <Text className="text-emerald-400 text-xl font-extrabold">
              {section.title}
            </Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View className="mx-5 mb-3 bg-gray-800 rounded-2xl p-4 flex-row items-center justify-between">
            <View className="flex-row items-center gap-4">
              <View className="bg-gray-700 w-14 h-14 rounded-xl items-center justify-center">
                <Text className="text-3xl">{item.emoji}</Text>
              </View>

              <View>
                <Text className="text-white text-lg font-bold">
                  {item.name}
                </Text>
                <Text className="text-gray-400 text-sm">
                  Fresh product
                </Text>
              </View>
            </View>

            <View className="items-end">
              <Text className="text-emerald-400 font-extrabold text-lg">
                ₹{item.price}
              </Text>
              <Text className="text-gray-400 text-xs">Per kg / unit</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
