"use client";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SidebarContent from "./SidebarContent";
const SidebarComponent = () => {
    // State to manage sidebar open/closed
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
    const [sidebarWidth, setSidebarWidth] = useState<number>(240); // Initial width of sidebar
    const sidebarRef = useRef<HTMLDivElement>(null);
    const isResizing = useRef<boolean>(false);

    // Function to toggle sidebar state
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Function to handle the resizing of the sidebar
    const handleMouseDown = (e: React.MouseEvent) => {
        isResizing.current = true;
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isResizing.current && sidebarRef.current) {
            // Calculate the new width of the sidebar based on the current mouse position 
            // (e.clientX) relative to the left edge of the sidebar element.
            const newWidth = e.clientX - sidebarRef.current.getBoundingClientRect().left;
            if (newWidth >= 150 && newWidth <= 500) { // Set min and max sidebar width
                setSidebarWidth(newWidth);
            }
        }
    };

    const handleMouseUp = () => {
        isResizing.current = false;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    };

    return (
        <div className="relative">
            {/* Button to open/close the sidebar */}
            <div className="cursor-pointer">
                {!isSidebarOpen && (
                    <ChevronRight
                        onClick={toggleSidebar}
                        className="w-6 h-6 absolute top-80 left-0 z-[100000] rounded-md flex items-center justify-center transition duration-300 ease-in-out transform hover:bg-black-600 hover:scale-105 shadow-md"
                    />
                )}
            </div>

            {/* Sidebar */}
            <aside
                ref={sidebarRef}
                style={{ width: `${sidebarWidth}px` }}
                className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} group/sidebar h-full bg-gray-500 overflow-y-auto flex flex-col z-[99999] transition-transform duration-300 ease-in-out`}
            >
                {/* Sidebar content */}
                <SidebarContent />

                {/* ChevronLeft appears only on hover */}
                <ChevronLeft
                    onClick={toggleSidebar}
                    className={`w-6 h-6 absolute top-2 right-0 z-[100000] rounded-md flex items-center justify-center transition duration-300 ease-in-out transform opacity-0 group-hover/sidebar:opacity-100 hover:bg-black-600 hover:scale-105 shadow-md`}
                />

                {/* Resizable handle */}
                <div
                    onMouseDown={handleMouseDown}
                    className="absolute top-0 right-0 h-full w-2  cursor-ew-resize"
                ></div>

                {/* Hover border indicator */}
                <div className="absolute top-0 right-0 h-full w-1 bg-transparent group-hover/sidebar:bg-blue-500 transition-all"></div>
            </aside>
        </div>
    );
};

export default SidebarComponent;
