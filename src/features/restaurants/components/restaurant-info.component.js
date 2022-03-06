import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Hooper's Store",
    icon,
    photos = [
      "https://static.wikia.nocookie.net/muppet/images/0/09/Hoopers.jpg/revision/latest/scale-to-width-down/684?cb=20200130122059",
    ],
    address = "127 Sesame Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporaily = false,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover style={styles.cover} key={name} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 16, backgroundColor: "white" },
  title: { padding: 12 },
});
