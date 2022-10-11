import Image from 'next/image'

const Slides = _=> {
    for (let index = 0; index < 5; index++) {
        return (
            <div className={index == 0 ? 'carousel-item active' : 'carousel-item'}>
                <Image 
                    src="/images/slide.jpg" 
                    className="d-block w-100" 
                    alt="Picture of the author"
                    width={1200}
                    height={500}
                    layout="responsive" />
            </div>
        )
    }
}

const Dots = _ => {
    for (let index = 0; index < 2; index++) {
        return (
            <button type="button" data-bs-target="#carouselExampleIndicators" 
                data-bs-slide-to={index} className={index == 0 ? 'active' : ''}
                aria-current={index == 0 ? 'true' : ''}
                aria-label={'slide ' + index}></button>
        )
    }
}

const carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <Dots />
            </div>
            <div className="carousel-inner">
                <Slides />
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default carousel;