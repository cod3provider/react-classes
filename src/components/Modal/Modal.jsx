import {Component} from 'react';
import s from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc)
  }

componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc)
}

  closeByEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  }

  render() {
    const { currentImage: {alt, src}, closeModal } = this.props;

    return (
      <div className={s.backdrop}>
        <div className={s.modal}>
          <img src={'https://image.tmdb.org/t/p/w500/' + src} alt={alt} />
          <button type="button" onClick={closeModal} className={s.btnClose}>Close</button>
        </div>
      </div>
    )
  }
}

export default Modal;
