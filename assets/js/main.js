
import { subcriptionToHellfireClub } from "./hellfire.js"

const texName = document.getElementById("txtName")
const texEmail = document.getElementById("txtEmail")
const texLevel = document.getElementById("txtLevel")
const txtCharacter = document.getElementById("txtCharacter")
const btnSubcribe = document.getElementById("btnSubcribe")

btnSubcribe.addEventListener("click", async () => {
    const subcription = {
        name: texName.value,
        email: texEmail.value,
        level: texLevel.value,
        character: txtCharacter.value
    }

    const subcriptionId = await subcriptionToHellfireClub(subcription)
})