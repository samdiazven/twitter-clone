const proob = [
  {
    id: 1,
    avatar:
      "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png",
    message: "message from proob fot clone of twitter",
    username: "samuel diaz",
  },
  {
    id: 2,
    avatar:
      "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png",
    message: "message from proob fot clone of twitter",
    username: "samuel diaz",
  },
  {
    id: 3,
    avatar:
      "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png",
    message: "message from proob fot clone of twitter",
    username: "samuel diaz",
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(proob));
};
