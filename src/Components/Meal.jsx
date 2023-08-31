import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Cart({apps, ents, dess, selectedAppIdx, selectedEntIdx, selectedDesIdx, showCart, handleHideCart}) {

    const [total, setTotal] = useState(0)

    useEffect(()=>{
        let totalCost = 0
        if(selectedAppIdx){
            totalCost = totalCost + apps[selectedAppIdx].price
        }
        if(selectedEntIdx){
            totalCost = totalCost + ents[selectedEntIdx].price
        }
        if(selectedDesIdx){
            totalCost = totalCost + dess[selectedDesIdx].price
        }
        setTotal(parseFloat(totalCost).toFixed(2))
    }, [selectedAppIdx, selectedEntIdx, selectedDesIdx])

    return (
        <Modal
            show={showCart}
            onHide={handleHideCart}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>Your Meal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex flex-row justify-content-between'>
                    <p>Appetizer: {selectedAppIdx ? apps[selectedAppIdx].name : "None Chosen"}</p>
                    <p>{selectedAppIdx && apps[selectedAppIdx].price}</p>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                    <p>Entree: {selectedEntIdx ? ents[selectedEntIdx].name : "None Chosen"}</p>
                    <p>{selectedEntIdx && ents[selectedEntIdx].price}</p>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                    <p>Dessert: {selectedDesIdx ? dess[selectedDesIdx].name : "None Chosen"}</p>
                    <p>{selectedDesIdx && dess[selectedDesIdx].price}</p>
                </div>
            </Modal.Body>
            <Modal.Footer className='d-flex flex-col  justify-content-between'>
                <Button variant="success" onClick={handleHideCart}>
                    Close
                </Button>
                <p>Total: {total}</p>
            </Modal.Footer>
        </Modal>
    );
  }
  
  export default Cart;