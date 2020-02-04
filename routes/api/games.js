const express = require("express");
const router = express.Router();
const axios = require("axios");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Search for games from third-party APIs
router.get("/board", (req, res) => {
  const queryUrl = `https://www.boardgameatlas.com/api/search?name=${req.body.name}&fuzzy_match=true&client_id=SB1VGnDv7M`;
  axios.get(queryUrl).then(response => {
    res.json(response.data);
  }).catch(err => console.log(err));
});

router.get("/video", async function(req, res) {
  const apiKey = "6e8c7cd85d2a38d0c9484d9a593046a7";
  const queryUrl = "https://api-v3.igdb.com/games";
  const response = await axios({
    url: queryUrl,
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'user-key': apiKey
    },
    data: `fields name; search "${req.body.name}";`
  });
  res.json(response.data);
});

// Load Game model
// const Games = require("../../models/Games");

// router.post("/", (req, res) => {
//   console.log(req.body);
//   Games.create({ x: req.body.x }).then(game => {
//     res.json(game);
//   });
// });

// router.get("/my-games/:userId", (req, res) => {
//   console.log("happy => ", req.params.userId);
//   Games.find({
//     $or: [
//       {
//         x: req.params.userId
//       },
//       {
//         o: req.params.userId
//       }
//     ]
//   }).then(games => {
//     res.json({ games });
//   });
// });

// router.get("/open-games", (req, res) => {
//   console.log("sad => ", req.params.userId);
//   Games.find({
//     $or: [
//       // {
//       //   x: "openopenopen"
//       // },
//       {
//         o: "openopenopen"
//       }
//     ]
//   })
//     .then(games => {
//       res.json({ games });
//     })
//     .catch(err => {
//       // todo: found nothing... but what if real error
//       res.json({ games: [] });
//     });
// });

// router.get("/:gameId", (req, res) => {
//   console.log("gameId => ", req.params.gameId);
//   Games.findById(req.params.gameId).then(game => {
//     res.json({ game });
//   });
// });

// router.put("/:gameId", (req, res) => {
//   console.log("gameId => ", req.params.gameId);
//   console.log("game => ", req.headers);
//   // verify a token symmetric
//   jwt.verify(
//     req.headers.authorization.split(" ")[1],
//     keys.secretOrKey,
//     function(err, decoded) {
//       console.log("err =>", err); // bar
//       console.log("mega =>", decoded); // bar
//       const userId = decoded.id;
//       Games.findById(req.params.gameId).then(game => {
//         if (game.currentTurn !== req.body.currentTurn) {
//           console.log("hi => ", game);
//           return res.sendStatus(401);
//         }
//         if (`${game[game.currentTurn]}` !== userId) {
//           return res.sendStatus(401);
//         }
//         Games.updateOne(
//           { _id: req.params.gameId },
//           {
//             $set: {
//               game: req.body.game,
//               currentTurn: game.currentTurn === "x" ? "o" : "x"
//             }
//           },
//           function(err, data) {
//             // Updated at most one doc, `res.modifiedCount` contains the number
//             // of docs that MongoDB updated
//             console.log(data);
//             res.send(200);
//           }
//         );
//       });
//     }
//   );
// });

// router.put("/join/:gameId", (req, res) => {
//   console.log("gameId => ", req.params.gameId);
//   console.log("game => ", req.headers);
//   // verify a token symmetric
//   jwt.verify(
//     req.headers.authorization.split(" ")[1],
//     keys.secretOrKey,
//     function(err, decoded) {
//       console.log("err =>", err); // bar
//       console.log("mega =>", decoded); // bar
//       const userId = decoded.id;
//       Games.findById(req.params.gameId).then(game => {
//         if (game.currentTurn !== req.body.currentTurn) {
//           console.log("hi => ", game);
//           return res.sendStatus(401);
//         }
//         // if (`${game[game.currentTurn]}` !== userId) {
//         //   return res.sendStatus(401);
//         // }
//         Games.updateOne(
//           { _id: req.params.gameId },
//           {
//             $set: {
//               o: mongoose.Types.ObjectId(req.body.o)
//             }
//           },
//           function(err, data) {
//             // Updated at most one doc, `res.modifiedCount` contains the number
//             // of docs that MongoDB updated
//             console.log(data);
//             res.send(200);
//           }
//         );
//       });
//     }
//   );
// });
module.exports = router;
