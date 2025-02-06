// 2. variables - used to store data values for later use (Global Scope)
let count = 0;
const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
const saveEl = document.getElementById("save-el");
let counts = document.getElementById("counts");

// 3. Event Listener - is a procedure or method executed when any event occurs like a "click event"
incrementBtn.addEventListener("click", function() {
    // invoke function
    increment();
})

saveBtn.addEventListener("click", function() {
    // invoke function
    save();
})

