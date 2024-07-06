import {
  StyleSheet,
  Text,
  Touchable,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamsList } from "../../types/navigation.d";

type Props = {};

const Splash: React.FC = (props: Props) => {
  const navigation = useNavigation<RootStackParamsList>();
  return (
    <View>
      <Text>Splash</Text>
      <TouchableOpacity onPress={() => navigation.navigate("BottomTabs")}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
