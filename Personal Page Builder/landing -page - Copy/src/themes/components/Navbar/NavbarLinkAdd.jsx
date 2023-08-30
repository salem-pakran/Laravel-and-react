import { useState } from "react";
import { PlusSmallIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { addLinkNavbarTheme } from "../../../store/navbarThemeSlice";
import axios from "axios";
import swal from "sweetalert";

const NavbarLinkAdd = () => {
  const dispatch = useDispatch();
  
 

  const [addNewLink, setAddNewLink] = useState({});

  const addNewLinkHandler = (e) => {
    e.preventDefault();

    const newLink = {
      id: Math.floor(Math.random() * 2000),
      link: "new link",
      type: "link",
      web_sites_id: 1,
      error_list: [],
    };

    axios.post('api/navbarTheme/addLinkNavbarTheme', newLink ).then( res => {

      if(res.data.status === 200)
      {
        swal("Success",res.data.message,"success");
        console.log(res.data.link);
        
        
        /*swal({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
        });*/
      }
      else if(res.data.status === 400)
      {
        swal(res.data.validation_errors,"error");
    
      }
        

    });

    //dispatch(addLinkNavbarTheme(newLink));
  };

  return (
    <button
      type="submit"
      onClick={addNewLinkHandler}
      className="button-add absolute bg-green-400 z-20 rounded-full right-0 translate-x-2"
    >
      <PlusSmallIcon className="w-4 h-4 text-white stroke-2" />
    </button>
  );
};

export default NavbarLinkAdd;
