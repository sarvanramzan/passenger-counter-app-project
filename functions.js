// 4. functions -  block of code designed to perform a particular task when invoked
function increment() {
    // reassign count variable by incrementing
    count += 1;
    // html dom
    countEl.textContent = count;
}

function save() {
    // local variable
    let countStr = count + " - ";
    // reassign variable
    count = 0;
    // html dom
    saveEl.textContent += countStr;
    countEl.textContent = count;
}
