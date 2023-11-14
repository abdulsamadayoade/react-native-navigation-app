import { createDrawerNavigator } from "@react-navigation/drawer";
import { Bikes, Vans } from "../../screens/inventory";

type DrawerListProps = {
  Vans: undefined;
  Bikes: undefined;
};

const Drawer = createDrawerNavigator<DrawerListProps>();

const InventoryDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Bikes" component={Bikes} />
      <Drawer.Screen name="Vans" component={Vans} />
    </Drawer.Navigator>
  );
};

export default InventoryDrawer;
