import Expertise from './components/sections/expertise'
import Footer from './components/sections/footer'
import Header from './components/sections/header'
import Introduction from './components/sections/introduction'
import Library from './components/sections/library'
import Navbar from './components/sections/navbar'
import Portfolio from './components/sections/portfolio'

function App() {
    const allImages = import.meta.glob('/src/assets/images/*.webp', {eager: true, import: 'default'})

    return (
        <>
            <div className="w-full">
                <Navbar allImages={allImages} />

                <Header allImages={allImages} />

                <Introduction />

                <Portfolio allImages={allImages} />

                <Expertise />

                <Library />

                <Footer />
            </div>
        </>
    )
}

export default App
