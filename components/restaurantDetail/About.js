import React from "react";
import { View, Text, Image } from "react-native";

export default function About(props) {
    const { name, image, price, reviews, rating, categories } =
        props.route.params;

    const formattedCategories = categories.map((cat) => cat.title).join(" · ");

    const description = `${formattedCategories} ${
        typeof price === "undefined" ? " · " + price : ""
    } · 🎫 · ${rating} ⭐ (${reviews}+)`;

    return (
        <View>
            <RestuaurantImage image={image} />
            <RestaurantTitle title={name} />
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
