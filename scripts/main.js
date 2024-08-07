document.querySelector("h1").addEventListener("click", () =>{
    alert("Ouch! stop poking me!");
});

const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "image/141955.gif") {
        myImage.setAttribute("src", "image/LINE_ALBUM_慶餘年雜記1～要剪短髮嗎_240807.jpg");
    }
    else {
        myImage.setAttribute("src", "image/141955.gif");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `My first web page, ${storedName}`;
}

function setUserName() {
    const myName = prompt("please enter your name.");
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `My first web page, written by ${myName}`;
    }
}

myButton.onclick = () => {
    alert("nice!")
    setUserName();
}