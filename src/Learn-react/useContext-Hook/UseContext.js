import Content from "./Content";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

//context: là một cách để truyền dữ liệu qua các cây component mà không cần truyền props thủ công ở mọi cấp độ.
//1. Create a context (tạo một context)
//2. Provide a context value (nhà cung cấp giá trị cho context)
//3. Consume the context value (tiêu thụ giá trị của context)

function UseContext() {
  const value = useContext(ThemeContext);

  return (
    <div className="container w-full m-auto">
      <button className="border border-red-400 w-36 h-10 mb-5"
      onClick={value.handleToggle}>
        Toggle theme
      </button>
      <Content />
    </div>
  );
}

export default UseContext;
