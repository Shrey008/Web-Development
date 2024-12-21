//create a search bar that displays live search results as users type updating the results without requiring a full page reload

var input = document.querySelector("input")

var data = [
    {name: "harsh", src: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "kais", src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww"},
    {name: "noman", src: "https://images.unsplash.com/photo-1581382575275-97901c2635b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww"},
    {name: "akshay", src: "https://media.istockphoto.com/id/1401481821/photo/handsome-young-man-in-working-on-laptop-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=c6mapTZ5Hcnj5SN9WpKcOdnxZnt1SEWrrIH13LbaYuk="},
]

var pers = "";

data.forEach(function (elem) {
    pers += `<div class="person">
        <div class="img">
            <img src="${elem.src}" alt="">
        </div>
        <h4>${elem.name}</h4>
    </div>`;
})

document.querySelector(".people").innerHTML = pers;

input.addEventListener("input", function () {
    var matching = data.filter(function (e) {
        return e.name.startsWith(input.value)
    })

    var newusers = ""
    matching.forEach(function (elem) {
        newusers += `<div class="person">
            <div class="img">
                <img src="${elem.src}" alt="">
            </div>
            <h4>${elem.name}</h4>
        </div>`;
    })

    document.querySelector(".people").innerHTML = newusers;
})
