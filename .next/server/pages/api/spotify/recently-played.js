"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/spotify/recently-played";
exports.ids = ["pages/api/spotify/recently-played"];
exports.modules = {

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "(api)/./pages/api/spotify/recently-played.js":
/*!**********************************************!*\
  !*** ./pages/api/spotify/recently-played.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_spotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/spotify */ \"(api)/./utils/spotify.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (_, res) => {\n  const response = await (0,_utils_spotify__WEBPACK_IMPORTED_MODULE_0__.getLastPlayed)();\n  const {\n    items\n  } = await response.json();\n  const tracks = items.slice(0, 10).map(item => ({\n    artist: item.track.artists.map(_artist => _artist.name).join(', '),\n    songUrl: item.track.external_urls.spotify,\n    title: item.track.name,\n    albumImageUrl: item.track.album.images[0].url,\n    played: item.played_at,\n    explicit: item.track.explicit\n  }));\n  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');\n  return res.status(200).json({\n    tracks\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3BvdGlmeS9yZWNlbnRseS1wbGF5ZWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBLGlFQUFlLE9BQU9DLENBQVAsRUFBVUMsR0FBVixLQUFrQjtBQUMvQixRQUFNQyxRQUFRLEdBQUcsTUFBTUgsNkRBQWEsRUFBcEM7QUFFQSxRQUFNO0FBQUVJLElBQUFBO0FBQUYsTUFBWSxNQUFNRCxRQUFRLENBQUNFLElBQVQsRUFBeEI7QUFFQSxRQUFNQyxNQUFNLEdBQUdGLEtBQUssQ0FBQ0csS0FBTixDQUFZLENBQVosRUFBZSxFQUFmLEVBQW1CQyxHQUFuQixDQUF3QkMsSUFBRCxLQUFXO0FBQy9DQyxJQUFBQSxNQUFNLEVBQUVELElBQUksQ0FBQ0UsS0FBTCxDQUFXQyxPQUFYLENBQW1CSixHQUFuQixDQUF3QkssT0FBRCxJQUFhQSxPQUFPLENBQUNDLElBQTVDLEVBQWtEQyxJQUFsRCxDQUF1RCxJQUF2RCxDQUR1QztBQUUvQ0MsSUFBQUEsT0FBTyxFQUFFUCxJQUFJLENBQUNFLEtBQUwsQ0FBV00sYUFBWCxDQUF5QkMsT0FGYTtBQUcvQ0MsSUFBQUEsS0FBSyxFQUFFVixJQUFJLENBQUNFLEtBQUwsQ0FBV0csSUFINkI7QUFJL0NNLElBQUFBLGFBQWEsRUFBRVgsSUFBSSxDQUFDRSxLQUFMLENBQVdVLEtBQVgsQ0FBaUJDLE1BQWpCLENBQXdCLENBQXhCLEVBQTJCQyxHQUpLO0FBSy9DQyxJQUFBQSxNQUFNLEVBQUVmLElBQUksQ0FBQ2dCLFNBTGtDO0FBTS9DQyxJQUFBQSxRQUFRLEVBQUVqQixJQUFJLENBQUNFLEtBQUwsQ0FBV2U7QUFOMEIsR0FBWCxDQUF2QixDQUFmO0FBU0F4QixFQUFBQSxHQUFHLENBQUN5QixTQUFKLENBQ0UsZUFERixFQUVFLGdEQUZGO0FBS0EsU0FBT3pCLEdBQUcsQ0FBQzBCLE1BQUosQ0FBVyxHQUFYLEVBQWdCdkIsSUFBaEIsQ0FBcUI7QUFBRUMsSUFBQUE7QUFBRixHQUFyQixDQUFQO0FBQ0QsQ0FwQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yeWFuLXBhcmFnLW5leHQvLi9wYWdlcy9hcGkvc3BvdGlmeS9yZWNlbnRseS1wbGF5ZWQuanM/YWI1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRMYXN0UGxheWVkIH0gZnJvbSAnQHV0aWxzL3Nwb3RpZnknO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoXywgcmVzKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0TGFzdFBsYXllZCgpO1xuXG4gIGNvbnN0IHsgaXRlbXMgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICBjb25zdCB0cmFja3MgPSBpdGVtcy5zbGljZSgwLCAxMCkubWFwKChpdGVtKSA9PiAoe1xuICAgIGFydGlzdDogaXRlbS50cmFjay5hcnRpc3RzLm1hcCgoX2FydGlzdCkgPT4gX2FydGlzdC5uYW1lKS5qb2luKCcsICcpLFxuICAgIHNvbmdVcmw6IGl0ZW0udHJhY2suZXh0ZXJuYWxfdXJscy5zcG90aWZ5LFxuICAgIHRpdGxlOiBpdGVtLnRyYWNrLm5hbWUsXG4gICAgYWxidW1JbWFnZVVybDogaXRlbS50cmFjay5hbGJ1bS5pbWFnZXNbMF0udXJsLFxuICAgIHBsYXllZDogaXRlbS5wbGF5ZWRfYXQsXG4gICAgZXhwbGljaXQ6IGl0ZW0udHJhY2suZXhwbGljaXRcbiAgfSkpO1xuXG4gIHJlcy5zZXRIZWFkZXIoXG4gICAgJ0NhY2hlLUNvbnRyb2wnLFxuICAgICdwdWJsaWMsIHMtbWF4YWdlPTYwLCBzdGFsZS13aGlsZS1yZXZhbGlkYXRlPTMwJ1xuICApO1xuXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHRyYWNrcyB9KTtcbn07Il0sIm5hbWVzIjpbImdldExhc3RQbGF5ZWQiLCJfIiwicmVzIiwicmVzcG9uc2UiLCJpdGVtcyIsImpzb24iLCJ0cmFja3MiLCJzbGljZSIsIm1hcCIsIml0ZW0iLCJhcnRpc3QiLCJ0cmFjayIsImFydGlzdHMiLCJfYXJ0aXN0IiwibmFtZSIsImpvaW4iLCJzb25nVXJsIiwiZXh0ZXJuYWxfdXJscyIsInNwb3RpZnkiLCJ0aXRsZSIsImFsYnVtSW1hZ2VVcmwiLCJhbGJ1bSIsImltYWdlcyIsInVybCIsInBsYXllZCIsInBsYXllZF9hdCIsImV4cGxpY2l0Iiwic2V0SGVhZGVyIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/spotify/recently-played.js\n");

