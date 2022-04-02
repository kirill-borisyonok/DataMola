function createCalendar(elem, year, month) {
    let elemContainer = document.getElementById(elem);
    let monthCreate = month - 1;
    let date = new Date(year, monthCreate);
    
    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    let getGoodWeek = (date) => {
        let day = date.getDay();
        if (day == 0) day = 7;
        return day - 1;
    }

    for (let i = 0; i < getGoodWeek(date); i++) {
        table += '<td></td>';
    }

    while (date.getMonth() == monthCreate) {
        table += `<td>${date.getDate()}</td>`;

        if (getGoodWeek(date) == 6) {
            table += '</tr><tr>';
        }

        date.setDate(date.getDate() + 1);
    }

    if (getGoodWeek(date) != 0) {
        for (let i = getGoodWeek(date); i < 7; i++) {
            table += '<td></td>';
        }
    }

    table += '</tr></table>';

    elemContainer.innerHTML = table;
}

createCalendar('calendar', 2022, 3);