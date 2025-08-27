import { useState } from "react";

export const CurrentDate = () => {
    const [date, setDate] = useState(new Date());
    setTimeout(() => {
        setDate(new Date());
    }, 10000);

    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const currentDate = {
        day: date.getDate(),
        month: months[date.getMonth()],
        year: date.getFullYear(),
        hours: date.getHours(),
        minutes: date.getMinutes()
    }

    const padZero = (num) => num < 10 ? `0${num}` : num;

    return (
        <p className="text-white font-normal text-lg">
            {`${padZero(currentDate.day)} de ${currentDate.month} de ${currentDate.year}, ${padZero(currentDate.hours)}:${padZero(currentDate.minutes)}`}
        </p>
    )
}
