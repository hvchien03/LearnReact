import { useEffect, useState } from 'react';
const tabs = ['posts', 'photos', 'albums']
function CallAPIWithDep() {
    //3. useEffect(callback, [deps])
    // callback luôn được gọi sau khi component được mounted (được gọi sau khi component mounted)
    // callback được gọi lại mỗi khi deps thay đổi
    const [data, setData] = useState([])
    const [type, setType] = useState('posts')
    const [showToTop, setShowToTop] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            // if (window.scrollY >= 200) { trong if trả vể true false)
            //     setShowToTop(true)
            // } else {
            //     setShowToTop(false)
            // }
            setShowToTop(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handleScroll)

        return () => { //cleanup function được gọi khi component bị unmounted
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className='container w-full m-10 pt-5'>
            <h1 className='text-2xl text-red-400 font-bold'>Call API</h1>

            {tabs.map(tab => (
                <button
                    key={tab} value={tab}
                    className={
                        type === tab ? 'bg-blue-500 text-red-400 p-2 m-2 rounded-lg' : 'bg-blue-500 text-white p-2 m-2 rounded-lg'
                    }
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))
            }

            <ul className='list-disc list-inside'>
                {data.map(item => (
                    <li
                        key={item.id}
                        className='text-lg text-blue-400 font-semibold'
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
            {showToTop && (
                <button className='fixed bottom-10 right-10 bg-pink-300'>
                    Lên
                </button>
            )}
        </div >
    )
}
export default CallAPIWithDep;