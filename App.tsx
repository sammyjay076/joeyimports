import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import StackNavigator from "./app/routes/StackNavigator";
// import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const URL =
    "https://api.timbu.cloud/products?Apikey=56fd56382cbf4024a11fa0fc1805cb8420240706153121891578&organization_id=59a31b9f81fc43a69e0fbd5bc5bb34f7&Appid=PMVZRV2JLO8LDFY";
  const [productData, setProductData] = useState([]);
  async function fetchData() {
    const response = await fetch(URL);
    const data = await response.json();
    // console.log("what data", data?.items[0]?.photos[0]?.url);
    setProductData(data?.items);
    return data;
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StackNavigator productData={productData} setProducts={setProductData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0e",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
