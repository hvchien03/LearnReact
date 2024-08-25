import { useState } from "react";

//Form + radioCheckbox
// const courses = [
//   {
//     id: 1,
//     name: 'ReactJS',
//   },
//   {
//     id: 2,
//     name: 'AngularJS',
//   },
//   {
//     id: 3,
//     name: 'VueJS',
//   },
//   {
//     id: 4,
//     name: 'NodeJS',
//   }
// ]
// function App() {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [checked, setChecked] = useState('')

//   const handleSubmit = () => {
//     //Call api chỗ này
//     console.log(name, email, checked) //hiển thị dữ liệu chơi chơi
//   }
//   return (
//     <div className="p-10">
//       <div className="">
//         <label className="">Name</label>
//         <input className="mx-5 border border-red-500" value={name} onChange={e => setName(e.target.value)} />
//         <label className="">Email</label>
//         <input className="mx-5 border border-red-500" value={email} onChange={e => setEmail(e.target.value)} />
//       </div>
//       <div className="p-5">
//         <label className="">Courses</label>
//         {courses.map(course => (
//           <div key={course.id}>
//             <input type="radio" checked={checked === course.id} onChange={() => setChecked(course.id)} />{course.name}
//           </div>
//         ))}
//         <button className="p-1 border-4 border-blue-500 bg-green-400" onClick={handleSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// }

//form + checkbox
const courses = [
  {
    id: 1,
    name: 'ReactJS',
  },
  {
    id: 2,
    name: 'AngularJS',
  },
  {
    id: 3,
    name: 'VueJS',
  },
  {
    id: 4,
    name: 'NodeJS',
  }
]

function App() {
  const [checked, setChecked] = useState([])

  const handleChecked = (id) => {
    if (checked.includes(id)) {
      setChecked(prev => prev.filter(item => item !== id))
      return
    } else {
      setChecked(prev => [...prev, id])
    }
  }

  const handleSubmit = () => {
    //Call api chỗ này
    console.log(checked) //hiển thị dữ liệu chơi chơi
  }
  return (
    <div className="p-10">
      <div className="p-5">
        <label className="">Courses</label>
        {courses.map(course => (
          <div key={course.id}>
            <input type="checkbox" checked={checked.includes(course.id)} onChange={() => handleChecked(course.id)} />{course.name}
          </div>
        ))}
        <button className="p-1 border-4 border-blue-500 bg-green-400" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
export default App;