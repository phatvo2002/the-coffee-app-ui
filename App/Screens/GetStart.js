import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import Color from "../Shared/Color";
import { useNavigation } from "@react-navigation/native";
const GetStart = () => {
  const navigation = useNavigation();
  return (
    <View style={{ position: "relative" }}>
      <Image
        source={require("../../assets/banner1.jpg")}
        style={{ marginRight: "30%" }}
      />
      <Text style={styles.textStart}>
        Coffee So good , your taste buds will love it .
      </Text>
      <TouchableOpacity style={styles.buttonGetstart}  onPress={() => {
        navigation.navigate('home')
      }}>
        <Text
          style={{
            textAlign: "center",
            color: Color.primaryColor,
            fontSize: 20,
            fontWeight: "500",
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStart: {
    position: "absolute",
    top: 20,
    width: "70%",
    fontSize: 50,
    padding: 20,
    fontWeight: "bold",
    color: Color.whiteColor,
  },
  buttonGetstart: {
    position: "absolute",
    top: "85%",
    width: "90%",
    backgroundColor: Color.colorButton,
    padding: 20,
    marginLeft: 20,
    borderRadius: 20,
  },
});

export default GetStart;
