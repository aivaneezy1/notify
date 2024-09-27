"use client"
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { DarkModeComponent } from '../DarkMode';
import Link from 'next/link';
import { useConvexAuth } from 'convex/react';
import { UserButton } from '@clerk/nextjs';
const NavbarComponent = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { isLoading, isAuthenticated } = useConvexAuth();
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`flex flex-row justify-between items-center
             text-white m-5 sticky top-0 z-50 transition-all duration-300 ${isAuthenticated ? "gap-5" : "gap-10"}
             ${isScrolled ? 'shadow-lg pb-4 px-2' : ''}`}>
            <div className='mr-auto'>Logo</div>
            {!isAuthenticated ? (
                <Link href="/sign-up">
                    <Button variant="blue">Get Started</Button>
                </Link>
            ) : <UserButton />}
            <div><DarkModeComponent /></div>
        </div>
    );
}

export default NavbarComponent;
