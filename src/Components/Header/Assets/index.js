import Svg, { Circle, Rect, Path } from 'react-native-svg'

function LogoIcon() {
  return (
    <Svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.15341 23L10.0852 11.3636H18.0284L17.642 13.6477H12.5114L12.125 16.0341H16.75L16.3636 18.3239H11.7386L10.9659 23H8.15341ZM17.5128 23L19.4446 11.3636H24.2514C25.1226 11.3636 25.8499 11.5208 26.4332 11.8352C27.0166 12.1458 27.4313 12.5928 27.6776 13.1761C27.9238 13.7557 27.9806 14.4432 27.848 15.2386C27.7192 16.0417 27.4313 16.7254 26.9844 17.2898C26.5412 17.8504 25.9692 18.2784 25.2685 18.5739C24.5715 18.8693 23.7798 19.017 22.8935 19.017H19.8537L20.2287 16.8011H22.7457C23.1662 16.8011 23.5298 16.7462 23.8366 16.6364C24.1435 16.5227 24.3878 16.3523 24.5696 16.125C24.7552 15.8939 24.8783 15.5985 24.9389 15.2386C24.9957 14.8788 24.9692 14.5814 24.8594 14.3466C24.7533 14.108 24.5658 13.9299 24.2969 13.8125C24.0317 13.6913 23.6908 13.6307 23.2741 13.6307H21.8878L20.3253 23H17.5128ZM24.9446 17.6818L26.9616 23H23.8935L21.9389 17.6818H24.9446Z"
        fill="white"
      />
      <Circle cx="18" cy="18" r="17" stroke="white" stroke-width="2" />
      <Circle cx="28.2" cy="5.53333" r="3.4" fill="white" />
    </Svg>
  )
}

function BellIcon() {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10 2C6.68632 2 4.00003 4.68629 4.00003 8V11.5858L3.29292 12.2929C3.00692 12.5789 2.92137 13.009 3.07615 13.3827C3.23093 13.7564 3.59557 14 4.00003 14H16C16.4045 14 16.7691 13.7564 16.9239 13.3827C17.0787 13.009 16.9931 12.5789 16.7071 12.2929L16 11.5858V8C16 4.68629 13.3137 2 10 2Z"
        fill="white"
      />
      <Path d="M10 18C8.34315 18 7 16.6569 7 15H13C13 16.6569 11.6569 18 10 18Z" fill="white" />
    </Svg>
  )
}

module.exports = { LogoIcon, BellIcon }
