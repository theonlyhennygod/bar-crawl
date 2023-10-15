// Languages

const languages = {
    engish: "Engish",
    spanish: "Español",
    french: "Français"
};

let currentLanguage = "english";

function changeLanguage() {
    switch (currentLanguage) {
        case "english":
            currentLanguage = "spanish";
            break;
        case "spanish":
            currentLanguage = "french";
            break;
        case "french":
            currentLanguage = "english";
            break;
        default:
            currentLanguage = "english";
            break;
    }

    const languageDisplay = document.getElementById("languageDisplay")
    languageDisplay.textContent = 'Language: $(languages[currentLanguage]}';
}

const languageButton = document.getElementById("languageButton");
languageButton.addEventListener("click", changeLanguage);