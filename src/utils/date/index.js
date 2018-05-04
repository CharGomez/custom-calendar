import moment from 'moment'

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

  isWeekend: day => moment(day).format('d') === '0' || moment(day).format('d') === '6',
}

export { date }
