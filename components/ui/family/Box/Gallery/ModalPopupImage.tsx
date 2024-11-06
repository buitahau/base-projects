import React from 'react';
import './modal-popup-image.css';

interface ModalPopupImageProps {
  image: string;
  closeModal: () => void;
}

export class ModalPopupImage extends React.Component<ModalPopupImageProps, {}> {
  render() {
    return (
      <div id="myModal" className="modal">
        <span className="close" onClick={() => this.props.closeModal()}>
          &times;
        </span>
        <img className="modal-content" src={this.props.image} />
      </div>
    );
  }
}
