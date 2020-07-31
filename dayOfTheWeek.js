const dayOfTheWeek = function (day, month, year) {
    const mapDay = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    }
    let date = new Date(`${year}/${month}/${day}`)
    return mapDay[date.getDay()]
};

dayOfTheWeek(31, 8, 2019)