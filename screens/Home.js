// used rnf to start
import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";
import BottomTabs from "../components/BottomTabs";
import { Divider } from "react-native-elements";

const YELP_API_KEY =
  "LTjGqMCDVFetAWnLZ8atNNqLhfGk_hj1G8ON9ricdnDfepZNxvdOeBGXwj0A-shjXF7qYSx0snksxWc5Ml2NIqTBlb8GdTv96ziaMhcoDQeHqocxKsHGeM6RMhVKYXYx";
//

export default function Home() {
  const [restaurantsData, setRestaurantsData] = useState(localRestaurants);
  const [city, setCity] = useState("SanFrancisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantsData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  // when city and activeTab changes, reload the yelp data (meaning of useEffect)
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    // flex : 1 makes the entire screen grey
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantsData={restaurantsData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}

// added 2 packages for searchbar
// react-native-vector-icons
// react-native-google-places-autocomplete
