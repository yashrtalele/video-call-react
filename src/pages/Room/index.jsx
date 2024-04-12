import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function randomID(len) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

const Room = () => {
  const { roomId } = useParams();
  console.log("ROOM ID: ", roomId);
  const myMeeting = async (element) => {
    const appID = 1902498846;
    const serverSecret = "d415bcc5b570db21e57588dd2eec6b85";
    const kitToken = await ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      randomID(5),
      randomID(5)
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      turnOnMicrophoneWhenJoining: true,
      turnOnCameraWhenJoining: true,
      showMyCameraToggleButton: true,
      showMyMicrophoneToggleButton: true,
      showAudioVideoSettingsButton: true,
      showScreenSharingButton: true,
      useFrontFacingCamera: true,
      showTextChat: true,
      showUserList: false,
      maxUsers: 2,
      layout: "Grid",
      showLayoutButton: false,
      screenSharingConfig: {
        resolution: "1280x720",
      },
      scenario: {
        mode: "OneONoneCall",
      },
    });
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
      }}
    >
      <div ref={myMeeting} />
    </div>
  );
};

export default Room;
