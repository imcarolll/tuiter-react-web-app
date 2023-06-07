import React from "react";
import TuitItem
  from "./tuit-item";
import {useSelector} from "react-redux";
import TuitStat from "./tuit-stats";


const TuitList = () => {
  const { tuits } = useSelector(state => state.tuits)
 return(
  <ul className="list-group">
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