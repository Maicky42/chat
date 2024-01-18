const openModal = document.querySelector("#open-modal");
const closeModal = document.querySelector("#close-modal");
const Modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");


const toggleModal = () => {
    Modal.classList.toggle("hide");
    fade.classList.toggle("hide")
}

[openModal, closeModal, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal())
})
