const Cookies = require("js-cookie");
var selected_lang = Cookies.get("selected_lang") || "en";
function lang(es, en) {
  return selected_lang === "en" ? en : es;
}

function setLang(lang) {
  var ch_lang = selected_lang === "en" ? "es" : "en";
  console.log("ch_lang", ch_lang);
  Cookies.set("selected_lang", ch_lang);
  window.location.reload();
}
module.exports = { lang, setLang };
