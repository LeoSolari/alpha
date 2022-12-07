import React from "react";
import { faListDots, faCancel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { deletePost } from "../actions/posts";
import { useLocation } from "react-router-dom";

const Card = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  const useAdmin = useLocation();

  return (
    <div className="flex justify-center p-2">
      <div className="w-5/6 p-2">
        <div className="h-full bg-white rounded-lg hover:bg-black hover:underline decoration-orange-400  hover:text-white border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700">
          {useAdmin.pathname === "/admin" && (
            <div className="absolute flex justify-around">
              <div className=" text-black  p-2 ">
                <FontAwesomeIcon
                  className="cursor-pointer text-white p-2 bg-black rounded-sm hover:text-blue-500"
                  icon={faListDots}
                  onClick={() => setCurrentId(post._id)}
                />
              </div>
              <div className=" text-black  p-2 ">
                <FontAwesomeIcon
                  className="cursor-pointer text-white p-2 bg-black rounded-sm hover:text-red-700"
                  icon={faCancel}
                  onClick={() => dispatch(deletePost(post._id))}
                />
              </div>
            </div>
          )}
          <img
            className="rounded-lg h-72 w-full object-fill border-2  border-orange-400 "
            src={post.selectedFile}
            alt="img"
          />

          <div className="p-5 flex h-72 justify-between flex-col">
            <h1 className=" text-center text-2xl cursor-pointer font-bold tracking-tight  ">
              {post.title}
            </h1>
            <div className="text-center md:p-8">{post.message}</div>
            <div className="mb-3 align-baseline hover:text-white  dark:text-gray-400 text-right">
              <p className="text-3xl  font-bold">${post.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
