// src/fixGithubRedirect.js
// --- Fix GitHub Pages deep-link "?/" redirect before React mounts ---
if (window.location.search.startsWith("?/")) {
  const newUrl =
    window.location.origin +
    "/" +
    window.location.search.slice(2).replace(/~and~/g, "&") +
    window.location.hash;
  window.history.replaceState(null, "", newUrl);
}
