import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feed, Services, Information } from "../../screens/home";

type StackParamsList = {
  Feed: undefined;
  Services: undefined;
  Information: undefined;
};

const Stack = createNativeStackNavigator<StackParamsList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Services" component={Services} />
      <Stack.Screen name="Information" component={Information} />
    </Stack.Navigator>
  );
};

export default HomeStack;
