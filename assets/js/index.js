const buttonSearch = document.querySelector("#bg-home-page main a")
const modal = document.querySelector("#modal")
const closeModal = document.querySelector("#modal .header a")

buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})

closeModal.addEventListener("click", () => {
    modal.classList.add("hide")
} )