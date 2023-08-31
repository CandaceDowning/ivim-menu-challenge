import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Footer({info}) {

    return (
        <div className="Footer" style ={{borderTop: '2px solid green'}}>
            <Container >
                <Row style={{marginTop: '30px'}}>
                    <Col className='d-flex flex-column justify-content-start'>
                        <img src={info.logo} alt="" style={{width: '150px', marginBottom: '30px'}}/>
                        <Button variant="success">
                            <a href={`tel: ${info.phone}`} style={{color: '#ffffff'}}>Call Now</a>
                        </Button>
                    </Col>
                    <Col>
                        <h2>{info.name}</h2>
                        <p>{info.address1}</p>
                        <p>{info.address2}</p>
                        <p>{info.city}, {info.state} {info.zip}</p>
                    </Col>
                </Row>
            </Container>        
        </div>
    );
  }
  
  export default Footer;