const LOCALE = 'en-US';
const DATE_FORMAT_OPTION: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
}

export default function convertToFormattedDateString(dateString: string | undefined | null) {
    const dateFormat = new Intl.DateTimeFormat(LOCALE, DATE_FORMAT_OPTION);

    if (!dateString) {
        console.log("Date is null or undefined");

        return dateFormat.format(new Date());
    }

    const date = Date.parse(dateString);

    return dateFormat.format(date);
}
