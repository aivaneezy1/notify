"use client"
import { ReactNode } from "react"
import { ClerkLoaded, ClerkLoading, ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import Loading from "@/components/ui/Loading";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);


export function ConvexClientProvider({ children }: { children: ReactNode }) {
    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
            <ClerkLoading>
                <div className="flex flex-col justify-center items-center h-screen">
                    <Loading />
                    <h2 className="">Loading...</h2>
                </div>
            </ClerkLoading>
            <ClerkLoaded>
                <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                    {children}
                </ConvexProviderWithClerk>
            </ClerkLoaded>
        </ClerkProvider>
    );
}

