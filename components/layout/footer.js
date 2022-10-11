import Image from 'next/image'
import styled from 'styled-components'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Social = styled.div`
    background: #fbfbfb;
`
const Footer = styled.footer`
    
`;

const IconFacebook = styled(FaFacebook)`
    font-size: 2rem;
    color: #3b5998;
`

const LinkFacebook = styled.a`
    color: #3b5998;
    text-decoration: none;

     &:hover {
        color: #3b5998;
    }
`

const IconYoutube = styled(FaYoutube)`
    font-size: 2rem;
    color: #c4302b;

   
`

const LinkYoutube = styled.a`
    color: #c4302b;
    text-decoration: none;

     &:hover {
        color: #c4302b;
    }
`

const IconInstagram = styled(FaInstagram)`
    font-size: 2rem;
    color: #fff;
    border-radius: 5px;
    background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
`

const Link = styled.a`
    color: #14C38E;
    text-decoration: none;
`

const LinkInstagram = styled.a`
    text-decoration: none;
    background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Copyright = styled.p`
    color: #00000054;
    font-size: .9rem;
    font-weight: 300;
`

const footer = () => {
    return (
        <Footer>
            <Social className="pb-5">
                <div className="container px-5">
                    <div className="row">
                        <div className='col-12 col-md-4'>
                            <div className="card border-0 bg-transparent d-flex flex-row align-items-center">
                                <IconFacebook className="d-flex align-content-center" />
                                <div className="card-body">
                                    <h5 className="card-title m-0">Facebook</h5>
                                    <LinkFacebook href='https://www.facebook.com/pibemgoianinha' className="card-text">@pibemgoianinha</LinkFacebook>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-md-4'>
                            <div className="card border-0 bg-transparent d-flex flex-row align-items-center">
                                <IconInstagram className="d-flex align-content-center" />
                                <div className="card-body">
                                    <h5 className="card-title m-0">Instagram</h5>
                                    <LinkInstagram href='https://www.instagram.com/pibemgoianinha/' className="card-text">@pibemgoianinha</LinkInstagram>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-md-4'>
                            <div className="card border-0 bg-transparent d-flex flex-row align-items-center">
                                <IconYoutube className="d-flex align-content-center" />
                                <div className="card-body">
                                    <h5 className="card-title m-0">YouTube</h5>
                                    <LinkYoutube href='https://www.youtube.com/c/PIBemGoianinha' className="card-text">@pibemgoianinha</LinkYoutube>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Social>
            <div className="container py-4">
                <Copyright className="text-center text-md-end">2022 - Todos os direitos reservados</Copyright>
            </div>
        </Footer>
    )
}

export default footer;