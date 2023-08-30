import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchUsers } from "../store/userSlice";
import Header2 from "../components/Header2";
import ErrorAlert from "../components/ErrorAlert";
import swal from "sweetalert";
import axios from 'axios';


const Login = () => {

  const navigate = useNavigate();
 

  const [login, setLogin] = useState({
    email: "",
    password: "",
    error_list:[],
    userLogin:[],
    
  });



  

    useEffect(() => {
    document.title = "Layers - Login";

    //dispatch(fetchUsers());
    //console.log(res.data.user);
    //console.log(userLogin);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const data ={
      email: login.email,
      password: login.password,

    }

    axios.get('/sanctum/csrf-cookie').then( response => {
      
      axios.post('api/login', data ).then( res  => {
        if(res.data.status === 200)
        {
          swal("Success",res.data.message,"success");
          localStorage.setItem('auth_token',res.data.token);
          localStorage.setItem('auth_name',res.data.username);
          navigate(`/user-dashboard/${res.data.id}`);
         
        }
        else if(res.data.status === 401)
        {
          /*"warning", "error", "success" and "info".*/
          swal("Error",res.data.message,"error");
          
        }else{

          setLogin({...login, error_list: res.data.validation_errors});
        }
        


      });
    });


  };



  return (
    <section className=" bg-gray-dark h-screen">
    <div className="container mx-auto px-4">


      <Header2 />
      <div className="mt-32 mx-auto w-3/5 relative overflow-hidden">
        <div className="bg-gray-dark p-8 rounded-md flex items-center">
          <div className=" w-2/4 pr-8">
            <h2 className="text-white font-primary font-bold text-3xl">
              Welcome back!
            </h2>
            <p className="font-secondary text-gray-very_light text-base mt-2">
              to log in, please enter your email
            </p>

            <form onSubmit={submitHandler}>
              <div className="flex flex-col mt-3">
                <label className=" mb-2 font-primary text-gray-very_light text-base font-bold">
                  Email
                </label>
                <input
                  value={login.email}
                  onChange={(e) =>
                    setLogin({ ...login, email: e.target.value })
                  }
                  className=" h-12 rounded-md border border-gray-light px-2 bg-gray-medium focus:outline-none text-gray-very_light"
                  type="email"
                  placeholder="e.g: khalid@gmail.com"
                />
                <span className=" mb-2 font-primary text-gray-very_light text-base font-bold">
                  {login.error_list.email}
                </span>
              </div>
              <div className="flex flex-col mt-3">
                <label className="mb-2 font-primary text-gray-very_light text-base font-bold">
                  Password
                </label>
                <input
                  value={login.password}
                  onChange={(e) =>
                    setLogin({ ...login, password: e.target.value })
                  }
                  className=" h-12 rounded-md border border-gray-light px-2 bg-gray-medium focus:outline-none text-gray-very_light"
                  type="password"
                  placeholder="e.g: 121232"
                />
                <span className=" mb-2 font-primary text-gray-very_light text-base font-bold">
                  {login.error_list.password}
                </span>
              </div>
              <button
                type="submit"
                className="w-full h-12 bg-blue-columbia text-gray-dark font-primary font-bold rounded-md mt-4"
              >
                Login
              </button>
              <p className="font-primary text-gray-very_light font-bold text-sm mt-3">
                Don't have an account?
                <Link to="/signup" className=" font-primary text-white">
                  Create an account
                </Link>
              </p>
            </form>
          </div>
          <div className=" bg-gray-medium w-2/4 h-full absolute right-0 rounded-md"></div>
        </div>
      </div>
    </div>
    </section>
  );

};

export default Login;
