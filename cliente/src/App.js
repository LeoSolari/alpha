import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
