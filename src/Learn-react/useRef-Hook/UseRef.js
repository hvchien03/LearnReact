import { useEffect, useRef, useState } from "react";
//Lưu các giá trị qua một tham chiếu bên ngoài function component
function UseRef() {
    const [count, setCount] = useState(60);

    //useRef(Giá trị khởi tạo) trả về một đối tượng ref có thuộc tính current (object)
    //giá trị khởi tạo có thể là null, một giá trị, hoặc một function
    //thuộc tính current lưu giá trị của ref
    let timerId = useRef();
    const prevCount = useRef();
    const h1Ref = useRef();

    useEffect(() => {
        console.log(h1Ref.current);
    });

    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current);
    }
    console.log('count: ', count, ' prevCount: ', prevCount.current);
    return (
        <div className="container w-full m-auto py-10">
            <h1 ref={h1Ref} className="text-4xl text-red-500 pl-16 pb-10">{count}</h1>
            <button className="bg-black text-white w-20 h-10" onClick={handleStart}>Start</button>
            <button className="bg-black text-white w-20 h-10" onClick={handleStop}>Stop</button>
        </div>
    )
}
export default UseRef;