import { useState } from "react";
import Button from "../../../components/Button";
import useUser from "../../../hooks/useUser";
import { addTwitt } from "../../../firebase/client";
import { useRouter } from "next/router";
const TWITT_STATE = {
  USER_NOT_KNWON: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: 3,
};

const CreateTweet = () => {
  const user = useUser();
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [status, setState] = useState(TWITT_STATE.USER_NOT_KNWON);
  const handleSubmit = (e) => {
    e.preventDefault();

    setState(TWITT_STATE.LOADING);
    addTwitt({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      username: user.username,
    }).then(() => {
      router.push("/home").catch((err) => {
        console.log(err);
        setState(TWITT_STATE.ERROR);
      });
    });
  };

  const buttonIsDisabled = !message.length || status === TWITT_STATE.LOADING;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Que esta pasando?"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div>
          <Button disabled={buttonIsDisabled}>Twittear</Button>
        </div>
      </form>
      <style jsx>{`
        div {
          padding: 15px;
        }
        textarea {
          border: 0;
          padding: 15px;
          font-size: 21px;
          resize: none;
          width: 100%;
          outline: 0;
          min-height: 200px;
        }
      `}</style>
    </>
  );
};

export default CreateTweet;
