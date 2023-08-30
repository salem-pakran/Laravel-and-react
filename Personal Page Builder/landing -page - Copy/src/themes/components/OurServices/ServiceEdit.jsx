import React, { useState } from "react";
import PopUpModel from "../popUpModel/PopUpModel";
import { useDispatch } from "react-redux";
import { updateServices, deleteService } from "../../../store/servicesSlice";
import axios from "axios";
import swal from "sweetalert";

const ServiceEdit = ({ id, title, desc }) => {
  const dispatch = useDispatch();

  const [service, setService] = useState({
    id,
    title,
    desc,
    
    error_list:[],
  });

  const sumbitEditHandler = (e) => {
    e.preventDefault();
    const data ={
      id: service.id,
      title: service.title,
      desc: service.desc,

    }
    axios.put(`api/linkes_Content/updateLinkes_Content/${id}`, data ).then( res  => {
      if(res.data.status === 200)
      {
        swal("Success",res.data.message,"success");
        console.log(res.data.linkes_content);
      }
      else if(res.data.status === 422)
      {
        setService({...service, error_list: res.data.validation_errors});
        /*"warning", "error", "success" and "info".*/
        //swal("warning",res.data.message,"warning");
      }else if(res.data.status === 401)
      {
        swal("warning",res.data.message,"warning");
      }
      
    });
    //dispatch(updateServices(service));
  };

  const deleteServiceHandler = () => {
    
    axios.delete(`api/linkes_Content/deleteLinkes_Content/${id}`).then( res  => {
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
    //dispatch(deleteService(id));
  };

  return (
    <PopUpModel>
      <form onSubmit={sumbitEditHandler}>
        <div className="w-1/2 flex items-center">
          <label className="mr-2 text-sm min-h-max">Title</label>
          <input
            className="bg-zinc-50 h-8 border border-zinc-300 px-2"
            type="text"
            value={service.title}
            onChange={(e) => setService({ ...service, title: e.target.value })}
          />
        </div>
        <div className="mt-2 w-1/2 flex items-center">
          <label className="mr-2 text-sm min-h-max">Text</label>
          <textarea
            cols={10}
            rows={10}
            className="bg-zinc-50 h-32 border border-zinc-300 px-2 py-3 w-full"
            type="text"
            placeholder="Write here your parahraph"
            value={service.desc}
            onChange={(e) => setService({ ...service, desc: e.target.value })}
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
            onClick={deleteServiceHandler}
            className="ml-1 font-display py-1 px-4 bg-red-400 text-white text-sm rounded"
          >
            Delete
          </button>
        </div>
      </form>
    </PopUpModel>
  );
};

export default ServiceEdit;
