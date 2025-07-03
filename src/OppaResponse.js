export default function OppaResponse({ condition }) {
  let message = "";

  switch (condition) {
    case "Clear":
      message =
        "☀️ It's sunny, Peach! Perfect time to shine like you always do.";
      break;
    case "Rain":
      message =
        "🌧️ It's raining… Oppa says take your umbrella and maybe stay cozy today.";
      break;
    case "Snow":
      message = "❄️ Snow?! Are we in a K-drama?? Time for fluff and cocoa!";
      break;
    case "Clouds":
      message = "☁️ Cloudy mood, but your smile clears skies.";
      break;
    case "Thunderstorm":
      message =
        "⚡ Stay safe, warrior queen. Oppa would fight the storm for you!";
      break;
    default:
      message = "🤖 Weather unknown, but Oppa loves you anyway.";
  }

  return <p>{message}</p>;
}
