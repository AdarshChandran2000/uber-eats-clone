import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckBox from "react-native-bouncy-checkbox";

const foods = [
    {
        title: "Lasagna",
        description:
            "With butter lettuce, tomato and sauce bechamel with classic mayonese",
        price: "$13.50",
        image: "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    },
    {
        title: "Tandoori Chicken",
        description:
            "Amazing Indian dish with tenderloin chicken off the sizzle",
        price: "$19.20",
        image: "https://static.toiimg.com/thumb/53240689.cms?width=1200&height=900",
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    },
    {
        title: "Lasagna",
        description:
            "With butter lettuce, tomato and sauce bechamel with classic mayonese",
        price: "$13.50",
        image: "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    },
    {
        title: "Tandoori Chicken",
        description:
            "Amazing Indian dish with tenderloin chicken off the sizzle",
        price: "$19.20",
        image: "https://static.toiimg.com/thumb/53240689.cms?width=1200&height=900",
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    },
];

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: "bold",
    },
});

export default function MenuItems() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        <BouncyCheckBox
                            iconStyle={{
                                borderColor: "lightgray",
                                borderRadius: 0,
                            }}
                            fillColor="green"
                        />
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    <Divider
                        width={0.5}
                        orientation="vertical"
                        style={{
                            marginHorizontal: 20,
                        }}
                    />
                </View>
            ))}
        </ScrollView>
    );
}

const FoodInfo = (props) => (
    <View
        style={{
            width: 240,
            justifyContent: "space-evenly",
        }}
    >
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View>
        <Image
            source={{ uri: props.food.image }}
            style={{
                width: 100,
                height: 100,
                borderRadius: 8,
            }}
        />
    </View>
);

// to add checkmarks on the left of the menu.
// yarn add react-native-bouncy-checkbox
// yarn add tslib (to remove errors later ig)
