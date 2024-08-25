import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {
  const value = useContext(ThemeContext);
  return (
    <div
      className={value.theme === "light" ? "p-5" : "bg-gray-800 p-5 text-white"}
    >
      <p className="text-2xl text-center">This is a paragraph component.</p>
    </div>
  );
}
export default Paragraph;
