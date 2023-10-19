import  {  useState } from "react";

// eslint-disable-next-line react/prop-types
const GalleryModal = ({ image }) => {
  const [modalVisible, setModalVisible] = useState(false);

  
  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <div
        onClick={showModal}
        className="bg-white h-56 overflow-hidden p-5 shadow-lg"
      >
        <img className="w-full h-full" src={image} alt="" />
      </div>
     
      {modalVisible && (
        <dialog className="modal" open>
          <div className="modal-box w-11/12 max-w-5xl">
            <img className="w-full" src={image} alt="" />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={closeModal}>Close</button>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default GalleryModal;