/***/ }),

/***/ "(api)/./utils/spotify.js":
/*!**************************!*\
  !*** ./utils/spotify.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNowPlaying\": () => (/* binding */ getNowPlaying),\n/* harmony export */   \"getLastPlayed\": () => (/* binding */ getLastPlayed),\n/* harmony export */   \"getTopTracks\": () => (/* binding */ getTopTracks),\n/* harmony export */   \"getPodcastPlaying\": () => (/* binding */ getPodcastPlaying),\n/* harmony export */   \"getLastPlayedPodcast\": () => (/* binding */ getLastPlayedPodcast),\n/* harmony export */   \"getShows\": () => (/* binding */ getShows),\n/* harmony export */   \"getPlaylists\": () => (/* binding */ getPlaylists),\n/* harmony export */   \"getPlayer\": () => (/* binding */ getPlayer)\n/* harmony export */ });\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! querystring */ \"querystring\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_0__);\n // https://leerob.io/blog/spotify-api-nextjs\n// https://benwiz.com/blog/create-spotify-refresh-token/\n// https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}redirect_uri=http%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing%20user-top-read\n\nconst client_id = process.env.SPOTIFY_CLIENT_ID;\nconst client_secret = process.env.SPOTIFY_CLIENT_SECRET;\nconst refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;\nconst NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;\nconst NOW_PLAYING_PODCAST_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing/?additional_types=episode`;\nconst LAST_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;\nconst LAST_PLAYED_PODCAST_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played/?additional_types=episode`;\nconst TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;\nconst SHOWS_ENDPOINT = `https://api.spotify.com/v1/me/shows?limit=50`;\nconst TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;\nconst PLAYLISTS_ENDPOINT = `https://api.spotify.com/v1/users/${process.env.SPOTIFY_USER_ID}/playlists`;\nconst PLAYBACK_ENDPOINT = `https://api.spotify.com/v1/me/player`;\nconst basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');\n\nconst getAccessToken = async () => {\n  const response = await fetch(TOKEN_ENDPOINT, {\n    method: 'POST',\n    headers: {\n      Authorization: `Basic ${basic}`,\n      'Content-Type': 'application/x-www-form-urlencoded'\n    },\n    body: querystring__WEBPACK_IMPORTED_MODULE_0___default().stringify({\n      grant_type: 'refresh_token',\n      refresh_token\n    })\n  });\n  return response.json();\n};\n\nconst getNowPlaying = async () => {\n  const {\n    access_token\n  } = await getAccessToken();\n  return fetch(NOW_PLAYING_ENDPOINT, {\n    headers: {\n      Authorization: `Bearer ${access_token}`\n    }\n  });\n};\nconst getLastPlayed = async () => {\n  const {\n    access_token\n  } = await getAccessToken();\n  return fetch(LAST_PLAYED_ENDPOINT, {\n    headers: {\n      Authorization: `Bearer ${access_token}`\n    }\n  });\n};\nconst getTopTracks = async () => {\n  const {\n    access_token\n  } = await getAccessToken();\n  return fetch(TOP_TRACKS_ENDPOINT, {\n    headers: {\n      Authorization: `Bearer ${access_token}`\n    }\n  });\n};\nconst getPodcastPlaying = async () => {\n  const {\n    access_token\n  } = await getAccessToken();\n  return fetch(NOW_PLAYING_PODCAST_ENDPOINT, {\n    headers: {\n      Authorization: `Bearer ${access_token}`\n    }\n  });\n};\nconst getLastPlayedPodcast = async () => {\n  const {\n    access_token\n  } = await getAccessToken();\n  return fetch(LAST_PLAYED_PODCAST_ENDPOINT, {\n    headers: {\n      Authorization: `Bearer ${access_token}`\n    }\n  });\n};\nconst getShows = async () => {\n  const {\n    access_token\n  } = await getAccessToken();\n  return fetch(SHOWS_ENDPOINT, {\n    headers: {\n      Authorization: `Bearer ${access_token}`\n    }\n  });\n};\nconst getPlaylists = async () => {\n  const {\n    access_token\n  } = await getAccessToken();\n  return fetch(PLAYLISTS_ENDPOINT, {\n    headers: {\n      Authorization: `Bearer ${access_token}`\n    }\n  });\n};\nconst getPlayer = async () => {\n  const {\n    access_token\n  } = await getAccessToken();\n  return fetch(PLAYBACK_ENDPOINT, {\n    headers: {\n      Authorization: `Bearer ${access_token}`\n    }\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVQSxNQUFNSSxvQkFBb0IsR0FBRyxZQUFZO0FBQzlDLFFBQU07QUFBRUosSUFBQUE7QUFBRixNQUFtQixNQUFNWCxjQUFjLEVBQTdDO0FBRUEsU0FBT0UsS0FBSyxDQUFDYiw0QkFBRCxFQUErQjtBQUN6Q2UsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLGFBQWEsRUFBRyxVQUFTTSxZQUFhO0FBRC9CO0FBRGdDLEdBQS9CLENBQVo7QUFLRCxDQVJNO0FBVUEsTUFBTUssUUFBUSxHQUFHLFlBQVk7QUFDbEMsUUFBTTtBQUFFTCxJQUFBQTtBQUFGLE1BQW1CLE1BQU1YLGNBQWMsRUFBN0M7QUFFQSxTQUFPRSxLQUFLLENBQUNYLGNBQUQsRUFBaUI7QUFDM0JhLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxhQUFhLEVBQUcsVUFBU00sWUFBYTtBQUQvQjtBQURrQixHQUFqQixDQUFaO0FBS0QsQ0FSTTtBQVVBLE1BQU1NLFlBQVksR0FBRyxZQUFZO0FBQ3RDLFFBQU07QUFBRU4sSUFBQUE7QUFBRixNQUFtQixNQUFNWCxjQUFjLEVBQTdDO0FBRUEsU0FBT0UsS0FBSyxDQUFDVCxrQkFBRCxFQUFxQjtBQUMvQlcsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLGFBQWEsRUFBRyxVQUFTTSxZQUFhO0FBRC9CO0FBRHNCLEdBQXJCLENBQVo7QUFLRCxDQVJNO0FBVUEsTUFBTU8sU0FBUyxHQUFHLFlBQVk7QUFDbkMsUUFBTTtBQUFFUCxJQUFBQTtBQUFGLE1BQW1CLE1BQU1YLGNBQWMsRUFBN0M7QUFFQSxTQUFPRSxLQUFLLENBQUNQLGlCQUFELEVBQW9CO0FBQzlCUyxJQUFBQSxPQUFPLEVBQUU7QUFDUEMsTUFBQUEsYUFBYSxFQUFHLFVBQVNNLFlBQWE7QUFEL0I7QUFEcUIsR0FBcEIsQ0FBWjtBQUtELENBUk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yeWFuLXBhcmFnLW5leHQvLi91dGlscy9zcG90aWZ5LmpzPzcyMTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHF1ZXJ5c3RyaW5nIGZyb20gJ3F1ZXJ5c3RyaW5nJztcblxuLy8gaHR0cHM6Ly9sZWVyb2IuaW8vYmxvZy9zcG90aWZ5LWFwaS1uZXh0anNcbi8vIGh0dHBzOi8vYmVud2l6LmNvbS9ibG9nL2NyZWF0ZS1zcG90aWZ5LXJlZnJlc2gtdG9rZW4vXG5cbi8vIGh0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vYXV0aG9yaXplP3Jlc3BvbnNlX3R5cGU9Y29kZSZjbGllbnRfaWQ9JHtDTElFTlRfSUR9cmVkaXJlY3RfdXJpPWh0dHAlM0ElMkYlMkZsb2NhbGhvc3Q6MzAwMCZzY29wZT11c2VyLXJlYWQtY3VycmVudGx5LXBsYXlpbmclMjB1c2VyLXRvcC1yZWFkXG5cblxuY29uc3QgY2xpZW50X2lkID0gcHJvY2Vzcy5lbnYuU1BPVElGWV9DTElFTlRfSURcbmNvbnN0IGNsaWVudF9zZWNyZXQgPSBwcm9jZXNzLmVudi5TUE9USUZZX0NMSUVOVF9TRUNSRVRcbmNvbnN0IHJlZnJlc2hfdG9rZW4gPSBwcm9jZXNzLmVudi5TUE9USUZZX1JFRlJFU0hfVE9LRU5cblxuY29uc3QgTk9XX1BMQVlJTkdfRU5EUE9JTlQgPSBgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvcGxheWVyL2N1cnJlbnRseS1wbGF5aW5nYDtcbmNvbnN0IE5PV19QTEFZSU5HX1BPRENBU1RfRU5EUE9JTlQgPSBgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvcGxheWVyL2N1cnJlbnRseS1wbGF5aW5nLz9hZGRpdGlvbmFsX3R5cGVzPWVwaXNvZGVgO1xuY29uc3QgTEFTVF9QTEFZRURfRU5EUE9JTlQgPSBgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvcGxheWVyL3JlY2VudGx5LXBsYXllZGA7XG5jb25zdCBMQVNUX1BMQVlFRF9QT0RDQVNUX0VORFBPSU5UID0gYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lL3BsYXllci9yZWNlbnRseS1wbGF5ZWQvP2FkZGl0aW9uYWxfdHlwZXM9ZXBpc29kZWA7XG5jb25zdCBUT1BfVFJBQ0tTX0VORFBPSU5UID0gYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lL3RvcC90cmFja3NgO1xuY29uc3QgU0hPV1NfRU5EUE9JTlQgPSBgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvc2hvd3M/bGltaXQ9NTBgO1xuY29uc3QgVE9LRU5fRU5EUE9JTlQgPSBgaHR0cHM6Ly9hY2NvdW50cy5zcG90aWZ5LmNvbS9hcGkvdG9rZW5gO1xuY29uc3QgUExBWUxJU1RTX0VORFBPSU5UID0gYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3VzZXJzLyR7cHJvY2Vzcy5lbnYuU1BPVElGWV9VU0VSX0lEfS9wbGF5bGlzdHNgO1xuY29uc3QgUExBWUJBQ0tfRU5EUE9JTlQgPSBgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvcGxheWVyYFxuXG5jb25zdCBiYXNpYyA9IEJ1ZmZlci5mcm9tKGAke2NsaWVudF9pZH06JHtjbGllbnRfc2VjcmV0fWApLnRvU3RyaW5nKCdiYXNlNjQnKTtcblxuY29uc3QgZ2V0QWNjZXNzVG9rZW4gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVE9LRU5fRU5EUE9JTlQsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHtiYXNpY31gLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgfSxcbiAgICBib2R5OiBxdWVyeXN0cmluZy5zdHJpbmdpZnkoe1xuICAgICAgZ3JhbnRfdHlwZTogJ3JlZnJlc2hfdG9rZW4nLFxuICAgICAgcmVmcmVzaF90b2tlblxuICAgIH0pXG4gIH0pO1xuXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Tm93UGxheWluZyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgeyBhY2Nlc3NfdG9rZW4gfSA9IGF3YWl0IGdldEFjY2Vzc1Rva2VuKCk7XG5cbiAgcmV0dXJuIGZldGNoKE5PV19QTEFZSU5HX0VORFBPSU5ULCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc190b2tlbn1gXG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRMYXN0UGxheWVkID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7IGFjY2Vzc190b2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4oKTtcblxuICByZXR1cm4gZmV0Y2goTEFTVF9QTEFZRURfRU5EUE9JTlQsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzX3Rva2VufWBcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFRvcFRyYWNrcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgeyBhY2Nlc3NfdG9rZW4gfSA9IGF3YWl0IGdldEFjY2Vzc1Rva2VuKCk7XG5cbiAgcmV0dXJuIGZldGNoKFRPUF9UUkFDS1NfRU5EUE9JTlQsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzX3Rva2VufWBcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFBvZGNhc3RQbGF5aW5nID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7IGFjY2Vzc190b2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4oKTtcblxuICByZXR1cm4gZmV0Y2goTk9XX1BMQVlJTkdfUE9EQ0FTVF9FTkRQT0lOVCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NfdG9rZW59YCxcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldExhc3RQbGF5ZWRQb2RjYXN0ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7IGFjY2Vzc190b2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4oKTtcblxuICByZXR1cm4gZmV0Y2goTEFTVF9QTEFZRURfUE9EQ0FTVF9FTkRQT0lOVCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NfdG9rZW59YCxcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNob3dzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7IGFjY2Vzc190b2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4oKTtcblxuICByZXR1cm4gZmV0Y2goU0hPV1NfRU5EUE9JTlQsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzX3Rva2VufWAsXG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQbGF5bGlzdHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgYWNjZXNzX3Rva2VuIH0gPSBhd2FpdCBnZXRBY2Nlc3NUb2tlbigpO1xuXG4gIHJldHVybiBmZXRjaChQTEFZTElTVFNfRU5EUE9JTlQsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzX3Rva2VufWAsXG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQbGF5ZXIgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgYWNjZXNzX3Rva2VuIH0gPSBhd2FpdCBnZXRBY2Nlc3NUb2tlbigpO1xuXG4gIHJldHVybiBmZXRjaChQTEFZQkFDS19FTkRQT0lOVCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NfdG9rZW59YCxcbiAgICB9XG4gIH0pO1xufTsiXSwibmFtZXMiOlsicXVlcnlzdHJpbmciLCJjbGllbnRfaWQiLCJwcm9jZXNzIiwiZW52IiwiU1BPVElGWV9DTElFTlRfSUQiLCJjbGllbnRfc2VjcmV0IiwiU1BPVElGWV9DTElFTlRfU0VDUkVUIiwicmVmcmVzaF90b2tlbiIsIlNQT1RJRllfUkVGUkVTSF9UT0tFTiIsIk5PV19QTEFZSU5HX0VORFBPSU5UIiwiTk9XX1BMQVlJTkdfUE9EQ0FTVF9FTkRQT0lOVCIsIkxBU1RfUExBWUVEX0VORFBPSU5UIiwiTEFTVF9QTEFZRURfUE9EQ0FTVF9FTkRQT0lOVCIsIlRPUF9UUkFDS1NfRU5EUE9JTlQiLCJTSE9XU19FTkRQT0lOVCIsIlRPS0VOX0VORFBPSU5UIiwiUExBWUxJU1RTX0VORFBPSU5UIiwiU1BPVElGWV9VU0VSX0lEIiwiUExBWUJBQ0tfRU5EUE9JTlQiLCJiYXNpYyIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsImdldEFjY2Vzc1Rva2VuIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsInN0cmluZ2lmeSIsImdyYW50X3R5cGUiLCJqc29uIiwiZ2V0Tm93UGxheWluZyIsImFjY2Vzc190b2tlbiIsImdldExhc3RQbGF5ZWQiLCJnZXRUb3BUcmFja3MiLCJnZXRQb2RjYXN0UGxheWluZyIsImdldExhc3RQbGF5ZWRQb2RjYXN0IiwiZ2V0U2hvd3MiLCJnZXRQbGF5bGlzdHMiLCJnZXRQbGF5ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/spotify.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/spotify/recently-played.js"));
module.exports = __webpack_exports__;

})();