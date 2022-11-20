const run = () => {
  let tall = document.getElementById("tall").value;
  let height = document.getElementById("height").value;
  tall = tall / 100;
  let result = height / (tall * 2);
  if ((tall != "") & (height != "")) {
    document.getElementById("result").value = result;
    if ((result < 18, 5)) {
      document.getElementById("comment").value = "Gầy";
    }
    if ((result >= 18, 5 & (result <= 24, 9))) {
      document.getElementById("comment").value = "Bình thường";
    }
    if ((result >= 25) & (result <= 29, 9)) {
      document.getElementById("comment").value = "Tăng cân";
    }
    if ((result >= 30) & (result <= 34, 9)) {
      document.getElementById("comment").value = "Béo phì C1";
    }
    if ((result >= 35) & (result <= 39, 9)) {
      document.getElementById("comment").value = "Béo phì C2";
    }
    if (result >= 40) {
      document.getElementById("comment").value = "Béo phì C3";
    }
  } else {
    alert("Nhập cho đầy đủ vào");
  }
};
const cleardata = () => {
  document.getElementById("tall").value = "";
  document.getElementById("height").value = "";
  document.getElementById("result").value = "";
  document.getElementById("comment").value = "";
};
