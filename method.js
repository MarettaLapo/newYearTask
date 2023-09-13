function countDays(inputDate){
    let newYear = new Date((inputDate.getFullYear()+1), 0, 1, 0, 0, 0, 0)
    return Math.ceil((newYear - inputDate) / (1000 * 3600 * 24))
}

export {countDays}