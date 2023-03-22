import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Beranda from "../pages/beranda";
import Profil from "../pages/profil";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Hasil } from "../pages/hasil";

const Tab = createMaterialBottomTabNavigator();

export default function NavTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Beranda"
      activeColor="#F5C6EC"
      inactiveColor="#FFFFFF"
      barStyle={{ backgroundColor: "#9A208C", height: 70 }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "Beranda") {
            iconName = "home";
          } else if (route.name === "Profil") {
            iconName = "user";
          } else if (route.name === "Hasil") {
            iconName = "book";
          }
          return <AntDesign name={iconName} color={color} size={26} />;
        },
      })}
    >
      <Tab.Screen name="Beranda" component={Beranda} />
      <Tab.Screen name="Hasil" component={Hasil} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
}
