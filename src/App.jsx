import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import FirstPart from "./components/FirstPart.jsx";
import SecondPart from "./components/SecondPart.jsx";
import ThirdPart from "./components/ThirdPart.jsx";
import ContactForm from "./components/ContactForm.jsx";
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
                    <ContactForm />
                </div>
                {/* <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSftsi5FxvoCA6UNvfaTfFjSk9orcVr0H9SzO4-sCxiceO9GZw/viewform?embedded=true"
                    width="640"
                    height="750"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                >
                    Loading…
                </iframe> */}
            </div>
        </>
    );
}

export default App;
