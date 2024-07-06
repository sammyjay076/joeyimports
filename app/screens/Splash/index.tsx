import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Animated,
  FlatList,
  Image,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamsList } from "../../types/navigation.d";
import pictures from "../../pictures";

type Props = {};

const Splash: React.FC = (props: Props) => {
  const URL =
    "https://api.timbu.cloud/products?Apikey=56fd56382cbf4024a11fa0fc1805cb8420240706153121891578&organization_id=59a31b9f81fc43a69e0fbd5bc5bb34f7&Appid=PMVZRV2JLO8LDFY";

  // const URL = `https://api.timbu.cloud/products?Apikey=${process.env.Apikey}&organization_id=${process.env.organization_id}&Appid=${process.env.Appid}`;

  const [productData, setProductData] = useState([]);

  async function fetchData() {
    const response = await fetch(URL);
    const data = await response.json();
    // console.log("what data", data?.items[0]?.photos[0]?.url);
    setProductData(data?.items);
    return data;
  }

  const navigation = useNavigation<RootStackParamsList>();
  const slideUpAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(slideUpAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const slideUpStyle = {
    transform: [
      {
        translateY: slideUpAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [500, 0],
        }),
      },
    ],
  };

  return (
    <ImageBackground
      source={require("../../../assets/interior.jpg")}
      style={{ flex: 1 }}
    >
      <Animated.View style={[styles.container, slideUpStyle]}>
        <View>
          <Text style={styles.title}>Renovate your interior</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // navigation.navigate("BottomTabs");
            fetchData();
          }}
        >
          <Text style={styles.buttonText}>Go to catalogue</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.bottomContainer, slideUpStyle]}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Popular categories
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("BottomTabs");
            }}
            style={{
              borderBottomColor: "#0D0D0E",
              borderBottomWidth: 1,
            }}
          >
            <Text
              style={{
                color: "#0D0D0E",
                fontSize: 16,
              }}
            >
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 40,
          }}
        >
          <FlatList
            data={productData}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 30 }}
            renderItem={({ item }) => (
              <View style={{ gap: 10 }}>
                <Image
                  source={{
                    uri: `https://api.timbu.cloud/images/${item?.photos[0]?.url}`,
                  }}
                  style={{
                    width: 200,
                    height: 200,
                    backgroundColor: "grey",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    {item?.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "grey",
                    }}
                  >
                    ${item?.current_price[0]?.GHS[0]}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </Animated.View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  title: {
    color: "white",
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "white",
    width: "50%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomContainer: {
    height: "50%",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  bottomText: {
    color: "white",
    fontSize: 30,
    width: "100%",
    textAlign: "center",
  },
});

export default Splash;
