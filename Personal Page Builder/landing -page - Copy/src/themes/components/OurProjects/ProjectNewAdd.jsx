import { useState } from "react";
import { PlusSmallIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { addNewSlideProject } from "../../../store/projectsSlice";
import axios from "axios";
import swal from "sweetalert";

const ProjectNewAdd = () => {


  const addNewProjectHandler = (e) => {
    e.preventDefault();
    const newProject = {
      id: Math.floor(Math.random() * 2000),
      title: "Figma icon templates",
      desc: "Pefectly structured templates for quickly designing new icons at dozens of common sizes.",
      linkes_id: 3,
      error_list: [],
  
      //date: تلقائيا يتم اضافته
    };
    console.log("Clicked");
    
    axios.post('api/linkes_Content/addLinkes_Content', newProject ).then( res => {
      console.log(res.data.Linkes_Content);
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
    //dispatch(addNewSlideProject(newProject));
  };

  return (
    
    <button
      type="submit"
      onClick={addNewProjectHandler}
      className="button-add absolute bg-green-400 z-20 rounded-full left-1/3"
    >
      <PlusSmallIcon className="w-4 h-4 text-white stroke-2" />
    </button>
  );
};

export default ProjectNewAdd;
