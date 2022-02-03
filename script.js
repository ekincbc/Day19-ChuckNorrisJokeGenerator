
//waiting for the DOM to load

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".button");
    const text = document.querySelector(".quote");

    //adding the functionality to the button
    button.addEventListener("click", () => {
        getJoke(text);
    })
})

