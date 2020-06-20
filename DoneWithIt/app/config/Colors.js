export default {
  danger: "#ff5252",
  dark: "#000",
  darkGray: "#0c0c0c",
  light: "#fff",
  lightGray: "#f8f4f4",
  mediumGray: "#6e6969",
  primary: "#fc5c65",
  secondary: "#4ECDC4",
  yellow: "#ffe66d",
};

String.prototype.transparency = function (percentage) {
  const keyPercentage = percentage > 100 ? 100 : percentage - (percentage % 5);

  return this + transparencies[keyPercentage + "%"];
};
const transparencies = {
  "100%": "FF",
  "95%": "F2",
  "90%": "E6",
  "85%": "D9",
  "80%": "CC",
  "75%": "BF",
  "70%": "B3",
  "65%": "A6",
  "60%": "99",
  "55%": "8C",
  "50%": "80",
  "45%": "73",
  "40%": "66",
  "35%": "59",
  "30%": "4D",
  "25%": "40",
  "20%": "33",
  "15%": "26",
  "10%": "1A",
  "5%": "0D",
  "0%": "00",
};
