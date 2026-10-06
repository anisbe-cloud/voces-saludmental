
/*
  STREAMING:
  Cuando tengas el enlace de YouTube, reemplaza el valor de STREAM_URL.
  Ejemplo:
  const STREAM_URL = "https://www.youtube.com/watch?v=XXXXXXXXXXX";
*/
const STREAM_URL = "";

function youtubeEmbed(url) {
  if (!url) return "";
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      return "https://www.youtube.com/embed/" + u.pathname.replace("/", "");
    }
    const id = u.searchParams.get("v");
    if (id) return "https://www.youtube.com/embed/" + id;
    if (u.pathname.includes("/live/")) {
      return "https://www.youtube.com/embed/" + u.pathname.split("/live/")[1].split("/")[0];
    }
  } catch (e) {}
  return url;
}

const frame = document.getElementById("stream-frame");
const placeholder = document.getElementById("video-placeholder");
const embed = youtubeEmbed(STREAM_URL);

if (embed) {
  frame.src = embed;
  frame.hidden = false;
  placeholder.hidden = true;
}
