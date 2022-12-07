import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    price: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      price: "",
      selectedFile: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
      clear();
    } else {
      dispatch(createPost(postData));
      clear();
    }
  };

  return (
    <div className="bg-black flex justify-center py-2">
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="bg-[#ff8925] rounded-xl p-4"
      >
        <p className="font-bold text-center text-2xl">Agrega un item</p>
        <div className="p-4">
          <input
            placeholder="Nombre del producto"
            name="title"
            className="p-2 rounded-sm"
            label="title"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </div>
        <div className="p-4">
          <input
            placeholder="Descripcion"
            name="message"
            className="p-2 rounded-sm"
            label="message"
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
        </div>
        <div className="p-4">
          <input
            type="number"
            placeholder="Precio"
            name="price"
            className="p-2 rounded-sm"
            label="price"
            value={postData.price}
            onChange={(e) =>
              setPostData({ ...postData, price: e.target.value })
            }
          />
        </div>

        <div className="p-4">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white hover:bg-[#fd4f1a] w-full h-12 rounded-xl font-bold text-xl"
        >
          {currentId ? "Editar" : "Agregar"}
        </button>
      </form>
    </div>
  );
};

export default Form;
