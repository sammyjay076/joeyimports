import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Splash } from "../screens";
import BottomTabs from "./BottomTabs";

type Props = {};

interface INavigationProps {
  productData: any;
  setProducts: React.Dispatch<React.SetStateAction<[]>>;
}

const Stack = createNativeStackNavigator();
const StackNavigator: React.FC<INavigationProps> = ({
  productData,
  setProducts,
}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Splash"
      >
        <Stack.Screen name="Splash">
          {(props) => (
            <Splash
              productData={productData}
              setProducts={setProducts}
              {...props}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="BottomTabs">
          {(props) => (
            <BottomTabs
              productData={productData}
              setProducts={setProducts}
              {...props}
            />
          )}
        </Stack.Screen>
        {/* <Stack.Screen name="Home" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
