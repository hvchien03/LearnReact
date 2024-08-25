import { useCallback, useState } from "react";
import Content from './Content';

function Memo() {
    //useCallback dùng mỗi khi truyền function vào 1 component con
    //nếu không dùng useCallback thì mỗi khi re-render component cha thì function sẽ bị tạo mới và component con sẽ re-render
    //dùng useCallback để tránh việc re-render không cần thiết

    //useCallback nhận vào 2 tham số là 1 function và 1 mảng dependencies, cách sử dụng như useEffect

    const [count, setCount] = useState(0);

    const handleIncrease = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);

    return (
        <div className="container w-full m-auto py-10">
            {/* ở trường hợp này props của Content là 1 function nên memo vẫn re-render lại Content
            vì vậy cần dùng useCallBack */}
            <Content onIncrease={handleIncrease} />
            <h1 className="text-4xl text-red-500 pl-16 pb-10">{count}</h1>
        </div>
    )
}
export default Memo;