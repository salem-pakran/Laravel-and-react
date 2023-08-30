import { useEffect, useState } from "react";
import Header2 from "../components/Header2";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ErrorAlert from "../components/ErrorAlert";
import swal from "sweetalert";
import axios from 'axios';


const SignUp = () => {
  
//const history = useHistory();
const navigate = useNavigate();

  const { user, error } = useSelector((state) => state.users);
 
  useEffect(() => {
  document.title = "Layers - Sign up";
  }, []);

  const [registerInput, setRegister] = useState({

    name: "",
    email: "",
    password: "",
    error_list: [],
  });


  const submitHandler =(e) =>{
    e.preventDefault();
    const data ={
      name: registerInput.name,
      password: registerInput.password,
      email: registerInput.email,
    }
   
    axios.get('/sanctum/csrf-cookie').then( response => {
      
      axios.post('api/signup', data ).then( res  => {
        if(res.data.status === 200)
        {
          swal("Success",res.data.message,"success");
          localStorage.setItem('auth_token',res.data.token);
          localStorage.setItem('auth_name',res.data.username);
          navigate(`/user-dashboard/${res.data.id}`);
          //history.push('/user-dashboard/${registerInput.id}');
          /*swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });*/
        }
        else if(res.data.status === 400)
        {
         // swal(res.data.validation_errors,"success");
          setRegister({...registerInput, error_list: res.data.validation_errors});
        }
        


      });
    });
    

  }



  return (
    <section className=" bg-gray-dark h-screen">
    <div className="container mx-auto px-4">
      <ErrorAlert error={error} />
      <Header2 />

      <div className="mt-32 mx-auto w-3/5 relative overflow-hidden">
        <div className="bg-gray-dark p-8 rounded-md flex items-center">
          <div className=" w-2/4 pr-8">
            <h2 className="text-white font-primary font-bold text-3xl">
              Create a new account
            </h2>

            <form  onSubmit={submitHandler}>
              <div className="flex flex-col mt-8">
                <label className=" mb-2 font-primary text-gray-very_light text-base font-bold">
                  Full name
                </label>
                <input
                  
                  //setRegister({ ...register, fullName: e.target.value })
                  value={registerInput.name}
                  onChange={(e) =>
                    setRegister({ ...registerInput, name: e.target.value })
                  }
                  className=" h-12 rounded-md border border-gray-light px-2 bg-gray-medium focus:outline-none text-gray-very_light"
                  type="text"
                  name="name"
                  required
                  
                  
                  
                />
                <span>{registerInput.error_list.name}</span>
              </div>
              <div className="flex flex-col mt-3">
                <label className=" mb-2 font-primary text-gray-very_light text-base font-bold">
                  Email
                </label>
                <input
                  
                  
                  value={registerInput.email}
                  onChange={(e) =>
                    setRegister({ ...registerInput, email: e.target.value })
                  }
                  className=" h-12 rounded-md border border-gray-light px-2 bg-gray-medium focus:outline-none text-gray-very_light"
                  type="email"
                  name="email"
                  required
                  
                  
                />
                <span>{registerInput.error_list.email}</span>
              </div>
              <div className="flex flex-col mt-3">
                <label className="mb-2 font-primary text-gray-very_light text-base font-bold">
                  Password
                </label>
                <input
                  
                  
                  value={registerInput.password}
                  onChange={(e) =>
                    setRegister({ ...registerInput, password: e.target.value })
                  }
                  className=" h-12 rounded-md border border-gray-light px-2 bg-gray-medium focus:outline-none text-gray-very_light"
                  type="password"
                  name="password"
                  required
                  
                  
                />
                <span>{registerInput.error_list.password}</span>
              </div>
              <button
                type="submit"
                className="w-full h-12 bg-blue-columbia text-gray-dark font-primary font-bold rounded-md mt-4"
              >
                Create account
              </button>
              <p className="font-primary text-gray-very_light font-bold text-sm mt-3">
                Already have an account?
                <Link to="/login" className=" font-primary text-white">
                  Login
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

export default SignUp;
