export const hourStringToMinutesInt = (hourString: string) =>{
    const [hour, minutes] = hourString.split(':').map(Number)

    const minutesAmount = (hour * 60) + minutes

    return minutesAmount
}

export const minuteIntToHourString = (minuteAmount: number) =>{
    const hours = Math.floor(minuteAmount / 60)

    const minutes = minuteAmount % 60

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")} `
}