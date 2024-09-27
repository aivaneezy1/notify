"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const SidebarComponent = () => {
    // State to manage sidebar open/closed
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

    // Function to toggle sidebar state
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="relative">
            {/* Button to open/close the sidebar */}

            {isSidebarOpen ? (
                <ChevronLeft
                    onClick={toggleSidebar}
                    className="w-6 h-6 absolute top-2 right-0 z-[100000] rounded-md flex items-center
                justify-center  transition duration-300 ease-in-out
                transform bg-black hover:bg-black-600 hover:scale-105 shadow-md"
                />
            ) : (
                <ChevronRight
                    onClick={toggleSidebar}
                    className="w-6 h-6 absolute top-80 left-0 z-[100000] rounded-md flex items-center
                justify-center  transition duration-300 ease-in-out
                transform bg-black hover:bg-black-600 hover:scale-105 shadow-md"
                />

            )}




            {/* Sidebar */}
            <aside
                className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } group/sidebar h-full bg-gray-500 overflow-y-auto flex w-60 flex-col z-[99999] transition-transform duration-300 ease-in-out`}
            >
                <div>asdas</div>
                <div>test1</div>
                <div>test2</div>

                {/* Hover border indicator */}
                <div className="absolute top-0 right-0 h-full w-1 bg-transparent group-hover/sidebar:bg-blue-500 transition-all"></div>
            </aside>
        </div>
    );
};

export default SidebarComponent;
