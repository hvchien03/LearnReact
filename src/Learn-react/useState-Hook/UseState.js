import { useState } from "react";

//random gift
const listGift = [
  'Iphone 13 pro max',
  'Intel core i9 14900hk',
  'Người Yêu',
  'Việc làm'
]
function App() {
  const [gift, setGift] = useState('Chưa có phần thưởng')
  const handleGift = () => {
    const random = Math.floor(Math.random() * (listGift.length - 1))
    setGift(listGift[random])
  }
  return (
    <div style={{padding: 300  }}>
      <h1>{gift}</h1>
      <button onClick={handleGift}>Lấy thưởng</button>
    </div>
  );
}
export default App;