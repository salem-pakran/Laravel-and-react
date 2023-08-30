import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateExp, deleteExp } from "../../../store/expSlice";
import axios from "axios";
import swal from "sweetalert";

const ExpEdit = ({ id, title, paragrah, position, work, date }) => {
  const dispatch = useDispatch();

  const [expEdit, setExpEdit] = useState({
    id,
    title,
    paragrah,
    position,
    work,
    date,
    error_list:[],
  });

  const sumbitEditHandler = (e) => {
    e.preventDefault();
    const data ={
      id: expEdit.id,
      title: expEdit.title,
      paragrah: expEdit.paragrah,
      position: expEdit.position,
      work: expEdit.work,
      date: expEdit.date,

    }
    
    axios.put(`api/linkes_Content/updateLinkes_Content/${id}`, data ).then( res  => {
      if(res.data.status === 200)
      {
        swal("Success",res.data.message,"success");
      }
      else if(res.data.status === 422)
      {
        setExpEdit({...expEdit, error_list: res.data.validation_errors});
        /*"warning", "error", "success" and "info".*/
        //swal("warning",res.data.message,"warning");
      }else if(res.data.status === 401)
      {
        swal("warning",res.data.message,"warning");
      }
      
    });
    //dispatch(updateExp(expEdit));
  };

  const deleteExpHandler = () => {
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

    //dispatch(deleteExp(id));
  };

  return (
    <div className="absolute bg-white rounded py-3 px-4 border border-zinc-400 left-2/4 -translate-x-2/4 z-50 shadow-lg">
      <form onSubmit={sumbitEditHandler}>
        <div className="w-1/2 flex items-center">
          <label className="mr-2 text-sm min-h-max">Title</label>
          <input
            className="bg-zinc-50 h-8 border border-zinc-300 px-2"
            type="text"
            value={expEdit.title}
            onChange={(e) => setExpEdit({ ...expEdit, title: e.target.value })}
          />
        </div>

        <div className="w-1/2 flex items-center">
          <label className="mr-2 text-sm min-h-max">Paragrah</label>
          <input
            className="bg-zinc-50 h-8 border border-zinc-300 px-2"
            type="text"
            value={expEdit.paragrah}
            onChange={(e) =>
              setExpEdit({ ...expEdit, paragrah: e.target.value })
            }
          />
        </div>

        <div className="w-1/2 flex items-center">
          <label className="mr-2 text-sm min-h-max">Position</label>
          <input
            className="bg-zinc-50 h-8 border border-zinc-300 px-2"
            type="text"
            value={expEdit.position}
            onChange={(e) =>
              setExpEdit({ ...expEdit, position: e.target.value })
            }
          />
        </div>

        <div className="w-1/2 flex items-center">
          <label className="mr-2 text-sm min-h-max">Work</label>
          <input
            className="bg-zinc-50 h-8 border border-zinc-300 px-2"
            type="text"
            value={expEdit.work}
            onChange={(e) => setExpEdit({ ...expEdit, work: e.target.value })}
          />
        </div>

        <div className="w-1/2 flex items-center">
          <label className="mr-2 text-sm min-h-max">Date</label>
          <input
            className="bg-zinc-50 h-8 border border-zinc-300 px-2"
            type="text"
            value={expEdit.date}
            onChange={(e) => setExpEdit({ ...expEdit, date: e.target.value })}
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
            onClick={deleteExpHandler}
            className="ml-1 font-display py-1 px-4 bg-red-400 text-white text-sm rounded"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpEdit;
