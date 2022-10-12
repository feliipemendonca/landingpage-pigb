/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable react/jsx-no-comment-textnodes */
import Head from 'next/head'
import Navbar from './navbar';
import Footer from './footer';
import GlobalStyled from '../globalStyled';
import Favicon from '../../public/images/favicon.png'

const Text = 'Suponha que você estivesse diante de Deus, neste momento, e Ele lhe perguntasse: "Por que deveria deixá-lo entrar no céu, minha morada?". O que você diria? Vamos ver como você pode ter certeza de possuir a vida eterna, de acordo com a Biblia.';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="theme-color" content="#14C38E" />
                <meta name="robots" content="index,follow,noodp" /> 
                <meta name="googlebot" content="index,follow" /> 
                <meta name="keywords" content="Criação de sites, " /> 
                <meta name="description" content={Text} /> 
                <meta name="subjet" content={Text} /> 
                <meta name="abstract" content={Text} /> 
                <meta name="topic" content={Text} /> 
                <meta name="summary" content={Text} /> 
                <meta property="og:description" content={Text} /> 
                <meta itemprop="description" content={Text} /> 
                <meta name="twitter:description" content={Text} /> 
                <meta property="og:url" content="hhttps://landingpage-pigb.vercel.app/" /> 
                <meta property="og:type" content="website" /> 
                <meta property="og:title" content="Primeira Igreja Batista em Goianinha" /> 
                <meta property="og:image" content={Favicon} /> 
                <meta property="og:site_name" content="Primeira Igreja Batista em Goianinha" /> 
                <meta property="og:locale" content="pt_BR" /> 
                <meta itemprop="name" content="Primeira Igreja Batista em Goianinha" /> 
                <meta itemprop="image" content={Favicon} /> 
                <meta name="twitter:card" content="summary" /> 
                <meta name="twitter:site" content="https://landingpage-pigb.vercel.app/" /> 
                <meta name="twitter:url" content="https://landingpage-pigb.vercel.app/" /> 
                <meta name="twitter:title" content="Primeira Igreja Batista em Goianinha" /> 
                <meta name="twitter:image" content={Favicon} />

                <title>Primeira Igreja Batista em Goianinha</title> 

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                
            </Head>
            <GlobalStyled />
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
