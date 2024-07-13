import React, { useEffect, useState } from "react";
import Summarize from "./summarize";
import ChatPg from "./chat";
import GroupPg from "./group";
import styles from "./base.css";
import Summaryf from "../public/images/summaryf.png";
import Chat from "../public/images/chat2.png";
import Group from "../public/images/group.png";
import Moonf from "../public/images/moonf.png";
import Sunf from "../public/images/sunf.png";

export default function ContentApp() {
  const [openOverlay, setOpenOverlay] = useState<boolean>(false);
  const [openSumPg, setOpenSumPg] = useState<boolean>(false);
  const [openChatPg, setOpenChatPg] = useState<boolean>(false);
  const [openGroupPg, setOpenGroupPg] = useState<boolean>(false);

  const handleBtn = () => {};

  const handleSumPg = () => {
    setOpenSumPg(true);
    setOpenChatPg(false);
    setOpenGroupPg(false);
  };

  const handleChatPg = () => {
    setOpenChatPg(true);
    setOpenSumPg(false);
    setOpenGroupPg(false);
  };

  const handleGroupPg = () => {
    setOpenGroupPg(true);
    setOpenSumPg(false);
    setOpenChatPg(false);
  };

  return (
    <>
      {/* <Summarize/> */}

      <div className="bodha-container">
        <div
          className="bodha-buttonDiv"
          onClick={() => setOpenOverlay(!openOverlay)}
        >
          <div className="bodha-button">
            <div>ask bodha</div>
          </div>
        </div>
      </div>

      {openOverlay && (
        <div className="bodha-overlay">
          <div className="bodha-overlay-content">
            <div className="bodha-featureModeContainer">
              <div className="bodha-featureBox">
                <div className="bodha-featureBtnDiv">
                  <div className="bodha-btn" onClick={handleSumPg}>
                    <img src={Summaryf} alt="sum" height={25} width={25} />
                  </div>
                  <div className="bodha-btn" onClick={handleChatPg}>
                    <img src={Chat} alt="explain" height={25} width={25} />
                  </div>
                  <div className="bodha-btn" onClick={handleGroupPg}>
                    <img src={Group} alt="chat" height={25} width={25} />
                  </div>
                </div>
              </div>

              <div className="bodha-modeBtnDiv">
                <div className="bodha-modeBtn">
                  <div className="bodha-iconDiv">
                    <div className="bodha-icon">
                      <img
                        src={Sunf}
                        alt="sun"
                        width={25}
                        height={25}
                        className="img"
                      />
                    </div>
                  </div>

                  <div className="bodha-iconDiv">
                    <div className="bodha-icon">
                      <img
                        src={Moonf}
                        alt="moon"
                        width={25}
                        height={25}
                        className="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {openSumPg ? (
              <Summarize />
            ) : openChatPg ? (
              <ChatPg />
            ) : openGroupPg ? (
              <GroupPg />
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
