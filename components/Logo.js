import Image from "next/image";
import IndoorLogo from '../public/images/letterLogo.png'
import Link from "next/link";
import styled from "styled-components";


const LogoLink = styled(Link)`
    position: relative;
    z-index: 3;
`

export default function Logo(){
    return(
        <LogoLink href={'/'}>
            <Image 
                src={IndoorLogo}
                alt="Indoor and Beyond Logo"
            />
        </LogoLink>
    )
}