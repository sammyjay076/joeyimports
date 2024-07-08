import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import FeatherIcon from "react-native-vector-icons/Feather";
import AntIcon from "react-native-vector-icons/AntDesign";
import pictures from "../../pictures";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components";
import { RootStackParamsList } from "../../types/navigation.d";

type Props = {};
interface IHomeProps {
  productData: any;
  setProducts: React.Dispatch<React.SetStateAction<[]>>;
}

const Home: React.FC<IHomeProps> = ({ productData, setProducts }) => {
  const navigation = useNavigation<RootStackParamsList>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header title="Home" type="home" />,
    });
  });

  const imageUrl = "https://api.timbu.cloud/images/";

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "#fff" }}>
      <View style={{}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={productData}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProductDetail", {
                  productData: item,
                });
              }}
              style={{
                height: 200,
                width: 200,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
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
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
