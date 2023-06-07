import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import TuitStat from "./tuit-stats";
import {useDispatch} from "react-redux";
import { deleteTuit } from "../reducers/tuits-reducer";
import { IoCloseSharp } from "react-icons/io5";


const TuitItem = ({tuit} ) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
 return(
  <li className="list-group-item">
    <div className="row">
        <div className="col-2">
            <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`}/>
        </div>
        <div className="col-10">
            <div>
                <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}><IoCloseSharp /></i></div>
            <div className="d-flex align-items-center">
                <span className="fw-bold">{tuit.userName}</span>
                <span>{tuit.icon} {tuit.handle} . {tuit.time}</span>
            </div>
        <div>{tuit.tuit}</div>
        <div className="mt-2"></div>
        <TuitStat tuit={tuit} />
        
        
   </div>
   
   </div>
  </li>
 );
};
export default TuitItem;