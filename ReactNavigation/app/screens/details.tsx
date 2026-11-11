// import {
//   Link,
//   NavigationProp,
//   ParamListBase,
//   useNavigation,
// } from "@react-navigation/native";
// import { Pressable, StyleSheet, Text, View } from "react-native";


// type DetailsProps = {
//   route: {
//     params: {
//       itemId: string;
//       productName: string;
//     };
//   };
// };

// const Details = ({ route }: DetailsProps) => {
//   const navigation = useNavigation<NavigationProp<ParamListBase>>();
//   const { itemId, productName } = route.params;

//   return (
//     <View>
//       <Text>Details</Text>

//       <Pressable onPress={() => navigation.navigate("profile")}>
//         <Text>Profile</Text>
//       </Pressable>

//       <Text>{itemId}</Text>
//       <Text>{productName}</Text>
//     </View>
//   );
// };

// export default Details;

import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default function Details(){

    return (
      <View  style ={ { flex:1 , justifyContent : 'center' , backgroundColor:"red"}}>
        <Text> textInComponent </Text>
      </View>
    )
 
}

