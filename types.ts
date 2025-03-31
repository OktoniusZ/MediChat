// types.ts
export type Session = {
    user: {
        id: string;
        email?: string;
    };
} | null;