// app/data/hospitals.ts
import { images } from "@/constants/images";
export interface Hospital {
    id: number;
    name: string;
    address: string;
    image: string;
    phone?: string;
    hours?: string;
    services?: string[];
}

export const hospitals: Hospital[] = [
    {
        id: 1,
        name: "RS Umum Daerah Kota Bandung",
        address: "Jl. Rumah Sakit No. 22, Bandung",
        image: "https://images.unsplash.com/photo-1533042789716-e9a9c97cf4ee?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        phone: "(022) 1234567",
        hours: "24 hours",
        services: ["Emergency", "General Medicine", "Pediatrics"]
    },
    {
        id: 2,
        name: "RS Santo Borromeus",
        address: "Jl. Ir. H. Juanda No. 100, Bandung",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvc3BpdGFsJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
        phone: "(022) 7654321",
        hours: "8:00 AM - 8:00 PM",
        services: ["Cardiology", "Neurology", "Orthopedics"]
    },
    {
        id: 3,
        name: "RS Hasan Sadikin",
        address: "Jl. Pasteur No. 38, Bandung",
        image: "https://images.unsplash.com/photo-1600851555921-d280ba3f019a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvc3BpdGFsJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
        phone: "(022) 9876543",
        hours: "24 hours",
        services: ["Oncology", "Surgery", "Radiology"]
    },
];