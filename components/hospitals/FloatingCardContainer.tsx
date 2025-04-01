import React from "react";
import { View } from "react-native";
import { FloatingCardContainerProps } from "../../types";

export const FloatingCardContainer: React.FC<FloatingCardContainerProps> = ({
    children,
}) => {
    return (
        <View className="flex-1 -mt-8">
            <View className="bg-white rounded-t-3xl flex-1 px-6 pt-6 shadow-lg">
                {children}
            </View>
        </View>
    );
};