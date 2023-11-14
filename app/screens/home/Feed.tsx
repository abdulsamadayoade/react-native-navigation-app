import { View, Text, Button } from "react-native";
import React from "react";

const Feed = ({ navigation }: any) => {
  return (
    <View>
      <Text>Feed</Text>
      <Button
        title="Go to Information Page"
        onPress={() => navigation.navigate("Information")}
      />
      <Button
        title="Go to Services Page"
        onPress={() => navigation.navigate("Services")}
      />
    </View>
  );
};

export default Feed;
