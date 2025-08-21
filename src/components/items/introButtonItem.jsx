import getUserLanguage from '../../utils/language'

function IntroButtonItem(props) {
    const id = props.id
    const text = props.text
    const buttonStyling = 'cursor-pointer font-bold text-center px-4 py-2 rounded-lg ring-black ring-1 inset-ring-black inset-ring-3 duration-400 ease-out hover:border-red hover:ring-red hover:inset-ring-red hover:text-red'
    
    const resumeLanguageMap = {
        default: '/src/assets/Resume-Jacob-Gomez-Hansen-English-Version.pdf',
        danish: '/src/assets/Resume-Jacob-Gomez-Hansen-Dansk-Version.pdf',
        norwegian: '/src/assets/Resume-Jacob-Gomez-Hansen-Norsk-Versjon.pdf',
    }
    const resumeLanguageUrl = resumeLanguageMap[getUserLanguage()]

    const clickOptions = {
        "download": onDownloadButtonClick,
        "message": onMessageButtonClick
    }


    function onDownloadButtonClick() {
        window.open(resumeLanguageUrl)
    }

    function onMessageButtonClick() {
        return
    }

    return (
        <div className={buttonStyling} onClick={clickOptions[id]}>{text}</div>
    )
}

export default IntroButtonItem