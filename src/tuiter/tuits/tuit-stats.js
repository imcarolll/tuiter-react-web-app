import React, {useState} from "react";
import { FaRegHeart, FaHeart, FaRegComments, FaRetweet,  } from "react-icons/fa";
import { AiOutlineUpload, AiFillDislike } from "react-icons/ai";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";


const TuitStat = (
 {
   tuit = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
     "image": "tesla.png",
     "liked": true,
     "replies": 555,
     "retuits": 87234,
     "likes": 23456,
     "handle": "@spacex",
     "tuit": "This morning at 12:34 EST Earth time, a convoy of Tesla CyberTrucks drove across the Martian landscape after picking up the Curiosity, Sojourner, Spirit, and Perserance on their 6' beds"
   }
 }
) => {
  const [liked, setLiked] = useState(tuit.liked);
  const dispatch = useDispatch();
  const toggleLike = () => {
    setLiked(!liked);
  };
 return(
   <div className="row">

        <div className="col">
          {<FaRegComments/>} {tuit.replies}
        </div>
        <div className="col">
          {<FaRetweet/>} {tuit.retuits}
        </div>
        <div className="col">
        <FaHeart
            className="text-danger"
            onClick={() =>
              dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
            }
          />
          <span className="ms-2">{tuit.likes}</span>
        </div>  
        <div className="col">
        <AiFillDislike
            className="text-danger"
            onClick={() =>
              dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1 }))
            }
          />
          <span className="ms-2">{tuit.dislikes}</span>
        </div> 
        {/* <i onClick={toggleLike}>
        {liked ? (<div>
          <FaHeart style={{color:"red"}}/>{tuit.likes + 1}</div>) : 
        (<div>
          <FaRegHeart />{tuit.likes}</div>)} 
        </i>
        */}
        
        <div className="col">
          {<AiOutlineUpload/>}
        </div>
    </div>

  
 );
};
export default TuitStat;