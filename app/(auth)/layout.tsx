import NavbarComponent from "../(Components)/(LandingPage)/Navbar"
const authLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-[#1f1f1f] bg-gradient-radial from-[#3e3e3e] via-transparent">
            <div>Logo</div>
            <div>{children}</div>
        </div>
    )
}

export default authLayout