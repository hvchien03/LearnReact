import { useState } from "react";
import Content from './Content';
//memo() là 1 HOC High order component (component bậc cao)
//nó nhận vào 1 component và trả về 1 component mới
//memo() giúp tối ưu hóa performance cho component
//nó sẽ render lại component chỉ khi props thay đổi
//tránh re-render không cần thiết

// React.memo được gọi là Higher order component (HOC). Dùng để ghi nhớ các props của một component, 
// quyết định xem có render lại component đó hay không để tối ưu về hiệu năng.

// Ngắn gọn React.memo dùng để xử lý component tránh re-render trong tình huống không cần thiết.


function Memo() {

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }

    return (
        <div className="container w-full m-auto py-10">
            {/* ở bài này, mỗi khi click vào button thì sẽ render ui lại, 
            nên component <Content /> cũng sẽ bị gọi lại, vậy nên cần dùng memo()
            nếu 1 pros trong <Content /> thay đổi thì mới re-render lại. */}
            <Content />
            <h1 className="text-4xl text-red-500 pl-16 pb-10">{count}</h1>
            <button className="bg-black text-white w-20 h-10" onClick={increase}>Increase</button>
        </div>
    )
}
export default Memo;