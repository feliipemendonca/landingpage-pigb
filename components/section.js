/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import styled from 'styled-components'
import image from '../public/images/slide.jpg'


const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.813rem;

    @media(max-width: 992px) {
        font-size: 1.8rem;
    }
`;

const Subtitle = styled.span`
    background: #14C38E;
    color: #fff;
    border-radius: 5px;
`;

const Text = styled.p`
    font-size: 1rem;
    font-weight: 400;
    line-height: 150%;
`;

// const Image = styled.img`
//     height: 20rem;
//     object-fit: cover;
// `

const PreTitle = styled.p`
    font-size: 1rem;
    font-weight: 300;
    line-height: 1rem;
    text-transform: uppercase;
    margin: 0;
`;

export default function section () {
    return(
        <>            
            <section className='container pt-5'>
                <div className="row py-lg-5">
                    <div className="col-12">
                        <Title className="text-center">
                            Se você morresse hoje, <br/>tem certeza de que iria para o <Subtitle className='px-3'>céu?</Subtitle>
                        </Title>
                    </div>
                    <div className="col-12 col-md-12 text-center px-lg-5">
                        <Text className="pt-3 px-lg-5"> 
                            Suponha que você estivesse diante de Deus, neste momento, e Ele lhe perguntasse: "Por que deveria deixá-lo entrar no céu, minha morada?". O que você diria? Vamos ver como você pode ter certeza de possuir a vida eterna, de acordo com a Biblia.
                        </Text>
                    </div>
                </div>
            </section>
            {/* 1 */}
            <section className="container py-5">
                <div className="row">
                    <div className="col-12 col-md-6 order-2 order-lg-1">
                        <Image
                            src={image}
                            alt="Picture of the author"
                            className="img-fluid rounded w-100"
                        />                        
                    </div>
                    <div className="col-12 col-lg-6 order-1 order-lg-2">
                        <PreTitle>
                            1° João 5.13
                        </PreTitle>
                        <Title className="text-start">
                        Estas coisas vos escrevo, a vos que credes no nome do <Subtitle className='px-3'>Filho</Subtitle> de Deus, para que saibais que tendes a vida eterna".
                        </Title>
                        
                        <Title></Title>

                        <Text className="pt-3"> 
                            Este versículo mostra que o Senhor Deus quer dar a você a certeza da vida eterna, e isso porque o ama muito. A vida eterna é Conhecer Jesus Cristo e ter Sua paz em seu coração agora mesmo (João 17.3) e viver com Jesus Cristo no céu, por toda a eternidade, depois que você morrer (João 14.1-3). De acordo com a Biblia, hoje mesmo você pode ter certeza da vida eterna.
                        </Text>
                    </div>
                    
                </div>
            </section>
            {/* 2 */}
            <section className='container py-5'>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <PreTitle>Romanos 3.23</PreTitle>
                        <Title className="text-start">
                           "Porque todos <Subtitle className='px-2'>pecaram</Subtitle> e destituidos estão da glória de Deus".
                        </Title>
                        
                        <Text className="pt-3">
                            O pecado é desobediência a Deus. Sendo assim somos todos pecadores. Por exemplo, todos nós já sentimos ira, inveja, cobiça, mentimos, fomos egoistas, orgulhosos etc. Você reconhece que já cometeu pecados?
                        </Text>
                    </div>
                    <div className="col-12 col-md-6">
                        <Image
                            src={image}
                            alt="Picture of the author"
                            className="img-fluid rounded w-100"
                        />
                    </div>
                    <div className="col-12">
                        <Text className='pt-4 pt-lg-0'>
                            <strong>Em Romanos 6.23, a Biblia diz: "Porque o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna por Cristo Jesus, nosso Senhor".</strong>
                        </Text>
                        <Text>
                           A primeira parte deste versículo mostra que todos merecemos a morte e o inferno por causa do pecado. Morte significa a separação de Deus, no tempo presente e/ou no futuro. No presente, a morte é estar separado de Deus agora, nesta vida. É uma vida sem esperança, sem paz e certeza da vida eterna, isto é, uma vida sem Jesus no coração. Isso resulta em um coração vazio e inseguro. No futuro, a morte é a eterna separação de Deus, no inferno, isto é, uma vida sem Cristo durante toda a eternidade.
                        </Text>
                        <Text>
                            De acordo com a parte final do versiculo, apesar de merecermos a morte por causa do pecado em nossa vida, o dom gratuito de Deus é a vida etema. 
                        </Text>
                    </div>
                </div>
            </section>

            {/* 3 */}
            <section className='container py-5'>
                <div className="row">
                    {/* <div className="col-12 col-md-6">
                        <img src="/images/slide.jpg" className="img-fluid rounded" alt="teste" />
                    </div> */}
                    <div className="col-12 col-md-12">
                        <PreTitle>
                            Romanos 5.8
                        </PreTitle>
                        <Title className="text-start">
                        Deus da prova do seu <Subtitle className='px-3'>amor</Subtitle> para conosco, em que, quando éramos ainda pecadores, Cristo morreu por nós".
                        </Title>
                        <Text className="pt-3"> 
                            Deus nos ama tanto que entregou Jesus Cristo, seu único Filho. para ser castigado, julgado e condenado à morte de cruz para pagar o preço do pecado em nosso lugar, mesmo sem nunca ter pecado. A morte de Jesus foi o único sacrificio suficiente para livrar o homem da culpa do pecado.
                        </Text>
                        <Text> 
                            Muita gente está se apegando a qualquer coisa para chegar a Deus: moralidade, boas obras, cultos, missas e rezas a santos. Esses esforços não têm nenhum poder para purificar o homem de seus pecados e aproximá-lo de Deus. O único meio de chegar a Deus é através de Jesus Cristo. 1 Timóteo 2.5 diz: "Porque há um só Deus, e um só Mediador entre Deus e os homens, Cristo Jesus, homem".
                        </Text>
                        <Text> 
                            Depois de Jesus Cristo ter morrido na cruz por nossos pecados, Ele venceu a morte, ressuscitando. Você crê que Jesus Cristo é o seu único Senhor, Salvador e Mediador?
                        </Text>
                    </div>
                    
                </div>
            </section>

            {/* 4 */}
            <section className='container py-5'>
                <div className="row">
                    <div className="col-12 col-md-6">
                         <PreTitle>
                            Romanos 10.1
                        </PreTitle>
                        <Title className="text-start">
                        "Porque, se com a tua boca confessares a <Subtitle className="px-3">Jesus</Subtitle> como Senhor, e em teu coração creres que Deus o ressuscitou dentre os mortos, serás salvo;"
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 d-flex align-items-center">
                         <Text className="pt-3"> 
                            Para receber Jesus, você precisa confessar que Ele é o seu único Senhor. Você precisa arrepender-se dos seus pecados, abandoná-los, dar meia-volta na sua vida e caminhar em direção a Jesus, colocando sua fé nele como seu único Senhor, Salvador e Mediador.
                        </Text>
                    </div>
                    <div className="col-12 col-md-12 pt-5">
                        <PreTitle>
                            Romanos 10.10
                        </PreTitle>
                        <Title>
                            "Pois é com o coração que se crê para a justiça, e com a boca se faz confissão para a <Subtitle className="px-3">salvação</Subtitle>".
                        </Title>                        
                        <Text>
                            Isso significa que você precisa deixar de confiar em outras coisas como moralidade, boas obras, cultos, missas, rezas a santos e reencarnação e confiar somente em Jesus Cristo, como seu único Salvador. Você está pronto para deixar de confiar em outras coisas e entregar sua vida a Cristo agora?
                        </Text>
                        <Text>
                            A Biblia diz, em Romanos 10.13: <strong>"Porque todo aquele que invocar o nome do Senhor será salvo". Isso quer dizer que você pode aceitar a Jesus agora mesmo em seu coração, pela fé.</strong>
                        </Text>
                        <Text className="text-center fs-5 fw-bold pt-5">
                            Você está pronto a entregar-se a Jesus e pedir-lhe que entre em sua vida agora mesmo? Então faça esta oração, de todo o seu coração:
                        </Text>
                        <Text className='text-center fs-3 fw-bold pt-'>
                            "Senhor, sou um pecador. Confio em ti como meu único Senhor, Salvador e Mediador. Entrego a minha vida a ti. Entra em meu coração e <Subtitle className="px-3">salva-me</Subtitle> agora. Transforma e dirige a minha vida. Amém".
                        </Text>
                    </div>
                </div>
            </section>
        </>
    )
}