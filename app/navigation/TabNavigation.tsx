import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Activities, Settings } from "../screens";
import HomeStack from "./stacks/HomeStack";
import InventoryDrawer from "./drawers/InventoryDrawer";
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
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <HomeIcon stroke={focused ? COLORS.secondary : COLORS.primary} />
          ),
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={InventoryDrawer}
        options={{
          headerShown: false,
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
