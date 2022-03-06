import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 12px;
`;

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantPicture = styled(Card.Cover)`
  padding: 16px;
  background-color: white;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
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
    <RestaurantCard elevation={5}>
      <RestaurantPicture key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
