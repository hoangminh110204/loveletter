import React, { useState } from "react";
import './Lovepage.css';  // Import file CSS để dễ quản lý styles

const LovePage = () => {
  const [noBtnStyle, setNoBtnStyle] = useState({});
  const [hasMoved, setHasMoved] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const moveNoButton = () => {
    const x = Math.floor(Math.random() * 80);
    const y = Math.floor(Math.random() * 80);
    setNoBtnStyle({
      position: "absolute",
      left: `${x}%`,
      top: `${y}%`,
      transition: "0.2s",
    });
    setHasMoved(true);
  };

  const handleYesClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="love-page">
      <h1>Bạn có đồng ý làm bạn gái tớ không? 🥺</h1>

      {/* Button container */}
      <div className={`button-container ${hasMoved ? 'moved' : ''}`}>
        <button
          onClick={handleYesClick}
          className="yes-btn"
        >
          Hết sức đồng ý 💖
        </button>

        <button
          style={noBtnStyle}
          className="no-btn"
          onMouseEnter={moveNoButton}
        >
          Không đâuu 😅
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <img src="https://cdn2.fptshop.com.vn/unsafe/800x0/meme_tha_tim_5_bc3726d434.png" alt="" />
            <h2>Yayyy! 🎉</h2>
            <p>Tớ biết màaaa~ Từ nay chúng mình là một cặp rồiii 💘</p>
            <button onClick={closeModal} className="modal-btn">
              Okii hihi 💕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LovePage;
