import { oneOf } from 'prop-types'
import { theme } from 'utils/theme'

const colorType = oneOf(Object.keys(theme.colors))

export { colorType }
