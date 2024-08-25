import { useState, useMemo, useRef } from 'react';
//useMemo giúp tối ưu hóa performance cho component
//nó nhận vào 1 callback và 1 mảng dependencies
//nếu dependencies thay đổi thì function sẽ được gọi lại
//nếu không thì function sẽ không được gọi lại
//useMemo giúp tránh việc re-render 1 logic không cần thiết

function UseMemoApp() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);

    const nameRef = useRef();

    const handleSubmit = () => {
        setProducts([...products, { name, price: Number(price) }]);
        setName('');
        setPrice('');
        nameRef.current.focus();
    }

    // const total = products.reduce((total, product) => {
    //     console.log('Chạy lại');
    //     return total + product.price
    // }, 0)
    // vấn đề là nó sẽ chạy lại mỗi khi state thay đổi, nếu state thay đổi thì total sẽ thay đổi
    //để giải quyết vấn đề này ta sử dụng useMemo

    const total = useMemo(() => {
        const kq = products.reduce((total, product) => {
            console.log('Chạy lại');
            return total + product.price
        }, 0)
        return kq;
    }, [products])
    //callback function sẽ chỉ chạy lại khi products thay đổi

    return (
        <div className="container w-full m-auto py-10">
            <input
                ref={nameRef}
                type="text"
                placeholder='Name'
                value={name}
                className="border border-red-500 w-1/2 h-10"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder='Price'
                value={price}
                className="border border-red-500 w-1/2 h-10"
                onChange={(e) => setPrice(e.target.value)}
            />
            <h1>Total: {total}</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
            <button onClick={handleSubmit} className="border border-red-500 bg-black text-white w-20 h-10">Add</button>
        </div>
    )
}
export default UseMemoApp;