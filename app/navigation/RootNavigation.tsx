import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./TabNavigation";

const RootNavigation = ({ onReady }: { onReady: () => void }) => {
  return (
    <NavigationContainer onReady={onReady}>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;
