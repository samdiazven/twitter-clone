import { useState, useEffect } from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import Button from "../components/Button";
import { LoginWithGithub, onAuthStateChanged } from "../firebase/client";
import { colors } from "../styles/themes";
import Avatar from "../components/Avatar";

export default function Home() {
  const [user, setUser] = useState(null);
  const handleClick = () => {
    LoginWithGithub()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  return (
    <>
      <Head>
        <title>twitter clone</title>
      </Head>

      <AppLayout>
        <section>
          <img
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
            alt="logo"
          />
          <h1>Twitter</h1>
          <h2>Clon de twitter para practicar skills</h2>
          <div>
            {user === null ? (
              <Button onClick={handleClick}>Login with GitHub</Button>
            ) : (
              <div>
                <Avatar
                  src={user.avatar}
                  alt={user.username}
                  text={user.username}
                  whitText
                />
              </div>
            )}
          </div>
        </section>
      </AppLayout>
      <style jsx>
        {`
          section {
            display: grid;
            place-items: center;
            height: 100%;
            place-content: center;
          }

          div {
            margin-top: 15px;
          }
          img {
            width: 120px;
          }
          h1 {
            font-weight: 800;
            color: ${colors.primary};
            margin-bottom: 16px;
          }
          h2 {
            font-size: 18px;
            color: ${colors.secondary};
          }
        `}
      </style>
    </>
  );
}
