import { useState, useEffect } from "react";

const lessons = [
    {
        id: 1,
        name: 'ReactJS là gì? Tại sao nên học ReatJS?'
    },
    {
        id: 2,
        name: 'SPA, MPA là gì? Sự khác biệt giữa SPA và MPA?'
    },
    {
        id: 3,
        name: 'Arrow function là gì? Cú pháp và cách sử dụng?'
    }
]

function ChatApp() {
    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {
        const handleEvent = (e) => {
            console.log(e.detail);
        }
        window.addEventListener(`Lesson ${lessonId}`, handleEvent);
        return () => {
            window.removeEventListener(`Lesson ${lessonId}`, handleEvent);
        }
    }, [lessonId])

    return (
        <div className="container w-full m-auto py-10">
            <div className="bg-gray-200 p-5">
                <h1 className="text-2xl text-red-500">Chat App</h1>
                <ul>
                    {lessons.map(lesson => (
                        <li key={lesson.id}
                            className={lesson.id === lessonId ? "text-lg text-red-500" : "text-lg"}
                            onClick={() => setLessonId(lesson.id)}
                        >
                            {lesson.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default ChatApp;