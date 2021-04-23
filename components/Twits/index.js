import Avatar from "../Avatar";

const Twits = ({ id, username, message, avatar, createdAt }) => {
  const normalizedDate = new Date(createdAt.seconds).toString();
  return (
    <>
      <article>
        <div>
          <Avatar alt={username} src={avatar} />
        </div>
        <section>
          <header>
            <strong>{username}</strong>
            <date>{normalizedDate}</date>
          </header>
          <p>{message}</p>
        </section>
      </article>

      <style jsx>
        {`
          article {
            display: flex;
            padding: 10px 15px;
            border-bottom: 2px solid #eee;
          }

          div {
            padding-right: 10px;
          }
          p {
            margin: 0;
          }
        `}
      </style>
    </>
  );
};

export default Twits;
