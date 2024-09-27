import NavbarComponent from "../(Components)/(LandingPage)/Navbar"
const authLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div>Logo</div>
            <div>{children}</div>
        </div>
    )
}

export default authLayout