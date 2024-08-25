import { useRef, forwardRef, useImperativeHandle } from "react";
import video1 from "./videos/Car.mp4";

//forwardRef là một hàm giúp chúng ta truy cập vào ref của một component con từ component cha
//Hàm này nhận vào 2 tham số, tham số thứ nhất là component con, tham số thứ 2 là ref

//useImperativeHandle là một hook giúp chúng ta tạo ra một ref mà chỉ expose ra những phương thức mà chúng ta muốn
//useImperativeHandle nhận vào 2 tham số, tham số thứ nhất là ref, tham số thứ 2 là một hàm callback
function Video(props, ref) {
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));
  return <video ref={videoRef} width="320" height="240" src={video1} />;
}
export default forwardRef(Video);
