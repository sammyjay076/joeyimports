import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens";
import Icon from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        name="Home"
        component={Home}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};
export default BottomTabs;
