export const numberToTime = (number: number) => {
    const minutes = Math.floor(number / 60);
    const seconds = Math.floor(number % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}