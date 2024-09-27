import { Children } from "react";
import SidebarComponent from "../(Components)/(Sidebar)/Sidebar";


const routeLayoute = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen flex ">
            <SidebarComponent />
            <main className="flex-1 h-full overflow-y-auto">
                {children}
            </main>
        </div>
    )
}

export default routeLayoute