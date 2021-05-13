import { useRef, useState } from "react";
import { useHistory } from "react-router";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import microPhoneIcon from "../../assets/mic.svg";
import ROUTE_PATH from "../../constants/Routes";
import "./styles.scss";
export default function Controller() {
  const history = useHistory();
  const pages = ["home", "blog", "new blog post", "contact"];
  const urls = {
    home: ROUTE_PATH.HOME,
    about: ROUTE_PATH.ABOUT,
    profile: ROUTE_PATH.PROFILE,
    contact: ROUTE_PATH.CONTACT,
  };

  const commands = [
    {
      command: ["Go to * page", "Go to *", "Open * page", "Open *"],
      callback: (path) => {
        history.push(urls[path]);
      },
    },
    {
      command: "change background colour to *",
      callback: (color) => {
        document.body.style.background = color;
      },
    },
    {
      command: "reset",
      callback: () => {
        handleReset();
      },
    },
    ,
    {
      command: "reset background colour",
      callback: () => {
        document.body.style.background = `rgba(0, 0, 0, 0.8)`;
      },
    },
  ];
  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }
  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };
  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };
  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };

  return (
    <>
      <div className="controller">
        <div className="mircophone-container">
          <div
            className="microphone-icon-container"
            ref={microphoneRef}
            onClick={handleListing}
          >
            <img src={microPhoneIcon} className="microphone-icon" />
          </div>
          <div className="microphone-status">
            {isListening ? "Listening........." : "Click to start Listening"}
          </div>
          {isListening && (
            <>
              <button className="microphone-stop btn" onClick={stopHandle}>
                Stop
              </button>
              <button className="microphone-reset btn" onClick={handleReset}>
                Reset
              </button>
            </>
          )}
        </div>
      </div>
      {transcript && <p>Transcript:{transcript}</p>}
    </>
  );
}
