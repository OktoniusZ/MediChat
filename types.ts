// types.ts
export type Session = {
    user: {
        id: string;
        email?: string;
    };
} | null;

export interface Hospital {
    id: number;
    name: string;
    address: string;
    image: string;
    // Add more details you want to show on the detail page
    phone?: string;
    hours?: string;
    services?: string[];
}

export interface HeaderWithBackgroundProps {
    title: string;
    subtitle: string;
    imageUrl: string;
}

export interface HospitalCardProps {
    hospital: Hospital;
    onPress: () => void;
}

export interface FloatingCardContainerProps {
    children: React.ReactNode;
}

export type RootStackParamList = {
    Hospitals: undefined;
    HospitalDetails: { hospital: Hospital };
};

export interface UserProfile {
    id: string;
    name: string;
    email: string;
    phone?: string;
    avatar?: string;
    joinedDate: string;
    medicalHistory?: {
        bloodType?: string;
        allergies?: string[];
        conditions?: string[];
    };
}