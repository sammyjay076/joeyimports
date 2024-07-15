import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

type Props = {};

const Catalogue: React.FC = (props: Props) => {
  // create a dataset of products. name, price, image, description. 10 products
  const products = [
    {
      name: "Product 1",
      price: "1000",
      image: "https://via.placeholder.com/150",
      description: "This is a product",
    },
    {
      name: "Product 2",
      price: "2000",
      image: "https://via.placeholder.com/150",
      description: "This is a product",
    },
    {
      name: "Product 3",
      price: "3000",
      image: "https://via.placeholder.com/150",
      description: "This is a product",
    },
    {
      name: "Product 4",
      price: "4000",
      image: "https://via.placeholder.com/150",
      description: "This is a product",
    },
    {
      name: "Product 5",
      price: "5000",
      image: "https://via.placeholder.com/150",
      description: "This is a product",
    },
    {
      name: "Product 6",
      price: "6000",
      image: "https://via.placeholder.com/150",
      description: "This is a product",
    },
    {
      name: "Product 7",
      price: "7000",
      image: "https://via.placeholder.com/150",
      description: "This is a product",
    },
    {
      name: "Product 8",
      price: "8000",
      image: "https://via.placeholder.com/150",
      description: "This is a product",
    },
    {
      name: "Product 9",
      price: "9000",
      image: "https://via.placeholder.com/150",
      description: "This is a product",
    },
    {
      name: "Product 10",
      price: "10000",
      image: "https://via.placeholder.com/150",
      description: "This is a product",
    },
  ];

  const renderProduct = ({ item }) => {
    return (
      <View
        style={{
          height: 200,
          width: 200,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Image
          style={{ height: 160, width: 160 }}
          source={{
            uri: item.image,
          }}
        />
        <Text>{item.name}</Text>
        <Text>${item.price}</Text>
      </View>
    );
  };
  return (
    <View
      style={{
        paddingHorizontal: 28,
        paddingTop: 32,
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text>Joey Imports</Text>
        </View>
        <View>
          <FeatherIcon name="shopping-cart" size={30} color="black" />
        </View>
      </View>
      <View style={{ marginTop: 43 }}>
        <Text>Welcome, Jane</Text>
      </View>
      {/* create a search box */}
      <View
        style={{
          marginTop: 32,
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 4,
          padding: 10,
        }}
      >
        <TextInput
          // inlineImageLeft="search_icon"
          placeholder="Search for products"
          style={{}}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 48,
        }}
      >
        <View>
          <Text>Just for you</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <MaterialIcons name="arrow-back-ios" size={30} color="black" />
          <MaterialIcons name="arrow-forward-ios" size={30} color="black" />
        </View>
      </View>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={products}
          renderItem={renderProduct}
        />
      </View>
    </View>
  );
};

export default Catalogue;

const styles = StyleSheet.create({});
