// import Image from 'next/image'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.813rem;
    backdrop-filter: blur(1px);

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
    backdrop-filter: blur(1px);
`;

const Image = styled.img`
    height: 20rem;
    object-fit: cover;
`

export default function section () {
    return(
        <>            
            <section className='container pt-5 pb-3'>
                <div className="row py-5">
                    <div className="col-12 col-md-6">
                        <Title className="text-start">
                            Lorem <Subtitle className='px-3'>Ipsum is</Subtitle>
                        </Title>
                        <Title>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </Title>

                        <Text className="pt-3"> 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </Text>

                    </div>
                    <div className="col-12 col-md-6">
                        <img src="/images/slide.jpg" className="img-fluid rounded" alt="teste" />
                    </div>
                </div>
            </section>
        </>
    )
}