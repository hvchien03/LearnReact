import { useEffect, useState } from 'react';

function Callapi() {
    //2. useEffect(callback, [])
    // callback luôn được gọi sau khi component được mounted (được gọi sau khi component mounted)
    // chỉ gọi callback 1 lần sau khi component mounted

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [])

    return (
        <div className='container w-full m-10 pt-5'>
            <h1 className='text-2xl text-red-400 font-bold'>Call API</h1>

            <ul className='list-disc list-inside'>
                {posts.map(post => (
                    <li
                        key={post.id}
                        className='text-lg text-blue-400 font-semibold'
                    >
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Callapi;