import slack from "../../utils/slack";


export default (req, res) => {
  const { targetLaneId } = JSON.parse(req.body);
  console.log(targetLaneId, JSON.parse(req.body));
  switch (targetLaneId) {
    case "1":
      console.log("Телега");
      break;
    case "2":

      break;
    case "3":
      console.log("Слак");
      slack(req,res);
      break;
    case "4":
      break;
  }
};
