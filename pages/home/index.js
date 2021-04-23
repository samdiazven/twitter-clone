import { useState, useEffect } from "react";
import Twit from "../../components/Twits";
import { fetchLatestTwitts } from "../../firebase/client";
import useUser from "../../hooks/useUser";

const HomePage = () => {
  const [timeline, setTimeLine] = useState([]);
  const user = useUser();
  useEffect(() => {
    user &&
      fetchLatestTwitts()
        .then(setTimeLine)
        .catch((err) => console.log(err));
  }, [user]);
  return (
    <>
      <div>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(({ id, content, avatar, username, createdAt }) => (
            <Twit
              key={id}
              id={id}
              message={content}
              avatar={avatar}
              username={username}
              createdAt={createdAt}
            />
          ))}
        </section>
        <nav></nav>
      </div>
      <style jsx>
        {`
          header {
            display: flex;
            background: #ffffffaa;
            backdrop-filter: blur(5px);
            position: sticky;
            height: 49px;
            top: 0;
            border-bottom: 1px solid #ccc;
            width: 100%;
            align-items: center;
          }
          section {
            padding-top: 29px;
          }
          nav {
            bottom: 0;
            position: sticky;
            border-top: 1px solid #eee;
            width: 100%;
            height: 49px;
            background: #fff;
          }
          h2 {
            font-weight: 800;
            font-size: 21px;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};
export default HomePage;
