import React, { useEffect ,useState} from "react";
import { CommandLineIcon } from "@heroicons/react/24/solid";
import NavbarLinks from "./NavbarLinks";

import { useDispatch, useSelector } from "react-redux";
import { fetchNavbarTheme } from "../../../store/navbarThemeSlice";
import axios from "axios";
import swal from "sweetalert";

const Navbar = () => {
  
  const [Link, setLink] = useState({
    linkes:[],
  });
  useEffect(() => {

    axios.get('api/navbarTheme/fetchNavbarTheme' ).then( res  => {

      setLink({...Link , linkes: res.data.linkes});
      console.log(res.data.linkes);
    
    });
  }, []);

  
  return (
    <>
      <div className="h-24 flex items-center justify-between">
        <div className="flex items-center text-zinc-800">
          <CommandLineIcon className="w-8 h-8" />
        </div>
        <NavbarLinks data={Link.linkes} />
      </div>
    </>
  );
};

export default Navbar;
