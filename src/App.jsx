import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

// ============past code=
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// import { auth } from './firebase/firebase'



// function App() {
//   const [count, setCount] = useState(0)
//   const googleProvider = new GoogleAuthProvider()

//   const [errorMessage,setErorMessage] = useState('')

//   const handleGoogle = () => {
//     signInWithPopup(auth,googleProvider)
//     .then((result) => {
//       console.log(result.user)
//     })
//     .catch((error) => console.log(error))
//   }

//   const handleForm = (event) => {
//     event.preventDefault()
//     let email = event.target.email.value
//     let pass = event.target.password.value

//     setErorMessage("")

//     createUserWithEmailAndPassword(auth,email,pass)
//     .then(result => {
//       console.log(result.user)
//     })
//     .catch(error => setErorMessage(error.message) )
//   }
  
//   return (
//     <div className='bg-gray-500 max-w-4xl mx-auto py-20'>
//        <button className='text-center  max-w-fit mx-auto rounded-sm p-2 bg-yellow-300 flex ' onClick={handleGoogle}>Google log in</button>
//        <form  onSubmit={handleForm} className='bg-slate-400 max-w-96 mx-auto my-4 pb-4'>
//          <div className='flex flex-col gap-2 p-3 text-white'>
//          <label>
//               Email
//           </label>
//           <input type="email" name="email" placeholder="Enter your email" className="bg-gray-300 text-black p-2" />
//           <label htmlFor="">
//             password
//           </label>
//           <input type="password" name="password" placeholder='Password' className='bg-gray-300 text-black p-2'/>
//          </div>
//          <button type="submit" className='max-w-[40%] w-full flex justify-center mx-auto text-white font-medium  text-center p-2 bg-green-400 '>Submit</button>
//        {errorMessage && <p className='text-red-600'>{errorMessage}</p> }
//        </form>
//     </div>
//   )
// }

// export default App
