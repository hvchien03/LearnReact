import { useState } from "react";

//Two-way binding
function App() {
    const [Name, setName] = useState('')
    const handleChangeName = () => {
        setName('Nguyễn Văn BB')
    }
    console.log(Name)
    return (
        <div style={{ padding: 300 }}>
            <input value={Name} onChange={e => setName(e.target.value)} />
            <button onClick={handleChangeName}>Change</button>
        </div>
    );
}
export default App;