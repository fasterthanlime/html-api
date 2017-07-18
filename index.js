
var t1 = Date.now();

window.addEventListener("message", (ev) => {
  const message = ev.data;

  if (message.request && message.response) {
    var t2 = Date.now();
    document.querySelector("#loader").textContent = "Fetched user in " + (t2-t1).toFixed(2) + "ms.";
    document.querySelector("#user_dump").textContent = JSON.stringify(message.response.user, null, 2);
  }
});

window.parent.postMessage({name: "api", path: "/me"}, "*");
