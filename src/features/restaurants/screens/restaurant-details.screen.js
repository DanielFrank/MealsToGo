import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { SafeArea } from "../../../components/utilities/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const BreakfastIcon = (props) => <List.Icon {...props} icon="bread-slice" />;
const LunchIcon = (props) => <List.Icon {...props} icon="hamburger" />;
const DinnerIcon = (props) => <List.Icon {...props} icon="food-variant" />;
const DrinksIcon = (props) => <List.Icon {...props} icon="cup" />;

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  const [expandedBreakfast, setExpandedBreakfast] = useState(false);
  const [expandedLunch, setExpandedLunch] = useState(false);
  const [expandedDinner, setExpandedDinner] = useState(false);
  const [expandedDrinks, setExpandedDrinks] = useState(false);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          expanded={expandedBreakfast}
          onPress={() => setExpandedBreakfast(!expandedBreakfast)}
          title="Breakfast"
          left={BreakfastIcon}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          expanded={expandedLunch}
          onPress={() => setExpandedLunch(!expandedLunch)}
          title="Lunch"
          left={LunchIcon}
        >
          <List.Item title="Hamburger" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Chicken Soup w/Kreplach" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={DinnerIcon}
          expanded={expandedDinner}
          onPress={() => setExpandedDinner(!expandedDinner)}
        >
          <List.Item title="Brisket" />
          <List.Item title="Roast Chicken" />
          <List.Item title="Spaghetti w/Meatballs" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={DrinksIcon}
          expanded={expandedDrinks}
          onPress={() => setExpandedDrinks(!expandedDrinks)}
        >
          <List.Item title="Soda" />
          <List.Item title="Orange Juice" />
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
