function capture() {
  html2canvas(document.body).then((canvas) => {
    let a = document.createElement("a");
    a.download = "ss.png";
    a.href = canvas.toDataURL("image/png");
    a.click(); // MAY NOT ALWAYS WORK!
  });
  function capture2() {
    html2canvas(document.getElementById("demo")).then((canvas) => {
      // (A) APPEND SCREENSHOT TO DATA OBJECT
      var data = new FormData();
      data.append("screenshot", canvas.toDataURL("image/jpeg", 0.6));

      // (B) UPLOAD SCREENSHOT TO SERVER
      fetch("2b-upload.php", { method: "post", body: data })
        .then((res) => {
          return res.text();
        })
        .then((txt) => {
          alert(txt);
        });
    });
  }
}
