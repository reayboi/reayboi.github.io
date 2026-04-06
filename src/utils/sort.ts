export const sortByDateAscending = (array: Array<any>) => {
    return array.sort(function(a, b) {
        return Date.parse(b.date) - Date.parse(a.date);
    });
}

export const sortByDateDescending = (array: Array<any>) => {
    return array.sort(function(a, b) {
        return Date.parse(a.date) - Date.parse(b.date);
    });
}
