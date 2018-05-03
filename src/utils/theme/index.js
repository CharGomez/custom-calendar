const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    navy: '#394652',
    gray: '#7D8892',
    green: '#60A713',
    yellow: '#F0DC60',
    transparent: 'rgba(0, 0, 0, 0)',
    dayColor: weekDay => weekDay ? '#60A713' : '#F0DC60',
    shadow: opacity => `rgba(255,255,255,0.${opacity})`,
  },
}

export { theme }
