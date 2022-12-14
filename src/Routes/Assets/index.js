import Svg, { Circle, Rect, Path } from 'react-native-svg'

function HomeIcon({ color }) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10.7071 2.29289C10.3166 1.90237 9.68342 1.90237 9.29289 2.29289L2.29289 9.29289C1.90237 9.68342 1.90237 10.3166 2.29289 10.7071C2.68342 11.0976 3.31658 11.0976 3.70711 10.7071L4 10.4142V17C4 17.5523 4.44772 18 5 18H7C7.55228 18 8 17.5523 8 17V15C8 14.4477 8.44772 14 9 14H11C11.5523 14 12 14.4477 12 15V17C12 17.5523 12.4477 18 13 18H15C15.5523 18 16 17.5523 16 17V10.4142L16.2929 10.7071C16.6834 11.0976 17.3166 11.0976 17.7071 10.7071C18.0976 10.3166 18.0976 9.68342 17.7071 9.29289L10.7071 2.29289Z"
        fill={color ? color : '#BCC3CD'}
      />
    </Svg>
  )
}

function AddWorkoutIcon({ color }) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 3C10.5523 3 11 3.44772 11 4V9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11H4C3.44772 11 3 10.5523 3 10C3 9.44771 3.44772 9 4 9L9 9V4C9 3.44772 9.44772 3 10 3Z"
        fill={color ? color : '#BCC3CD'}
      />
    </Svg>
  )
}

function StatusIcon({ color }) {
  return (
    <Svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.757 2.034a1 1 0 0 1 .638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.981 6.981 0 0 1 17 11 7 7 0 1 1 5.05 6.05a1 1 0 0 1 1.707.707c0 1.12.07 1.973.398 2.654.18.374.46.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.477-.65.822-.88a1 1 0 0 1 .812-.134Zm.364 13.087A3 3 0 0 1 7 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0 1 13 13a2.99 2.99 0 0 1-.879 2.121Z"
        fill={color ? color : '#BCC3CD'}
      />
    </Svg>
  )
}

module.exports = { HomeIcon, AddWorkoutIcon, StatusIcon }
