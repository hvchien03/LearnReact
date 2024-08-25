import { useRef } from "react";
import Video from "./Video";

function Clip(props) {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <div className="w-full mt-5">
      <Video ref={videoRef} />
      <button onClick={handlePlay} className="m-5 border border-black">
        Play
      </button>
      <button onClick={handlePause} className="m-5 border border-black">
        Pause
      </button>
    </div>
  );
}

export default Clip;
