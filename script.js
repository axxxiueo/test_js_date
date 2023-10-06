const today = new Date();
console.log(today);
days = ["日","月","火","水","木","金","土"];

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


// let outputText = "今は";
// outputText = outputText + today.getFullYear() + "年";
// outputText += "「" + today.getFullYear() + "年";
// outputText += (today.getMonth()+1) + "月";
// outputText += (today.getDate()) + "日";
// outputText += (today.getHours()) + "時";
// outputText += (today.getSeconds()) + "秒";
// outputText += "」です。" ;
// document.getElementById("date").textContent = outputText;


function outputDate (date) {
    let  outputText = "「" + date.getFullYear() + "年";
    outputText += (date.getMonth()+1) + "月";
    outputText += (date.getDate()) + "日";
    outputText += (date.getHours()) + "時";
    outputText += (date.getSeconds()) + "秒";
    outputText += "」です。" ;
    return outputText;
    }

document.getElementById("date").textContent = "今は" + outputDate(today);

const targetDate = new Date(2024, 9 - 1, 27);
document.getElementById("countDown").textContent = "誕生日まであと" + Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24)) + "日";

today.setDate(today.getDate()+1);
document.getElementById("tomorrow").textContent = "明日の今は" + outputDate(today);