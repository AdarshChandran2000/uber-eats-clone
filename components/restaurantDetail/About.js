import React from "react";
import { View, Text, Image } from "react-native";

const yelpRestaurantInfo = {
    name: "Farmhouse Kitchen Thai Cuisine",
    image: "https://www.bahrainyellow.com/img/cats/restaurants.jpg",
    price: "$$",
    review: "1500",
    rating: 5,
    categories: [{ title: "Thai" }, { title: "Comfort Food" }],
};

const { name, image, price, review, rating, categories } = yelpRestaurantInfo;

const formattedCategories = categories.map((cat) => cat.title).join(" · ");

const description = `${formattedCategories} ${
    price ? " · " + price : ""
} · 🎫 · ${rating} ⭐ (${review}+)`;

export default function About() {
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
