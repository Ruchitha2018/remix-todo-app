const Modal = ({ title, children }) => {
    return (
        <div className="modal-backdrop">
            <dialog className="modal" open>
                <h2 className="modal-title">{title}</h2>
                <div className="modal-content">{children}</div>
            </dialog>
        </div>
    )
}

export default Modal;

