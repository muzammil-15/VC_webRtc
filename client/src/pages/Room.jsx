import React from "react";

import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Roompage = () => {
  const { roomId } = useParams();
  const appID = process.env.REACT_APP_APPID;
  const serverSecret = process.env.REACT_APP_SERVERSECRET;
  console.log(appID, serverSecret);
  let myMeeting = async (element) => {
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "muzammil"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
        // config: {
        //   role,
        // },
      },
      //   sharedLinks,
    });
  };

  return (
    <div className="room">
      <div ref={myMeeting} />
    </div>
  );
};

export default Roompage;
