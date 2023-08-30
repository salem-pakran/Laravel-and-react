import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateHeaderTheme } from "../../../store/headerThemeSlice1";

const TitleEdit = ({ title, para, id }) => {
  const dispatch = useDispatch();

  const [contentEdit, setContentEdit] = useState({
    id,
    title,
    para,
    error_list:[],
  });

  const sumbitEditTitleHandler = (e) => {
    e.preventDefault();
    const data ={
      title: contentEdit.title,
      para: contentEdit.para,

    }
    axios.post(`api/linkes_Content/updateLinkes_Content/${id}`, data ).then( res  => {
      if(res.data.status === 200)
      {
        swal("Success",res.data.message,"success");
      }
      else if(res.data.status === 422)
      {
        setContentEdit({...contentEdit, error_list: res.data.validation_errors});
        /*"warning", "error", "success" and "info".*/
        //swal("warning",res.data.message,"warning");
      }else if(res.data.status === 401)
      {
        swal("warning",res.data.message,"warning");
      }
      
    });
    //dispatch(updateHeaderTheme(contentEdit));
  };

  return (
    <div className="absolute bg-white rounded py-3 px-4 border border-zinc-400 left-2/4 -translate-x-2/4 z-50 shadow-lg w-96">
      <form onSubmit={sumbitEditTitleHandler}>
        <div className="mt-2 w-1/2 flex items-center">
          <label className="mr-2 text-sm min-h-max">Title</label>
          <input
            className="bg-zinc-50 h-8 border border-zinc-300 px-2"
            placeholder={contentEdit.title}
            value={contentEdit.title}
            onChange={(e) =>
              setContentEdit({ ...contentEdit, title: e.target.value })
            }
            type="text"
          />
        </div>
        <div className="flex items-start mt-4">
          <label className="mr-2 text-sm min-h-max">Text</label>
          <textarea
            cols={10}
            rows={10}
            className="bg-zinc-50 h-32 border border-zinc-300 px-2 py-3 w-full"
            type="text"
            placeholder="Write here your parahraph"
            value={contentEdit.para}
            onChange={(e) =>
              setContentEdit({ ...contentEdit, para: e.target.value })
            }
          />
        </div>
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

export default TitleEdit;
