var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    currentDate = new Date(),
    currentDayOfWeek = daysOfWeek[currentDate.getDay()],
    currentMonth = months[currentDate.getMonth()],
    currentDay = currentDate.getDate(),
    currentYear = currentDate.getFullYear(),
    formattedDate = currentDayOfWeek + ", " + ("0" + (currentDate.getMonth() + 1)).slice(-2) + "/" + ("0" + currentDay).slice(-2) + "/" + currentYear;

function typingEffect(e) {
    return (
        (string = '<div class="temp-typing p-2 rounded-lg shadow-xs mt-2 inline-block" style="width: fit-content; border-radius: 8px; background-color: #02b40747;">'),
        (string += '<div class="typing-animation">'),
        (string += '<div class="typing-dot"></div>'),
        (string += '<div class="typing-dot"></div>'),
        (string += '<div class="typing-dot"></div>'),
        (string += "</div>"),
        (string += "</div>")
    );
}
(document.getElementById("currentDate").textContent = formattedDate),
document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    let l = document.querySelector(".scroll-top");
    if (l) {
        let d = function () {
            window.scrollY > 100 ? l.classList.add("active") : l.classList.remove("active");
        };
        window.addEventListener("load", d), document.addEventListener("scroll", d), l.addEventListener("click", window.scrollTo({
            top: 0,
            behavior: "smooth"
        }));
    }

});

let buttons = document.getElementsByTagName('button');
let question = [];
let div1 = document.querySelector('#div1');
let div2 = document.querySelector('#div2');
let div3 = document.querySelector('#div3');
let div4 = document.querySelector('#div4');
let div5 = document.querySelector('#div5');
let ans1 = document.querySelector('#ans1');
let ans2 = document.querySelector('#ans2');
let ans3 = document.querySelector('#ans3');
let ans4 = document.querySelector('#ans4');
let ans5 = document.querySelector('#ans5');
let ans6 = document.querySelector('#ans6');
let btn0 = document.querySelector('#btn0');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

function addHidden(event) {
    event.classList.add('hidden');
}

function removeHidden(event) {
    event.classList.remove('hidden');
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',
        function clickButton(event) {
            event.preventDefault();
            if (buttons[i].classList == '' + i + '') {
                if (i == 0) {
                    addHidden(btn0);
                    question.push(i);
                    removeHidden(ans1);
                    removeHidden(div2)
                } else if (i == 1) {
                    addHidden(btn0);
                    question.push(i);
                    removeHidden(ans2);
                    removeHidden(div5);
                } else if (i == 2) {
                    addHidden(btn1);
                    question.push(i);
                    removeHidden(ans3);
                    removeHidden(div3);
                } else if (i == 3) {
                    addHidden(btn1);
                    question.push(i);
                    removeHidden(ans4);
                    removeHidden(div5);
                } else if (i == 4) {
                    addHidden(btn2);
                    question.push(i);
                    removeHidden(ans5);
                    removeHidden(div5);
                } else if (i == 5) {
                    addHidden(btn2);
                    question.push(i);
                    removeHidden(ans6);
                    removeHidden(div4);
                }
            }
        }
    );
}
