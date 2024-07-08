import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Profile } from "../screens";
import Icon from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();
interface IBottomTabsProps {
  productData: any;
  setProducts: React.Dispatch<React.SetStateAction<[]>>;
}

const BottomTabs: React.FC<IBottomTabsProps> = ({
  productData,
  setProducts,
}) => {
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
      >
        {(props) => (
          <Home
            productData={productData}
            setProducts={setProducts}
            {...props}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};
export default BottomTabs;
