import moment from 'moment'
import axios from 'axios'

import { constants } from '../constants'

const date = {
  getMonths_Days: (startDate, numberOfDays) => {
    const start = moment(startDate, 'MM/DD/YYYY', true).format()
    const lastDate = moment(start).add(numberOfDays, 'day').format()
    const daysRange = []
    const timeValues = []
    let currentDate = start
    while (lastDate > currentDate || moment(currentDate).format('M') === moment(lastDate).format('M')) {
      timeValues.push(moment(currentDate).format('YYYY-MM'))
      currentDate = moment(currentDate).add(1, 'month').format()
    }
    currentDate = start
    while (currentDate <= lastDate) {
      daysRange.push(currentDate)
      currentDate = moment(currentDate).add(1, 'day').format()
    }
    return { months: timeValues, days: daysRange }
  },

  getDays: (startDate, lastDate) => {
    const daysRange = []
    let currentDate = startDate
    while (currentDate < lastDate) {
      daysRange.push(currentDate)
      currentDate = moment(currentDate).add(1, 'day').format()
    }
    return daysRange
  },

  getPostDays: (startDate, lastDate) => {
    const daysRange = []
    const sameDay = moment(lastDate).format('MM/DD/YYYY') === moment(startDate).format('MM/DD/YYYY')
    let currentDate = startDate
    if (!sameDay) {
      currentDate = moment(currentDate).add(1, 'day').format()
    }
    while (!sameDay && currentDate < lastDate) {
      daysRange.push(currentDate)
      currentDate = moment(currentDate).add(1, 'day').format()
    }
    return daysRange
  },

  getDate: day => moment(day).format('DD'),

  isWeekend: day => moment(day).format('d') === '0' || moment(day).format('d') === '6',

  getMonthlyHolidays: async (country, year, month) => {
    const api = `https://holidayapi.com/v1/holidays?key=${constants.holidayKey}&country=${country}&year=${year}&month=${month}`
    try {
      const { data: { holidays } } = await axios.get(api)
      return holidays
    } catch (e) {
      return []
    }
  },

  checkHoliday: (holidays, date) => {
    const holidayFound = holidays.filter(day => {
      const current = moment(new Date(`${day.date}T00:00:00-06:00`)).format('MM/DD/YYYY')
      return moment(current, 'MM/DD/YYYY', true).format() === date
    })
    return holidayFound.length > 0
  },
}

export { date }
