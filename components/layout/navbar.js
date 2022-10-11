import React, { Component} from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'

const Header = styled.nav`
    z-index: 1;
    background: #14C38E;
`;

class Navbar extends Component {

    constructor() {
        super();
        this.state = {
            className: 'teste'
        }
    }

    // handleScroll() { 
    //     if (document.documentElement.scrollTop > 80) {
    //         this.setState({
    //             className: 'position-relative'
    //         })
    //     } else {
    //         this.setState({
    //             className: 'position-fixed'
    //         })
    //     }
    // }
    
    // componentDidMount() {
    //     window.onscroll = () => this.handleScroll()
    // }

    render() {
        return (
            <Header >
                <div className={`navbar navbar-expand-lg w-100`}>
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <Image
                            src={Logo}
                            alt="Picture of the author"
                            width={80}
                            height={50}
                        />
                    </a>
                    <button className="navbar-toggler" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white" href="#">Home</a>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
            </Header>
        )
    }
}

export default Navbar;