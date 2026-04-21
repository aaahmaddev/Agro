import React from "react";
import "./index.css";

import HeaderLogo from "../../assets/imgs/headerLogo.svg";
import TransleteBtn from "../../assets/imgs/transleteBtn.svg";
import HistoryBtn from "../../assets/imgs/historyIcon.svg";
import MakeLogo from "../../assets/imgs/makeLogo.svg";
import SendLogo from "../../assets/imgs/sendLogo.svg";
import VoiceLogo from "../../assets/imgs/voiceLogo.svg";

const Chat = () => {
  return (
    <section className="chat">
      <div className="container-fluid">
        <div className="chat-inner">
          {/* HEADER */}
          <div className="chat-header d-flex align-items-center justify-content-between">
            <a href="#" className="logo-wrapper">
              <img className="logo" src={HeaderLogo} alt="Logo" />
            </a>

            <div className="d-flex gap-2">
              <button className="btn header-btn">
                <img src={TransleteBtn} alt="translate" />
              </button>
              <button className="btn header-btn">
                <img src={HistoryBtn} alt="history" />
              </button>
            </div>
          </div>

          {/* FORM */}
          <form>
            <div className="offer">
              {/* BUTTONS */}
              <div className="offer-btn-box d-flex flex-column flex-md-row gap-3">
                <button type="button" className="offer-btn make-btn w-100">
                  <img className="me-2" src={MakeLogo} alt="Make" />
                  Make Professional
                </button>

                <button type="button" className="offer-btn send-btn w-100">
                  <img className="me-2" src={SendLogo} alt="Send" />
                  Send Offer
                </button>
              </div>

              {/* INPUT */}
              <div className="offer-input-box mt-3">
                <input
                  className="offer-input"
                  placeholder="Type your response..."
                  type="text"
                />
                <img className="voice-icon" src={VoiceLogo} alt="voice" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Chat;
