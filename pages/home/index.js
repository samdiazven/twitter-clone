import { useState, useEffect } from "react";
import Twit from "../../components/Twits";

const HomePage = () => {
  const [timeline, setTimeLine] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/statuses/time_line")
      .then((res) => res.json())
      .then(setTimeLine)
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(({ id, message, avatar, username }) => (
            <Twit
              key={id}
              id={id}
              message={message}
              avatar={avatar}
              username={username}
            />
          ))}
        </section>
        <nav></nav>
      </div>
      <style jsx>
        {`
          header {
            display: flex;
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
            border-top: 1px solid #ccc;
            width: 100%;
            height: 49px;
          }
          h2 {
            font-weight: 800;
            font-size: 21px;
            padding: 10px;
          }
        `}
      </style>
    </>
  );
};
export default HomePage;
