type DateSplit = {
	day: string
	month: string
	year: string
	hour?: string
	minute?: string
}

type DateFormat = 'yyyy-MM-dd'
type DateTimeFormat = 'yyyy-MM-ddThh:mm'
type DFormat = DateFormat | DateTimeFormat

const dateFormat: DateFormat = 'yyyy-MM-dd'
const dateTimeFormat: DateTimeFormat = 'yyyy-MM-ddThh:mm'

const defaultDate: DateSplit = {
	day: '01',
	month: '01',
	year: '2022',
	hour: '00',
	minute: '00',
}

const dateRegex = {
	'yyyy-mm-dd': /^(?<year>\d{4})\W{1}(?<month>\d{2})\W{1}(?<day>\d{2})$/m,
	'dd-mm-yyyy': /^(?<day>\d{2})\W{1}(?<month>\d{2})\W{1}(?<year>\d{4})$/m,
	'yyyy-mm-dd-hh:mm': /^(?<year>\d{4})\W{1}(?<month>\d{2})\W{1}(?<day>\d{2})\W{1}(?<hour>\d{2})\W{1}(?<minute>\d{2})$/m,
}

const testDateMatch = (date: string) => {
	if (!date || date.length < 8) return null
	const match =
		date.match(dateRegex['yyyy-mm-dd']) ?? date.match(dateRegex['dd-mm-yyyy']) ?? date.match(dateRegex['yyyy-mm-dd-hh:mm'])
	return match && match.groups ? match.groups : null
}

const testIfDateString = (date: string): DateSplit => {
	const groups = testDateMatch(date)
	if (!groups) return defaultDate

	const day = groups['day'],
		month = groups['month'],
		year = groups['year'],
		hour = groups['hour'],
		minute = groups['minute']
	return {day, month, year, hour, minute}
}

const getDateFromString = (date: string): Date => {
	const {day, month, year, hour, minute} = testIfDateString(date)
	return new Date(`${year}-${month}-${day}T${hour ?? '00'}:${minute ?? '00'}`)
}

const into2Digits = (num: number): string => {
	return num < 10 ? `0${num}` : `${num}`
}

const getDateShort = (d: Date): DateFormat => {
	const year = d.getFullYear(),
		month = into2Digits(d.getMonth() + 1),
		day = into2Digits(d.getDate())
	return `${year}-${month}-${day}` as DateFormat
}

const getDateLong = (d: Date): DateTimeFormat => {
	const year = d.getFullYear(),
		month = into2Digits(d.getMonth() + 1),
		day = into2Digits(d.getDate()),
		hours = into2Digits(d.getHours()),
		minutes = into2Digits(d.getMinutes())
	return `${year}-${month}-${day}T${hours}:${minutes}` as DateTimeFormat
}

const getFormatDateString = (date: string, format: DFormat): DFormat => {
	const _d = getDateFromString(date)
	return format === dateFormat ? getDateShort(_d) : getDateLong(_d)
}

export {getDateFromString, getFormatDateString, dateFormat, dateTimeFormat}
