import React from "react";
import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";

const NewItem = ({ item }) => {
  const onPress = () => {
    console.log("onPress");
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.img} source={item.data.thumbnail} />
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>{item.data.title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginLeft: Platform.OS === "ios" ? 0 : 16,
    marginRight: Platform.OS === "ios" ? 0 : 16,
  },
  row: {
    flexDirection: "row",
    margin: 5,
  },
  title: {
    fontSize: 14,
    flexShrink: 1,
  },
  img: {
    width: 62,
    height: 62,
  },
});

export default NewItem;
