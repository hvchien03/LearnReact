//"mounted" và "unmounted" được sử dụng để mô tả trạng thái của một component trong vòng đời của nó. 
//Mounted có nghĩa là component đã được tạo ra và thêm vào DOM
//Unmounted có nghĩa là component đã bị loại bỏ khỏi DOM

import Todolist from "./Todolist";
import { useState } from "react";

function App() {
    const [show, setShow] = useState(false)

    return (
        <div className="container w-full mx-auto my-10">
            <button
                className="w-20 bg-green-500 text-white rounded-sm h-10"
                onClick={() => {
                    setShow(!show)
                }}
            >
                Toggle
            </button>
            {show && <Todolist />}
        </div>
    )
}
export default App;