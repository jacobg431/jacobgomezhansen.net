import Expertise from './components/sections/expertise'
import Footer from './components/sections/footer'
import Header from './components/sections/header'
import Introduction from './components/sections/introduction'
import Navbar from './components/sections/navbar'
import Portfolio from './components/sections/portfolio'

function App() {
    const miscImages = import.meta.glob('/src/assets/images/misc/*.webp', { eager: true, import: 'default' })
    const portfolioImages = import.meta.glob('/src/assets/images/portfolio/*.webp', { eager: true, import: 'default' })
    const resumes = import.meta.glob('/src/assets/resumes/*.pdf', { eager: true, import: 'default' })

    return (
        <>
            <div className="w-full">
                <Navbar images={miscImages} />

                <Header images={miscImages} />

                <Introduction resumes={resumes} />

                <Portfolio images={portfolioImages} />

                <Expertise />

                <Footer />
            </div>
        </>
    )
}

export default App
