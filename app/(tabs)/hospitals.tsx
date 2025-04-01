import React from "react";
import { FlatList, StatusBar, View } from "react-native";
import { HeaderWithBackground } from "../../components/hospitals/HeaderWithBackground";
import { HospitalCard } from "../../components/hospitals/HospitalCard";
import { FloatingCardContainer } from "../../components/hospitals/FloatingCardContainer";
import { Hospital } from "../../types";
import { images } from "@/constants/images";

const hospitals: Hospital[] = [
    {
        id: 1,
        name: "RS Umum Daerah Kota Bandung",
        address: "Jl. Rumah Sakit No. 22, Bandung",
        image: images.hospital1,

    },
    {
        id: 2,
        name: "RS Santo Borromeus",
        address: "Jl. Ir. H. Juanda No. 100, Bandung",
        image: images.hospital2,

    },
    {
        id: 3,
        name: "RS Hasan Sadikin",
        address: "Jl. Pasteur No. 38, Bandung",
        image: images.hospital3,
    },
];

export default function HospitalsPage() {
    return (
        <View className="flex-1 bg-gray-50">
            <StatusBar style="light" />

            <HeaderWithBackground
                title="Nearby Hospitals"
                subtitle={`${hospitals.length} tersedia`}
                imageUrl="https://source.unsplash.com/random/800x600/?hospital"
            />

            <FloatingCardContainer>
                <FlatList
                    data={hospitals}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <HospitalCard hospital={item} />}
                    ListFooterComponent={<View className="pb-6" />}
                />
            </FloatingCardContainer>
        </View>
    );
}