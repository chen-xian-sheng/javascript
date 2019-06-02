//let myHeading = document.querySelector("h1");
//myHeading.textContent = "hello world";


//let myimage = document.querySelector("img");

//myimage.onclick = function () {
//    let mysrc = myimage.getAttribute("src");
//    if (mysrc === "images/firefox-icon.png") {
//        myimage.setAttribute("src", "images/firefox-icon.jpg");
//    } else {
//        myimage.setAttribute("src","images/firefox-icon.png")
//    }
//}

function nj() {
    alert(localStorage.getItem('name'));
}


function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Mozilla 你好，' + name + '！';
}

function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
}

let storedName = localStorage.getItem('name');
if (!storedName) {
    setUserName();
} else {
    setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;