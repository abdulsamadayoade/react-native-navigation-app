import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Inventory, Activities, Settings } from "../screens";
import {
  HomeIcon,
  InventoryIcon,
  ActivitiesIcon,
  SettingsIcon,
} from "../components/icons";
import { COLORS } from "../constants/colors";

type TabParamsList = {
  Home: undefined;
  Inventory: undefined;
  Activities: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabParamsList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingVertical: 20,
          height: 90,
        },
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: COLORS.primary,
        tabBarLabelStyle: {
          fontFamily: "Matter-Regular",
          paddingTop: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon stroke={focused ? COLORS.secondary : COLORS.primary} />
          ),
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={Inventory}
        options={{
          tabBarIcon: ({ focused }) => (
            <InventoryIcon
              fill={focused ? COLORS.secondary : COLORS.primary}
              stroke={focused ? COLORS.secondary : COLORS.primary}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Activities"
        component={Activities}
        options={{
          tabBarIcon: ({ focused }) => (
            <ActivitiesIcon
              fill={focused ? COLORS.secondary : COLORS.primary}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <SettingsIcon
              fill={focused ? COLORS.secondary : COLORS.primary}
              stroke={focused ? COLORS.secondary : COLORS.primary}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
