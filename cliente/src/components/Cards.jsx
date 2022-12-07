import { useSelector } from "react-redux";

import Card from "./Card";

const Cards = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return !posts.length ? null : (
    <div className="bg-gray-800 grid  md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div key={post._id}>
          <Card post={post} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
