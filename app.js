async function callApi() {
  const res = await fetch("https://diary.work.gd/test/");
  const data = await res.json();
  document.getElementById("output").innerText =
    JSON.stringify(data, null, 2);
}
