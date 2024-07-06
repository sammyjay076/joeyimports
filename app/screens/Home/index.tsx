import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import FeatherIcon from "react-native-vector-icons/Feather";
import AntIcon from "react-native-vector-icons/AntDesign";
import pictures from "../../pictures";

type Props = {};

const Home: React.FC = (props: Props) => {
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

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <FeatherIcon name="menu" size={30} color="black" />
        <AntIcon name="user" size={30} color="black" />
      </View>
      <View>
        <Text>Discover products</Text>
      </View>

      <View style={{}}>
        <FlatList
          numColumns={2}
          data={data}
          renderItem={({ item }) => (
            <View
              style={{
                height: 200,
                width: 200,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>{item.title}</Text>
              <Text>{item.price}</Text>
              <Image style={{ height: 150, width: 150 }} source={item.image} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
