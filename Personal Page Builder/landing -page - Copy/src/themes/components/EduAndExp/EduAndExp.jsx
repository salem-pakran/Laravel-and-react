import React, { useEffect ,useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { fetchExps } from "../../../store/expSlice";
import Exp from "./Exp";
import ExpAddNew from "./ExpAddNew";
import axios from "axios";
import swal from "sweetalert";

const EduAndExp = () => {

  const [exp, setExp] = useState({
    exps:[],
  });
  useEffect(() => {

    axios.get('api/linkes_Content/fatchLinkes_Content' ).then( res  => {
      
      setExp({...exp , exps: res.data.News});
      console.log(res.data.News);

    });
  }, []);



  return (
    <div className="exp-container py-24">
      <div className="text-center flex justify-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-zinc-800 mb-8 dark:text-zinc-100 sm:text-5xl w-2/6">
          Business and client partnerships for projects
        </h2>
      </div>
      <div className="container max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-1 gap-14">
          <div>
            <Exp data={exp.exps} />
          </div>
        </div>
        <div>
          <ExpAddNew />
        </div>
      </div>
    </div>
  );
};

export default EduAndExp;
