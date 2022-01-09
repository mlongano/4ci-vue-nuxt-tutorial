function data() {
        return {
            message: 'Hello JS!!!'
        }
}

let messageElement = document.querySelector("#hello-vue");

window.addEventListener('load', () => {
    messageElement.textContent = data().message;
})