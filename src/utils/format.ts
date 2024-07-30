export const numberToTime = (number: number) => {
    const minutes = Math.floor(number / 60);
    const seconds = Math.floor(number % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export const clearString = (string: string) => { 
    // lowercase the string
    // remove vietnamese accent
    return string.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

}
export const temperatureKtoC = (K:number) => {
    return Math.floor(K - 273.15);
}