import React from "react";
import { useDispatch } from "react-redux";
import { addNewExp } from "../../../store/expSlice";
import { PlusSmallIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import swal from "sweetalert";

const ExpAddNew = () => {
  const dispatch = useDispatch();

  const addNewExpHandler = () => {
    const newExp = {

      id: Math.floor(Math.random() * 2000),
      title: "your title here",
      paragrah: "your paragrah here",
      position: "your position here",
      work: "your work here",
      date: "2015 - 2016",
      linkes_id: 4,
    };
    console.log("Clicked");

    axios.post('api/linkes_Content/addLinkes_Content', newExp ).then( res => {

      if(res.data.status === 200)
      {
        swal("Success",res.data.message,"success");
        localStorage.setItem('_title',res.data.title);
        localStorage.setItem('_paragrah',res.data.paragrah);
        localStorage.setItem('_position',res.data.position);
        localStorage.setItem('_work',res.data.work);
        localStorage.setItem('_date',res.data.date);
        
        /*swal({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
        });*/
      }
      else if(res.data.status === 400)
      {
        swal(res.data.validation_errors,"success");
    
      }
        

    });

    //dispatch(addNewExp(newExp));
  };
  return (
    <button
      type="submit"
      onClick={addNewExpHandler}
      className="flex justify-center items-center mt-4 button-add bg-green-400 z-20 rounded w-full h-12"
    >
      <PlusSmallIcon className="w-4 h-4 text-white stroke-2" />
    </button>
  );
};

export default ExpAddNew;
