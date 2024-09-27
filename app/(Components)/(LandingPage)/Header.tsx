"use client"
import { Button } from '@/components/ui/button';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useConvexAuth } from 'convex/react';
import { useUser } from '@clerk/clerk-react';
import Link from 'next/link';

const HeaderComponent = () => {
    const { isLoading, isAuthenticated } = useConvexAuth();
    const { user } = useUser()

    return (
        <div className='max-w-3xl space-y-4 text-white'>
            <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold pixel-font animate-glitch'>
                Creating <span className='border-b-2 border-green-400'>Notes</span> just made easier
            </h1>
            <h3 className='text-base sm:text-xl md:text-2xl font-medium'>Create, Organize and Share your notes</h3>
            <Link href={`/documents`}>
                <Button variant="blue" className='font-bold '>
                    Start
                    <ArrowRight />
                </Button>
            </Link>
        </div>
    );
}

export default HeaderComponent;
