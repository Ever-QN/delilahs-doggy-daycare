// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

const submitBtn = document.getElementById("submit-button");
const contents = document.getElementById("contact-page");

submitBtn.addEventListener("click", function submitMessage() {
    contents.replaceChildren("");
    const createP = document.createElement("p");
    let thankYouMessage = document.createTextNode("Thank you for your message");
    createP.appendChild(thankYouMessage);
    contents.appendChild(createP);
    createP.style.fontSize="24px";
})

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

