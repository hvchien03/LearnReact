import { useState } from "react";
// import App from './Learn-react/useState-Hook/UseState';
// import App from './Learn-react/useState-Hook/Two-way-binding';
// import App from './Learn-react/useState-Hook/Form';
// import Todolist from './Learn-react/useState-Hook/Todolist';
// import App from './Learn-react/useState-Hook/Mounted-UnMounted';
// import UpdateDOM from './Learn-react/useEffect-Hook/UpdateDOM';
// import Callapi  from './Learn-react/useEffect-Hook/CallAPI';
// import CallAPIWithDep from './Learn-react/useEffect-Hook/CallAPIWithDep';
// import TimerFunc from './Learn-react/useEffect-Hook/TimerFunc';
// import UploadImage from './Learn-react/useEffect-Hook/UploadImage';
// import ChatApp from './Learn-react/useEffect-Hook/ChatApp';
// import CountApp from './Learn-react/useLayoutEffect-Hook/CountApp';
// import UseRef from './Learn-react/useRef-Hook/UseRef';
// import Memo from './Learn-react/Memo-HOC/Memo';
// import UseCallBack from './Learn-react/useCallback-Hook/UseCallBack';
// import UseMemoApp from './Learn-react/useMemo-Hook/UseMemoApp';
// import UseReducerApp from './Learn-react/useReducer-Hook/UseReducer';
// import TodoApp from './Learn-react/useReducer-Hook/TodoApp';
// import AppToDo from './Learn-react/useReducer-Hook/Todo/index';
// import UseContext from "./Learn-react/useContext-Hook/UseContext";
// import { ThemeProvider } from "./Learn-react/useContext-Hook/ThemeContext";
// import Todo2 from "./Learn-react/useReducerAndContext/Todo2";
// import { StoreProvider } from "./Learn-react/useReducerAndContext";
// import Clip from "./Learn-react/useImperativeHandle-hook/Clip";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./React-router/Home";
import NewsPage from "./React-router/News";
import ContactPage from "./React-router/Contact";

function App() {
  const [show, setShow] = useState(false);

  return (
    // <ThemeProvider>
    // <StoreProvider>
    <div className="container w-full m-auto py-10">
      <button
        className="border border-red-500 bg-black text-white w-20 h-10 mb-5"
        onClick={() => setShow(!show)}
      >
        Toggle
      </button>

      {show && (
        // <Todolist />
        // <UpdateDOM />
        // <Callapi />
        // <CallAPIWithDep />
        // <TimerFunc />
        // <UploadImage />
        // <ChatApp />
        // <CountApp />
        // <UseRef />
        // <Memo />
        // <UseCallBack />
        // <UseMemoApp />
        // <UseReducerApp />
        // <TodoApp />
        // <AppToDo />
        // <UseContext />
        // <Todo2 />
        // <Clip />
        <>
          <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
              <svg
                class="fill-current h-8 w-8 mr-2"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
              </svg>
              <span class="font-semibold text-xl tracking-tight">
                Learn React Router
              </span>
            </div>
            <div class="block lg:hidden">
              <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg
                  class="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div class="text-sm lg:flex-grow">
                {/* thẻ Link chỉ router nội bộ, nếu gán link bên ngoài ứng dụng thì phải dùng thẻ a */}
                <Link
                  to="/"
                  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                >
                  Home
                </Link>
                <Link
                  to="/News"
                  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                >
                  News
                </Link>
                <Link
                  to="/Contact"
                  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </div>
          </nav>

        {/* Nơi xảy ra thay đổi */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/News" element={<NewsPage />} />
            <Route path="/Contact" element={<ContactPage />} />
          </Routes>
        </>
      )}
    </div>
    // </StoreProvider>
    // </ThemeProvider>
  );
}
export default App;
