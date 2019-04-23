function myFn() {
    alert("Clicked");
}
function expand() {
    alert("onMouseover");
}

function expand2() {
    alert("onMouseOut");
}
function focusEvent(a) {
    console.log("event ", a);
    console.log(a.target.value);
    a.target.style.backgroundColor = 'green';
}

function save() {
    var doc = document.getElementById('inputField');
    var doc = document.getElementsByClassName('inputField');
    console.log(doc[0].value);
    console.log(doc[1].value);
    console.log(doc.value)
    for (let i = 0; i < doc.length; i++) {
        console.log(doc[i]);
    }
}

function fn2() {
    var div = document.getElementById('firstDiv').getElementsByTagName('p');
    var child = div.getElementsByTagName('p');
    console.log(child);
    var test = document.querySelectorAll('#firstDiv > p')
    console.log(test)
}


function sub(eve) {
    eve.preventDefault();
    console.log(eve);
    var tag = eve.target.getElementsByTagName('input');
    console.log(tag[0].value);
    console.log(tag[1].value);
    if(tag[0].value == ''){
        alert("Field is required");
    }
}

// document.getElementById('btn')
// .addEventListener('click', function (event) {
//     console.log(this)
//     alert("Event Triggered");
// })

// document.getElementById('btn')
// .addEventListener('click', function (event) {
//     console.log(this)
//     alert("Event Triggered");
// })