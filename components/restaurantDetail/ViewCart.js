import React from "react";
import { View, Text } from "react-native";
import { withTheme } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ViewCart() {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                position: "absolute",
                bottom: 250,
                zIndex: 999,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "100%",
                }}
            >
                <TouchableOpacity
                    style={{
                        marginTop: 20,
                        backgroundColor: "black",
                        alignItems: "center",
                        padding: 10,
                        borderRadius: 30,
                        width: 250,
                        position: "relative",
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            fontSize: 20,
                            fontWeight: "bold",
                        }}
                    >
                        View Cart
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
