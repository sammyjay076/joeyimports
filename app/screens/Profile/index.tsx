import React, { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import pictures from "../../pictures";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components";

const ProfileScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header title="Profile" />,
    });
  });
  return (
    <View style={styles.container}>
      <Image source={pictures.user} style={styles.profileImage} />
      <Text style={styles.fullName}>Samuel Khobby</Text>
      <Text style={styles.username}>@khobbysam</Text>

      <View style={{ alignItems: "center", marginTop: 12 }}>
        <Text style={{ ...styles.fullName, fontSize: 18 }}>
          Slack ID: Samuel Boakye Yiadom
        </Text>
        <Text style={styles.username}>Gmail: boakyesamuel976@gmail.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  profileImage: {
    width: 400,
    height: 400,
    borderRadius: 75,
    marginBottom: 20,
  },
  fullName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    color: "gray",
  },
});

export default ProfileScreen;
