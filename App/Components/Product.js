import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Color from "../Shared/Color"
import { useNavigation } from "@react-navigation/native";
const Product = () => {
  const navigation = useNavigation();
  const cofeeProduct = [
    {
      id: 1,
      name: "Cappuchino",
      image:
        "https://cdn.tgdd.vn/2021/11/CookDish/ca-phe-capuchino-la-gi-cach-uong-cafe-capuchino-va-cac-loai-avt-1200x676.jpg",
      with: "With Milk",
      price: "4.53",
    },
    {
      id: 2,
      name: "Cappuchino",
      image:
        "https://media.saigontourist.edu.vn/Media/1_STHCHOME/FolderFunc/202303/Images/capuchino-la-gi-20230320105423-e.jpg",
      with: "With Chocolate",
      price: "4.53",
    },
    {
      id: 3,
      name: "Cappuchino",
      image:
        "https://chefjob.vn/wp-content/uploads/2020/07/cappuccino-cafe-cua-y.jpg",
      with: "With Chocolate",
      price: "3.90",
    },
    {
      id: 4,
      name: "Cappuchino",
      image: "https://win-rd.com/wp-content/uploads/2021/06/Cappuccino.jpg",
      with: "With Chocolate",
      price: "4.53",
    },
  ];
  return (
    <View>
      <FlatList
        data={cofeeProduct}
       
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity style={{ zIndex: 0, padding: 20 }  }  onPress={() => {
            navigation.navigate('product-detail')}} >
              <Image
                source={{ uri: item.image, zIndex: 0 }}
                style={{ width: Dimensions.get('screen').width*0.4, height: 150, borderRadius: 20 }}
              />
              <Text style={{fontSize:20}}>{item.name}</Text>
              <Text style={{color:Color.grayColor}}>{item.with}</Text>
              <View style={{display:'flex',flexDirection:'row' ,justifyContent:'space-between' }}>
                <Text style={{fontSize:20,padding:5}}>${item.price}</Text>
                <AntDesign name="plussquare" size={30} color="black" style={{color:Color.colorButton}} />
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Product;
