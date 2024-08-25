import React from "react";
import { FaFile } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion"


function Cards({ data, reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden">
      <FaFile />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full  left-0">
        <div className="flex items-center  justify-between px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 flex bg-zinc-200 items-center rounded-full justify-center">
            {" "}
            {data.close ? (
              <IoCloseCircleSharp />
            ) : (
              <MdOutlineFileDownload size=".7em" color="#000" />
            )}
          </span>
        </div>
        {
          data.tag.isOpen && (<div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600":"bg-green-600"} flex items-center justify-center`}>

            <h3 className="text-sm font-semibold"> {data.tag.tagTitle}</h3>
          </div>) 
        }
        
      </div>
    </motion.div>
  );
}

export default Cards;
