import React, {useEffect} from "react";
import TuitItem
  from "./tuit-item";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../services/tuits-thunks";
import TuitStat from "./tuit-stats";

  
const TuitList = () => {
  const { tuits, loading } = useSelector(state => state.tuits)
  const dispatch = useDispatch();
 useEffect(() => {
   dispatch(findTuitsThunk())
 }, [])

 return(
  <ul className="list-group">
    { loading &&
       <li className="list-group-item">
         Loading...
       </li>
     }

      {
       tuits.map(tuit =>
        <React.Fragment key={tuit._id}>
            <TuitItem tuit={tuit} />
        </React.Fragment>
       )
     }
  </ul>
 );
};

export default TuitList;