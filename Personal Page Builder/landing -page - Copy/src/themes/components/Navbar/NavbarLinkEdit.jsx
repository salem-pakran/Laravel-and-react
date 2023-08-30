import React, { useEffect, useState } from "react";
import { updateNavbarTheme } from "../../../store/navbarThemeSlice";
import { useDispatch } from "react-redux";
import { deleteLinkNavbarTheme } from "../../../store/navbarThemeSlice";
import axios from "axios";
import swal from "sweetalert";

const NavbarLinkEdit = ({ link, id }) => {
  const dispatch = useDispatch();



  const [linkEdit, setLinkEdit] = useState({
    id,
    link,
    error_list:[],
  });

  const sumbitEditHandler = (e) => {
    e.preventDefault();
    const data ={
      id: linkEdit.id,
      link: linkEdit.link,

    }
    axios.put(`api/navbarTheme/updateNavbarTheme/${id}`, data ).then( res  => {
      if(res.data.status === 200)
      {
        swal("Success",res.data.message,"success");
      }
      else if(res.data.status === 422)
      {
        setLinkEdit({...linkEdit, error_list: res.data.validation_errors});
        /*"warning", "error", "success" and "info".*/
        //swal("warning",res.data.message,"warning");
      }else if(res.data.status === 401)
      {
        swal("warning",res.data.message,"warning");
      }
      
    });


    //dispatch(updateNavbarTheme(linkEdit));
  };


  const deleteLinkHandler = () => {
    
    axios.delete(`api/navbarTheme/deleteNavbarTheme/${id}`).then( res  => {
      if(res.data.status === 200)
      {
        swal("Success",res.data.message,"success");
      }
      else if(res.data.status === 401)
      {
        /*"warning", "error", "success" and "info".*/
        swal("Error",res.data.message,"error");
      }
      
    });


    //dispatch(deleteLinkNavbarTheme(id));
  };


  return (
    <div className="absolute bg-white rounded py-3 px-4 border border-zinc-400 left-2/4 -translate-x-2/4 z-50 shadow-lg">
      <form onSubmit={sumbitEditHandler}>
        <div className="w-1/2 flex items-center">
          <label className="mr-2 text-sm min-h-max">Idlin</label>
          <input
            className="bg-zinc-50 h-8 border border-zinc-300 px-2"
            type="number"
            placeholder={id}
            disabled
          />
        </div>
        <div className="mt-2 w-1/2 flex items-center">
          <label className="mr-2 text-sm min-h-max">Link</label>
          <input
            className="bg-zinc-50 h-8 border border-zinc-300 px-2"
            placeholder={link}
            type="text"
            value={linkEdit.link}
            onChange={(e) => setLinkEdit({ ...linkEdit, link: e.target.value })}
          />
        </div>
        <div className="mt-4">
          <button
            type="sumbit"
            className="mr-1 font-display py-1 px-4 bg-green-400 text-white text-sm rounded"
          >
            Update
          </button>
          <button
            type="button"
            onClick={deleteLinkHandler}
            className="ml-1 font-display py-1 px-4 bg-red-400 text-white text-sm rounded"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default NavbarLinkEdit;
