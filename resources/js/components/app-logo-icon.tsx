import { ImgHTMLAttributes } from 'react';
import logo from '../img/logo.png';

export default function AppLogoIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
    return <img {...props} src={logo} alt={props.alt ?? 'App logo'} />;
}
