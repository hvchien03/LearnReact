import { useState, useEffect } from 'react'

function TimerFunc() {
    const [show, setShow] = useState(false)
    const [count, setCount] = useState(180)

    useEffect(() => {
        let timerId
        if (show) {
            timerId = setInterval(() => { //setInterval là một hàm sẽ được gọi sau mỗi 1000 mili giây
                setCount(prevCount => prevCount - 1)
                console.log('countdown')
            }, 1000)
        }
        return () => {
            if (timerId) {
                clearInterval(timerId)
                setCount(180)
            }
        }

    }, [show])

    return (
        <div className='container m-20 w-full pt-10'>
            <button
                className='border border-red-500 bg-black text-white w-20 h-10'
                onClick={() => setShow(!show)}
            >
                toggle
            </button>
            {show && (
                <h1 className='text-2xl text-red-500 pt-10'>{count}</h1>
            )}
        </ div>
    )
}
export default TimerFunc;