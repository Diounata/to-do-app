const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

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

interface DateProps {
    day: number;
    weekday: string;
    month: string;
    year: number;
}

export default function currentDate(): DateProps {
    const createDate = new Date();

    const date = {
        day: createDate.getDate(),
        weekday: weekdays[createDate.getDay()],
        month: months[createDate.getMonth()],
        year: createDate.getFullYear(),
    };

    return date;
}
