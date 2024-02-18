import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity ,StyleSheet } from "react-native";
import Color from "../Shared/Color";
const ListCate = () => {

    
 const [active,setActive] = useState(1)
  const cateItems = [
    {
      id: 1,
      name: "Cappichino",
    },
    {
      id: 2,
      name: "Machato",
    },
    {
      id: 3,
      name: "Latte",
    },
    {
      id: 4,
      name: "Ameticano",
    },
  ];
  return (
    <View>
      <FlatList
        style={{ marginTop: 130  }}
        data={cateItems}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
            >
              <Text key={item.id} style={item.id == active ? styles.textActive : styles.textStyle}>
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    textStyle:{
        backgroundColor:Color.grayColor,
        color:Color.primaryColor,
        padding: 15,
        margin: 20,
        width: 180,
        alignItems: "center",
        borderRadius: 30,
        textAlign:'center',
        fontSize:18
    },
    textActive:{
        backgroundColor:Color.colorButton,
        Color:Color.primaryColor,
        padding: 15,
        margin: 20,
        width: 180,
        alignItems: "center",
        borderRadius: 30,
        textAlign:'center',
        fontSize:18,
        color:Color.primaryColor
    }
})

export default ListCate;
