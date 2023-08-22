setInterval(() => {
    let hour = parseInt(document.getElementById("hour").innerHTML);
    let minus = parseInt(document.getElementById("minus").innerHTML);
    let second = parseInt(document.getElementById("second").innerHTML);

    if (second < 60) {
        second += 1;
    }

    if (minus < 60 && second == 60) {
        minus += 1;
    }

    if (hour < 24 && minus == 60) {
        hour += 1;
    }

    if (second == 60) second = 0;
    if (minus == 60) minus = 0;
    if (hour == 24) hour = 0;

    document.getElementById("hour").innerHTML = hour < 10 ? '0' + hour : hour;
    document.getElementById("minus").innerHTML = minus < 10 ? '0' + minus : minus;
    document.getElementById("second").innerHTML = second < 10 ? '0' + second : second;
}, 1000);