import React from "react";
import { View, Text, Image } from "react-native";
import { HeaderWithBackgroundProps } from "../../types";
import { images } from "@/constants/images";

export const HeaderWithBackground: React.FC<HeaderWithBackgroundProps> = ({
  title,
  subtitle,
  imageUrl,
}) => {
  return (
    <View className="relative h-64">
      <Image
        source={images.hospital4}
        className="absolute top-0 left-0 right-0 bottom-0"
      />
      <View className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 flex items-center justify-center">
        <Text className="text-white text-3xl font-bold mb-2">{title}</Text>
        <Text className="text-white/80 text-lg">{subtitle}</Text>
      </View>
    </View>
  );
};