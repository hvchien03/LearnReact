import { useEffect, useState } from "react";

function UpdateDOM() {
    //1. useEffect(callback)
    // callback luôn được gọi sau khi component được mounted (được gọi sau khi component mounted)
    // và sau mỗi lần component được re-render

    const [title, setTitle] = useState('');

    useEffect(() => {
        document.title = title;
    });


    return (
        <div className="container w-full mx-auto my-10">
            <h1 className="text-center font-bold size-4 my-10 w-full">Set title</h1>
            <input
                className="border border-green-300 rounded-sm m-2 p-2 h-10"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
        </div>
    );
}
export default UpdateDOM;