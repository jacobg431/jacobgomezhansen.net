function getUserLanguage() {
    const userLanguageTag = navigator.language || navigator.userLanguage
    var userLanguage

    switch (userLanguageTag.toLowerCase()) {
        case 'da':
            userLanguage = 'danish'
            break
        case 'nb':
            userLanguage = 'norwegian'
            break
        default:
            userLanguage = 'default'
            break
    }

    return userLanguage
}

export default getUserLanguage
