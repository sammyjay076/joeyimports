import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import FeatherIcon from "react-native-vector-icons/Feather";
import AntIcon from "react-native-vector-icons/AntDesign";
import pictures from "../../pictures";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components";

type Props = {};
interface IHomeProps {
  productData: any;
  setProducts: React.Dispatch<React.SetStateAction<[]>>;
}

const Home: React.FC<IHomeProps> = ({ productData, setProducts }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => (
        <Header
          title="Home"
          onPressSearch={() => {
            navigation.navigate("Search");
          }}
        />
      ),
    });
  });

  const imageUrl = "https://api.timbu.cloud/images/";

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
          data={productData}
          renderItem={({ item }) => (
            <View
              style={{
                height: 200,
                width: 200,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ height: 150, width: 150 }}
                source={{
                  uri: `${imageUrl}${item?.photos[0]?.url}`,
                }}
              />
              <Text>{item.name}</Text>
              <Text>${item?.current_price[0]?.GHS[0]}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
