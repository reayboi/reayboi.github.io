//Graciously borrowed from https://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number
export const ordinal_suffix_of = (i: number): string => {
    let j = i % 10,
        k = i % 100;
    if (j === 1 && k !== 11) {
        return i + "st";
    }
    if (j === 2 && k !== 12) {
        return i + "nd";
    }
    if (j === 3 && k !== 13) {
        return i + "rd";
    }
    return i + "th";
}

export const getDayOfWeek = (date: Date): string => {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // Sunday - Saturday : 0 - 6
    const day = date.getDay();
    return dayNames[day];
}

export const getMonth = (date: Date): string => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // Jan - Dev : 0 - 11
    const day = date.getMonth();
    return monthNames[day];
}

export const getDay = (date: Date): string => {
    const day = date.getDate();
    const formattedDay = ordinal_suffix_of(day);
    return formattedDay;
}

//With thanks to https://stackoverflow.com/questions/14638018/current-time-formatting-with-javascript
export const getTime= (date: Date): string => {
    return date.toLocaleTimeString();
}