import React from "react";
import { View, Text, ScrollView } from "react-native";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import ListCate from "../Components/ListCate";
import Color from "../Shared/Color";
import Product from "../Components/Product";
import ProductDetail from "./ProductDetail";
const Home = () => {
  return (
    <View>
      <ScrollView style={{ position: "relative" }}>
        <Header />
        <ListCate />
        <Product />
      </ScrollView>
    </View>
  );
};

export default Home;
