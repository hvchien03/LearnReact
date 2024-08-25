import { memo } from "react";

//memo() là 1 HOC High order component (component bậc cao)
//nó nhận vào 1 component và trả về 1 component mới
//memo() giúp tối ưu hóa performance cho component
//nó sẽ render lại component chỉ khi props thay đổi
//tránh re-render không cần thiết


// React.memo được gọi là Higher order component (HOC). Dùng để ghi nhớ các props của một component, 
// quyết định xem có render lại component đó hay không để tối ưu về hiệu năng.

// Ngắn gọn React.memo dùng để xử lý component tránh re-render trong tình huống không cần thiết.
function Content({onIncrease}) {
    console.log('Content render');
    return (
        <>
            <h1 className="text-2xl text-red-500">Hello anh em</h1>
            <button className="bg-black text-white w-20 h-10" onClick={onIncrease}>Increase</button>
        </>
    )
}
export default memo(Content);