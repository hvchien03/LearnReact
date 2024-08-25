import { useEffect, useLayoutEffect, useState } from "react";
function CountApp() {
    //với ví dụ này, ta thấy khi count = 3, ta tiếp tục bấm button thì ui sẽ hiển thị số 4 (Chớp 1 cái) rồi mới setCount = 0.
    //Đây là một lỗi về UI, nếu ứng dụng lớn gặp phải thì sẽ gây ra rất nhiều vấn đề.
    //useEffect sẽ chạy sau khi render, nên nó sẽ không thể giải quyết vấn đề này
    //với trường hợp như này thì nên sử dụng useLayoutEffect thay vì useEffect.

    //     quy trình quy trình thực hiện của useLayoutEffect
    // 1. Cập nhật lại state
    // 2. Cập nhật DOM (mutated)
    // 3. Gọi cleanup nếu deps thay đổi (syns - đồng bộ)
    // 4. Gọi useLayoutEffect callback  (syns - đồng bộ)
    // 3. Render lại UI
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     if (count > 3)
    //         setCount(0);
    // }, [count]);

    useLayoutEffect(() => {
        if (count > 3)
            setCount(0);
    }, [count]);

    return (
        <div className="container w-full m-auto py-10">
            <h1 className="text-2xl text-red-500">{count}</h1>
            <button className="border border-red-500 bg-black text-white w-20 h-10" onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}
export default CountApp;