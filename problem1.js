function updateTime() {
    // get current date and time by making a date object
    let currentUpdate = new Date();
    // 
    let hour = currentUpdate.getHours();
    let minute = currentUpdate.getMinutes();
    let second = currentUpdate.getSeconds();

    var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"],
        day = currentUpdate.getDate();

    let month = currentUpdate.getMonth();
    let year = currentUpdate.getFullYear();

    if (hour < 10) {
        hour = '0' + hour;
    }

    if (minute < 10) {
        minute = '0' + minute;
    }

    if (second < 10) {
        second = '0' + second;
    }

    if (day < 10) {
        day = '0' + day;
    }

    if (month < 10) {
        month = '0' + month;
    }

    // printing the current time
    document.getElementById("hour").innerHTML = hour + ' :';
    document.getElementById("minute").innerHTML = minute + ' :';
    document.getElementById("second").innerHTML = second;

    // printing the current date
    document.getElementById("day").innerHTML = day;
    document.getElementById("month").innerHTML = months[currentUpdate.getMonth()] + ',';
    document.getElementById("year").innerHTML = year;
}

document.querySelector("#start_btn").addEventListener("click", () => {
    stop = setInterval(updateTime);
});

document.querySelector("#stop_btn").addEventListener("click", () => {
    clearInterval(stop);
});


