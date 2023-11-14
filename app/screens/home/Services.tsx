import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Services = () => {
  const navigation = useNavigation<any>();

  return (
    <View>
      <Text>Services</Text>
      <Button
        title="Go to Information Page"
        onPress={() => navigation.navigate("Information")}
      />
      <Button
        title="Go to Feed Page"
        onPress={() => navigation.navigate("Feed")}
      />
    </View>
  );
};

export default Services;
