import { View, Text, Button } from "react-native";
import React from "react";

const Information = ({ navigation }: any) => {
  return (
    <View>
      <Text>Information</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to Services Page"
        onPress={() => navigation.navigate("Services")}
      />
    </View>
  );
};

export default Information;
