import * as React from 'react'
import { IconProps } from '../Icon';
import Icon from '../Icon'
// import src from '../../../images/ArrowDown.svg'

const ArrowDownIcon: React.FC<IconProps> = ({className, color, width, height, onClick}) => {
    let colorResult: string = ''
    if (color === 'primary') {
        colorResult = "#000"
    } else if (color === 'secondary') {
        colorResult = "#AFADB5"
    } else if (color = "accent") {
        colorResult = "#518581"
    }
    let classes: string = `icon_wrapper arrow_down_icon ${className}`
    return <Icon onClick={onClick} color={color} width={width ? width : 24} height={height ? height: 24} className = {classes}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.33563 8.74741L3.66436 7.25259L12 14.662L20.3356 7.25259L21.6644 8.74741L12 17.338L2.33563 8.74741Z" fill={colorResult}/>
    </Icon>
}
export default ArrowDownIcon;