// In-memory cache for suggestions with TTL
const suggestCache = {};
const SUGGEST_TTL = 5 * 60 * 1000; // 5 minutes

import express from "express";
import cors from "cors";
import _ from "lodash";
import dotenv from "dotenv";
import https from "https";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
dotenv.config();

var API_KEY = process.env.API_KEY;
const PORT = process.env.PORT || 5000;

let gameName = "";

app.get("/", (req, res) => {
  res.send("Server Working");
});

app.get("/api/suggest", async (req, res) => {
  const query = req.query.query;
  if (!query || query.length < 2) return res.json([]);
  const cacheKey = query.toLowerCase();
  const now = Date.now();
  if (suggestCache[cacheKey] && now - suggestCache[cacheKey].ts < SUGGEST_TTL) {
    return res.json(suggestCache[cacheKey].data);
  }
  const url = `https://api.rawg.io/api/games?search=${encodeURIComponent(
    query
  )}&page_size=7&key=${API_KEY}`;
  https
    .get(url, (response) => {
      let rawData = "";
      response.on("data", (chunk) => {
        rawData += chunk;
      });
      response.on("end", () => {
        try {
          const parsed = JSON.parse(rawData);
          const suggestions = (parsed.results || []).map((g) => ({
            name: g.name,
            slug: g.slug,
            released: g.released,
          }));
          suggestCache[cacheKey] = { data: suggestions, ts: now };
          res.json(suggestions);
        } catch {
          res.json([]);
        }
      });
    })
    .on("error", () => res.json([]));
});

app.post("/api/gameName", async (req, res) => {
  console.log("Getting Game Data");
  gameName = _.kebabCase([req.body.gameName]);
  let url = "https://api.rawg.io/api/games/" + gameName + "?key=" + API_KEY;
  var bool = false;

  await getGameData(gameName, url)
    .then((gameData) => {
      if (gameData.redirect) {
        gameName = gameData.slug;
        bool = true;
      } else {
        res.send(gameData);
        bool = false;
      }
    })
    .catch((error) => {
      console.log(error);
    });

  if (bool) {
    url = "https://api.rawg.io/api/games/" + gameName + "?key=" + API_KEY;
    console.log("Getting Game Data Again");

    await getGameData(gameName, url).then((gameData) => {
      res.send(gameData);
    });
  }
});

app.post("/api/editions", async (req, res) => {
  console.log("Getting editions list");
  gameName = _.kebabCase([req.body.gameName]);
  let url =
    "https://api.rawg.io/api/games/" + gameName + "/additions?key=" + API_KEY;

  await getGameData(gameName, url).then((gameData) => {
    res.send(gameData);
  });
});

app.post("/api/screenshots", async (req, res) => {
  console.log("Getting screenshots");
  gameName = _.kebabCase([req.body.gameName]);
  let url =
    "https://api.rawg.io/api/games/" + gameName + "/screenshots?key=" + API_KEY;

  await getGameData(gameName, url).then((gameData) => {
    res.send(gameData);
  });
});

function getGameData(gameName, url) {
  return new Promise((resolve, reject) => {
    let gameData;
    https.get(url, (response) => {
      let rawGameData = "";
      response.on("data", (chunk) => {
        rawGameData += chunk;
      });

      response.on("end", () => {
        gameData = JSON.parse(rawGameData);
        resolve(gameData);
      });
    });
  });
}

app.listen(PORT, function (req, res) {
  console.log("Server started on port " + PORT);
});
