function Footer() {
    const footerSectionStyling = 'bg-black text-white text-center mt-10 p-6'

    return (
        <>
            <footer id="contact" className={footerSectionStyling}>
                <p>© 2025 Jacob Gomez Hansen | Something, something clever ...</p>
                <p>
                    Stay connected:&nbsp;
                    <a target="_blank" href="https://www.linkedin.com/in/jacob-gomez-hansen/">
                        LinkedIn
                    </a>{' '}
                    |&nbsp;
                    <a target="_blank" href="https://github.com/jacobg431">
                        GitHub
                    </a>
                </p>
            </footer>
        </>
    )
}

export default Footer
