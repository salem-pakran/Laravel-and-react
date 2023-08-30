import React from "react";
import { PlusSmallIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { addNewService } from "../../../store/servicesSlice";
import axios from "axios";
import swal from "sweetalert";

const ServiceAdd = () => {
 

  const addNewServiceHandler = async(e) => {
    e.preventDefault();
    const newService = {
      
      id: Math.floor(Math.random() * 2000),
      title: "your title here",
      desc: "your parahraph here",
      linkes_id: 2,
      error_list: [],
    };
    console.log("Clicked");
    
    await axios.post('api/linkes_Content/addLinkes_Content', newService ).then( res => {

      if(res.data.status === 200)
      {
        swal("Success",res.data.message,"success");

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
    //dispatch(addNewService(newService));
    
  };
  return (
    <button
      type="submit"
      onClick={addNewServiceHandler}
      className="flex justify-center items-center mt-4 button-add bg-green-400 z-20 rounded w-full h-12"
    >
      <PlusSmallIcon className="w-4 h-4 text-white stroke-2" />
    </button>
  );
};

export default ServiceAdd;
