import React from "react";
import { View, Text, Image, TextInput, StyleSheet ,ScrollView} from "react-native";
import Color from "../Shared/Color";
import { Feather } from "@expo/vector-icons";
import Menu from "./Menu";
const Header = () => {
  return (
    <View
      style={{ padding: 30, backgroundColor: Color.blackColor, height: 300 }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <View>
          <Text style={{ color: Color.whiteColor, fontSize: 15 }}>
            Location
          </Text>
          <Text
            style={{ color: Color.whiteColor, fontWeight: "500", fontSize: 18 }}
          >
            Ho Chi Minh , Viet Nam
          </Text>
        </View>

        <View>
          <Image
           
            source={require("../../assets/user.jpg")}
            style={{ width: 50, height: 50, borderRadius: 50  }}
          />
        </View>
        
      </View>

      <View style={{ position: "relative" }}>
        
        <Feather
          name="search"
          size={24}
          color="white"
          style={{ position: "absolute", zIndex: 2, top: 20, left: 10 }}
        />
        <TextInput style={styles.input} placeholder="Search" />
        <Menu/>
        <Image
          style={{
            width: "100%",
            height: 150,
            marginTop: 30,
            borderRadius: 20,
          }}
          source={require("../../assets/banner2.jpg")}
        />
       
      </View>
     
        
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: "40px",
    marginTop: 10,
    padding: 10,
    paddingLeft: 40,
    color: Color.whiteColor,
    fontSize: 20,
    backgroundColor: Color.grayColor,
    zIndex: 1,
    borderRadius: 10,
  },
});

export default Header;
