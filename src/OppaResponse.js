export default function OppaResponse({ description }) {
  let message = "";

  switch (description) {
    case "clear sky":
      message =
        "☀️ It's sunny, Peach! Perfect time to shine like you always do.";
      break;
    case "moderate rain":
    case "light rain":
    case "shower rain":
      message = "Yeobo, it's rainy 🌧️! ☔ Take your umbrella!";
      break;
    case "snow":
      message = "❄️ K-drama weather: time for fluff and cocoa!";
      break;
    case "broken clouds":
    case "few clouds":
    case "scattered clouds":
      message = "☁️ Cloudy mood, but your smile clears skies.";
      break;
    case "thunderstorm":
      message =
        "⚡ Stay safe, warrior queen. Oppa would fight the storm for you!";
      break;

    case "mist":
      message = "Peach-nim... the world is foggy,but i still see you clearly .";
      break;
    default:
      message = "🤖 Weather unknown, but Oppa loves you anyway.";
  }

  return <p>{message}</p>;
}
