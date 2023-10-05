const today = new Date();
console.log(today);
days = ["日","月","火","水","木","金","土"]

// console.log(today.getFullYear())
// 月は、0が1月、1が2月・・・なので、+1する
// console.log(today.getMonth()+1)
// console.log(today.getDate())
// console.log(today.getHours())
// console.log(today.getMinutes())
// console.log(today.getSeconds())
// console.log(today.getMilliseconds())
// // 曜日は、0が日曜日、1が月曜日、2が火曜日・・・
// console.log(today.getDay())
// console.log(days[today.getDay()])


let outputText = "今は"
// outputText = outputText + today.getFullYear() + "年"
outputText += "「"today.getFullYear() + "年"


document.getElementById("date").textContent = outputText;