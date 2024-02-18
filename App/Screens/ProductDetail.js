import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
  StyleSheet
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Color from "../Shared/Color";
const ProductDetail = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ padding: 20 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Ionicons
          name="arrow-undo-outline"
          size={30}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Detail</Text>
        <EvilIcons name="heart" size={35} color="black" />
      </View>
      <View>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4nZX0AZ7zyY01e9ZW5UpIb-gTP3ykVCeDnA&usqp=CAU",
          }}
          style={{
            width: "100%",
            height: 300,
            borderRadius: 20,
            marginTop: 30,
          }}
        />
        <View
          style={{
            borderBottomWidth: 0.5,
            borderBottomColor: "gray",
            paddingBottom: 20,
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "600", paddingTop: 10 }}>
            Cappuchino
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "400", paddingTop: 10 }}>
            With Chocolate
          </Text>
          <Text style={{ fontSize: 17, paddingTop: 20 }}>
            <AntDesign name="star" size={24} color="yellow" /> 4.8 (230)
          </Text>
        </View>
        <View>
          <Text style={{ paddingTop: 10, fontSize: 25, fontWeight: "500" }}>
            Description
          </Text>
          <Text
            style={{ justifyContent: "center", fontSize: 17, marginTop: 13 }}
          >
            Cappuccino is a drink recipe originating from Italy that includes
            coffee and cotton milk. In Italy, the country where this graphic is
            most popular, it is traditionally enjoyed in the morning, at
            breakfast or afterwards, never during meals
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{marginTop:20}}>
              <Text style={{marginTop:10,fontSize:20, color:Color.grayColor}}>Price</Text>
              <Text
                style={{
                  fontSize: 25,
                  color: Color.colorButton,
                  fontWeight: "600",
                  
                }}
              >
                $ 4.53
              </Text>
            </View>
          
            <Text style={styles.textButton}>
               Buy Now
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
   textButton:{
        width:'60%',
        backgroundColor:Color.colorButton,
        color:Color.whiteColor,
        alignItems:'center',
        textAlign:'center',
        marginTop:20,
        lineHeight: 76,
        fontSize:20,
        borderRadius:10,
   }
})
export default ProductDetail;
