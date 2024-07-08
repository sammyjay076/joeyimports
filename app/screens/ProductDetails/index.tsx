import React, { useLayoutEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import pictures from "../../pictures";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamsList } from "../../types/navigation.d";
import { Header } from "../../components";

const ProductDetails = () => {
  const navigation = useNavigation<RootStackParamsList>();
  const route = useRoute();
  const { productData } = route.params as { productData: any };
  // console.log(productData);
  const imageUrl = "https://api.timbu.cloud/images/";
  const productName = productData?.name;
  const productPrice = productData?.current_price[0]?.GHS[0];
  const productDescription = productData?.description;
  const productImage = productData?.photos[0]?.url;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header title="Details" type="home" />,
    });
  });

  // source={{
  //   uri: `${imageUrl}${item?.photos[0]?.url}`,
  // }}
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
          overflow: "hidden",
          backgroundColor: "#ffffff81",
        }}
      >
        <Image
          source={
            productImage
              ? { uri: `${imageUrl}${productImage}` }
              : pictures.armChair
          }
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          padding: 16,
          // backgroundColor: "#ffffff81",
        }}
      >
        <Text style={styles.title}>{productName}</Text>
        <Text style={styles.description}>{productDescription}</Text>

        <View
          style={{
            backgroundColor: "#72e9e581",
            borderRadius: 8,
            width: 100,
            alignItems: "center",
            justifyContent: "center",
            height: 50,
          }}
        >
          <Text style={styles.price}>${productPrice}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    backgroundColor: "#bcb3b381",
  },
  image: {
    width: "100%",
    height: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: "medium",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginTop: 16,

    textAlign: "center",
  },
});

export default ProductDetails;
