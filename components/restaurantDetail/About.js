import React from "react";
import { View, Text, Image } from "react-native";

const image = "https://www.bahrainyellow.com/img/cats/restaurants.jpg";

const title = "Farmhouse Kitchen Thai Cuisine";
const description = "Thai · Comfort Food · $$ · 🎫 · 4 ⭐ (2913+)";

export default function About() {
    return (
        <View>
            <RestuaurantImage image={image} />
            <RestaurantTitle title={title} />
            <RestaurantDescription desc={description} />
        </View>
    );
}

const RestuaurantImage = (props) => (
    <Image
        source={{ uri: props.image }}
        style={{ width: "100%", height: 100 }}
    />
);

const RestaurantTitle = (props) => (
    <Text
        style={{
            fontSize: 29,
            fontWeight: "bold",
            marginTop: 10,
            marginHorizontal: 15,
        }}
    >
        {props.title}
    </Text>
);

const RestaurantDescription = (props) => (
    <Text
        style={{
            marginTop: 10,
            marginHorizontal: 15,
            fontWeight: "400",
            fontSize: 15.5,
        }}
    >
        {props.desc}
    </Text>
);
