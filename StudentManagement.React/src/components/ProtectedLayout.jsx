import Navbar from "./Navbar";

function ProtectedLayout({ children }) {

    return (
        <>
            <Navbar />

            {children}
        </>
    );
}

export default ProtectedLayout;