function externalJs(url) {
  const script = document.createElement("script");
  script.async = true;
  script.src = url;
  document.body.appendChild(script);
}

export default externalJs;
