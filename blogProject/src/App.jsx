import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice'
import { Header,Footer } from './components/index'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch =  useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({
          userData
        }))
      }else{
        dispatch((logout()))
      }
    })
    .finally(()=> setLoading(false))

  }, [])

   console.log(String(import.meta.env.VITE_APPWRITE_URL));
   console.log(String(import.meta.env.VITE_APPWRITE_PROJECT_ID));
   console.log(String(import.meta.env.VITE_APPWRITE_DATABASE_ID));
   console.log(String(import.meta.env.VITE_APPWRITE_COLLECTION_ID));
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          {/* <Header/> */}
          {/* <main> */}
            {/* outlet */}
          {/* </main> */}
          {/* <Footer/> */}
        </div>
    </div>
  ) : null
}

export default App
