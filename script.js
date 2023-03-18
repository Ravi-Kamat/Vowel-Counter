

let user_name = prompt("enter Your name")

function vowelCount() {
    let vowelNum = 0
    for (i = 0; i < user_name.length; i++) {
        if (user_name[i] == "a" || user_name[i] == "e" || user_name[i] == "i" || user_name[i] == "o" || user_name[i] == "u") {
            console.log(vowelNum += 1);
        }
    }
    return vowelNum
}
vowelCount()