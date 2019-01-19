'use strict';
const moment = require('moment');

const findCertainDates = (date) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const monthArrLength = months.length - 1;
    const endOfCurrentMonth = moment().endOf('month');
    const currentWeekDay = moment(moment().isoWeekday(date)).format('YYYY-MM-DD');
    const beginEndDiff = endOfCurrentMonth.diff(currentWeekDay, 'days');
    let result = [];
    let currentMonthIdx = moment().month();
    let weeksLeft = Math.floor(beginEndDiff / 7);
    let newDate = currentWeekDay;
    
    result.push(currentWeekDay);

    while (beginEndDiff > 7 && weeksLeft > 0) {
        newDate = moment(newDate).add(7, 'days');
        result.push(newDate.format('YYYY-MM-DD'));
        weeksLeft--;
    }

    while (currentMonthIdx <= monthArrLength) {
        result = result.concat(findCertainDateInMonths(date, (currentMonthIdx + 2)));
        currentMonthIdx++;
    }

    return result;
}

const findCertainDateInMonths= (weekDay, nextMonthIdx) => {

    const result = [];
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const beginOfMonth = moment([moment().year(), nextMonthIdx], 'YYYY-MM-DD');
    const endOfMonth = moment(beginOfMonth).endOf('month');
    let isTheRightWeekDay = false;
    let theRightWeekDay = '';
    let newDate = beginOfMonth;

    while (moment(endOfMonth).isAfter(newDate) && isTheRightWeekDay === false) {
        if (weekDays[moment(newDate).day()] === weekDay) {
            isTheRightWeekDay = true;
            theRightWeekDay = newDate;
            result.push(newDate.format('YYYY-MM-DD'));
        } else {
            newDate = moment(newDate).add(1, 'days');
        }
    }

    const restDays = endOfMonth.diff(newDate, 'days');
    let weeksLeft = Math.floor(restDays / 7);

    while (restDays > 7 && weeksLeft > 0) {
        theRightWeekDay = moment(theRightWeekDay).add(7, 'days');
        result.push(theRightWeekDay.format('YYYY-MM-DD'));
        weeksLeft--;
    }

    return result;
}

module.exports = findCertainDates;
// module.exports = {
//     findCertainDates
// }