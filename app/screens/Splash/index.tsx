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
import React, { useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamsList } from "../../types/navigation.d";
import pictures from "../../pictures";

type Props = {};

const Splash: React.FC = (props: Props) => {
  const data = [
    {
      title: "Chester Chair",
      image: pictures.brownChair,
      price: "$10",
    },
    {
      title: "Leset Galant",
      image: pictures.leset,
      price: "$15",
    },
    {
      title: "Soft Element Jack",
      image: pictures.armChair,
      price: "$20",
    },
    {
      title: "Avrora Chair",
      image: pictures.redChair,
      price: "$25",
    },
    {
      title: "Item 5",
      image: pictures.redChair,
      price: "$30",
    },
    {
      title: "Item 6",
      image: pictures.redChair,
      price: "$35",
    },
    {
      title: "Item 7",
      image: pictures.redChair,
      price: "$40",
    },
  ];

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
            navigation.navigate("BottomTabs");
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
            data={data}
            keyExtractor={(item) => item.title}
            horizontal
            // space between items
            contentContainerStyle={{ gap: 30 }}
            renderItem={({ item }) => (
              <View style={{ gap: 10 }}>
                <Image
                  source={item.image}
                  style={{ width: 200, height: 200, gap: 10 }}
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
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "grey",
                    }}
                  >
                    {item.price}
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
