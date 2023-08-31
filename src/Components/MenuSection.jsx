import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function MenuSection({items, section, onClick, selectedIdx}) {

    return (
        <Container className="MenuSection" id={section} style={{marginTop: '30px', marginBottom: '30px'}}>
            <Row>
                <Col>
                    <h3 style={{textAlign: 'left', marginBottom: '30px'}}>{section}</h3>                
                </Col>
            </Row>
            <Row>
                {items && items.map((item, idx) => {
                    return (
                        <Col 
                            lg="3"
                            className="item" 
                            id={idx} 
                            onClick={() => onClick(idx)}
                        >
                            <Card 
                                bg={idx === selectedIdx ? 'success' : 'dark'}
                                text='light'
                                style={{height: '150px', margin:' 0 15px 30px'}}
                            >
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.price}</Card.Text>                                     
                                </Card.Body>
                               
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
  }
  
  export default MenuSection;