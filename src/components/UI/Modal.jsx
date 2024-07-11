import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, className = "", handleClose }) {
  const dialog = useRef();

  useEffect(() => {
    // assign dialog.current to a some const coz it might change when the cleanup fn runs
    const modal = dialog.current;
    if (open) modal.showModal();

    // cleanup fn
    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={handleClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
