// import { useDispatch } from "react-redux";
// import authService from "./appwrite/auth";
// import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components/index";

function App() {
  // const [loading, setLoading] = useState(true);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   authService.getCurrentUser()
  //   .then((userData)=>{
  //     if(userData){
  //       dispatch(login({
  //         userData
  //       }))
  //     }else{
  //       dispatch((logout()))
  //     }
  //   })
  //   .finally(()=> setLoading(false))

  // }, [])

  console.log(String(import.meta.env.VITE_APPWRITE_URL));
  console.log(String(import.meta.env.VITE_APPWRITE_PROJECT_ID));
  console.log(String(import.meta.env.VITE_APPWRITE_DATABASE_ID));
  console.log(String(import.meta.env.VITE_APPWRITE_COLLECTION_ID));

  return (
    <div className="min-h-screen bg-gray-700 flex flex-col">
      <Header />
      <main className="flex-1">{/* <Outlet/> */}</main>
      <Footer />
    </div>
  );
}

export default App;
