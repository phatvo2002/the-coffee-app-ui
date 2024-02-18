import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Color from "../Shared/Color";
const Menu = () => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: Color.primaryColor,
        height: 70,
        zIndex: 999,
        marginTop:20,
        borderRadius:20
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        
          padding: 20,
        }}
      >
        <TouchableOpacity>
          <Entypo name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="hearto" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="bag" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="bell" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;
