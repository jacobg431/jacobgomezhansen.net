import Expertise from "./components/sections/expertise"
import Footer from "./components/sections/footer"
import Header from "./components/sections/header"
import Introduction from "./components/sections/introduction"
import Library from "./components/sections/library"
import Navbar from "./components/sections/navbar"
import Portfolio from "./components/sections/portfolio"

function App() {

    return (
        <>
            <div>

                <Navbar />

                <Header />

                <Introduction />

                <Portfolio />

                <Expertise />

                <Library />

                <Footer />

            </div>
        </>
    )
}

export default App
