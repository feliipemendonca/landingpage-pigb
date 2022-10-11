import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import  { useState } from 'react';

const PreTitle = styled.p`
    font-size: 1rem;
    font-weight: 300;
    line-height: 1rem;
    text-transform: uppercase;
    margin: 0;
`;

const TitleGreen = styled.span`
    color: #14C38E;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.813rem;
    backdrop-filter: blur(1px);
`;

const Main  = styled.div`
    background: #fbfbfb;
`

const ButtonSubmit = styled.button`
    height: 2.875rem;
    border: 1px solid #fff;
    color: #fff;
    background-color: #14C38E;

    &:hover {
        background: #E3FCBF;
        color: #14C38E;

    }
`;

const Input = styled.input`
    background: none;
    border: none;
    border-bottom: 2px solid #000;
    border-radius: 0;
    color: #000;

    &:focus {
        background: none;
        outline: none;
        box-shadow: none;
        border-color: #000;
    }
`

const Label = styled.label`
    color #000;
`
function OpenModal() {
    const [show, setShow] = useState(0);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button type="button" className="bg border-0 bg-transparent p-0 text-start" onClick={handleShow}>
                Concordo em receber contato via Whatsapp
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



export default function section () {
     // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            first: event.target.first.value,
            last: event.target.last.value,
        }

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)

        // API endpoint where we send form data.
        const endpoint = '/api/form'

        // Form the request for sending data to the server.
        const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
            'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
        }

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        alert(`Is this your full name: ${result.data}`)
    }

    return(
        <Main className="pt-5 pb-5">
            <section className="container py-4">
                <PreTitle className="text-center">
                    Lorem Ipsum
                </PreTitle>

                <Title className="text-center"> 
                    Lorem <TitleGreen>Ipsum</TitleGreen>
                </Title>
                <form onSubmit={handleSubmit} className="px-5 py-4">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="form-floating mb-3">
                                <Input type="email" className="form-control" id="floatingInput"   placeholderTextColor = 'red' placeholder="name@example.com" required />
                                <Label htmlFor="name">Nome e Sobrenome</Label>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-floating mb-3">
                                <Input type="tel" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                                <Label htmlFor="whatsapp">Whatsapp</Label>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-12 col-md-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <OpenModal />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center pt-4 pt-md-0 justify-content-md-end align-content-center">
                            <ButtonSubmit type="submit" className="btn px-5">Enviar</ButtonSubmit>
                        </div>
                    </div>
                </form>
            </section>
        </Main>
    )
}