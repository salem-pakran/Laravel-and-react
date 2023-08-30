import React, { useState } from "react";
import { updateHeaderTheme } from "../../../store/headerThemeSlice1";
import { useDispatch } from "react-redux";
import axios from "axios";
import swal from "sweetalert";
import ba from "../../images/background-call-to-action.jpg";
//import FormData from 'form-data'; == var FormData = require('form-data');




const HeaderImgEdit = ({ id, img }) => {

  const dispatch = useDispatch();

  const [file, setFile] = useState(null);
  const handleFileImage = (e) =>{
    setFile(e.target.files[0]);
  }

  const sumbitEditTitleHandler = async(e) => {
    e.preventDefault();
    const data ={

      image: file.image,

    }

    

    var FormData = require('form-data');
    const form = new FormData();
    form.append('image' , file);


/*
    var FormData = require('form-data');
    var fs = require('fs');
    var form = new FormData();
    const stream = fs.createReadStream(PATH_TO_FILE);
    form.append('image' , stream);
    const formHeadres = form.getHeaders();
     await axios.put(`api/linkes_Content/updateLinkes_Content/${id}`, form,{

      headers: {
        ...formHeadres
    },
*/


//updateLinkes_Content
    await axios.put(`api/linkes_Content/updateLinkes_Content/${id}`, form,{

      headers: {
        'Content-Type' : 'multipart/from-data'
    },

    }).then( res  => {

      if(res.data.status === 200)
      {
        swal("Success",res.data.message,"success");
        
      }
      else if(res.data.status === 422)
      {
        //setFile({...avatar, error_list: res.data.validation_errors});
        /*"warning", "error", "success" and "info".*/
        //swal("warning",res.data.message,"warning");
      }else if(res.data.status === 401)
      {
        swal("warning",res.data.message,"warning");
      }
      
    });
    //dispatch(updateHeaderTheme(avatar));
    //console.log(avatar);
  };

  return (
    <div className="absolute bg-white rounded py-3 px-4 border border-zinc-400 z-50 shadow-lg w-96">
      <form onSubmit={sumbitEditTitleHandler} encType="multipart/form-data" required>
        <input
          type="file"
          name="image"
          onChange={handleFileImage}
          /*onChange={(e) =>
            setAvatar({
              ...avatar,
              image: URL.createObjectURL(e.target.files[0]),
            })
          }
          */
        />
        
        <div className="mt-4">
          <button
            type="sumbit"
            className="mr-1 font-display py-1 px-4 bg-green-400 text-white text-sm rounded"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default HeaderImgEdit;
