import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import FirstPart from "./components/FirstPart.jsx";
import SecondPart from "./components/SecondPart.jsx";
import ThirdPart from "./components/ThirdPart.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
    return (
        <>
            <div className="Site">
                <Navbar />
                <div className="Sitebody">
                    <Header />
                    <FirstPart />
                    <SecondPart />
                    <ThirdPart />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
