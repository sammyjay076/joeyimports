import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import AntIcon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

interface IHeaderProps {
  title: string;
  onPressSearch: () => void;
}

const Header: React.FC<IHeaderProps> = ({ title, onPressSearch }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.left}
      >
        <MaterialIcon name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>
      <View style={styles.middle}>
        <Text style={styles.headerName}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.right}>
        <AntIcon name="search1" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#0d0d0e",
  },
  left: {
    marginRight: 16,
  },
  middle: {
    flex: 1,
    alignItems: "center",
  },
  right: {
    marginLeft: 16,
  },
  headerName: {
    color: "#fff",
    fontSize: 20,
  },
});

export default Header;
