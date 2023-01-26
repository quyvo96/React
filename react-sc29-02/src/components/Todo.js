import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHanlder() {
    setModalIsOpen(true);

  }
  function closeModalHanlder() {
    setModalIsOpen(false);
  }
  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHanlder}>Delete</button>
      </div>
      {modalIsOpen && <Modal />}
      {modalIsOpen && <Backdrop onCancel={closeModalHanlder}/>}
    </div>
  );
}

export default Todo;
