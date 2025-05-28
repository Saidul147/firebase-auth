import { useState } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'

function Login() {
  const googleProvider = new GoogleAuthProvider()
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user)
        navigate('/home')
      })
      .catch((error) => {
        console.log(error)
        setErrorMessage(error.message)
      })
  }

  const handleForm = (event) => {
    event.preventDefault()
    let email = event.target.email.value
    let pass = event.target.password.value

    setErrorMessage("")

    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        console.log(result.user)
        navigate('/home')
      })
      .catch((error) => setErrorMessage(error.message))
  }

  return (
    <div className='bg-gray-500 max-w-4xl mx-auto py-20'>
      <button className='text-center max-w-fit mx-auto rounded-sm p-2 bg-yellow-300 flex' onClick={handleGoogle}>
        Google log in
      </button>
      <form onSubmit={handleForm} className='bg-slate-400 max-w-96 mx-auto my-4 pb-4'>
        <div className='flex flex-col gap-2 p-3 text-white'>
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" className="bg-gray-300 text-black p-2" />
          <label>Password</label>
          <input type="password" name="password" placeholder='Password' className='bg-gray-300 text-black p-2' />
        </div>
        <button type="submit" className='max-w-[40%] w-full flex justify-center mx-auto text-white font-medium text-center p-2 bg-green-400'>
          Submit
        </button>
        {errorMessage && <p className='text-red-600 text-center mt-2'>{errorMessage}</p>}
      </form>
    </div>
  )
}

export default Login

//think two login button, one = handleGoogle, and another is = create account.
//1.first call the googleProvider =>  const googleProvider = new GoogleAuthProvider()
 //  create a function for a google login,like handleGoogle or your wish. and then important thing is  
// inside the handlerFunction, call the  signInWithPopup(auth, googleProvider) //auth which is exported from firebase js, and google provider from avobe.
      // .then((result) => {
      //   navigate('/home')
      // })
//==========every type of function like signinWithPopUp,createUserWithEmailAndPassword(auth, email, password)
// to find this go to firebase.com docs > build > web > get started.
