// added yarn add @react-navigation/native
// added yarn add @react-navigation/stack
// added yarn add react-native-gesture-handler // this one gives swipe functionality

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";

export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={screenOptions}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen
                    name="RestaurantDetail"
                    component={RestaurantDetail}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
