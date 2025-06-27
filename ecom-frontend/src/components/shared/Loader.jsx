import { ClipLoader } from "react-spinners";
import * as React from "react";

const Loader = ({ text }) => {
  <div className="flex justify-center items-center w-full h-[450px]">
    <div className="flex flex-col items-center gap-1">
      return <ClipLoader 
            loading={true}
            color="grey" 
            size={96} 
          />
          <p className="text-slate-800">"Please wait...
            {text ? text : "Please-wait..."}
          </p>
    </div>
  </div>
};

export default Loader;