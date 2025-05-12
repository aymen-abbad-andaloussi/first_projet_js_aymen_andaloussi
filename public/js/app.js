let exit = "exit"

let enter = prompt("Write a number to choose between : \n1) sign up \n2) log in \n3) change the password").toLowerCase() // ila bghiti tkhorji ketbi exit.    

function capitalWithoutSpacing(parametre) {
    return parametre.trim().split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(" ")
}

while (enter) {
    if (enter == exit) {
        enter = prompt("Write a number to choose between : \n1) sign up \n2) log in \n3) change the password").toLowerCase() // ila bghiti tkhorji ketbi exit.    
    } else if (enter == 1) {
        let fullName = prompt(`to sign up enter youre name`)
        console.log(capitalWithoutSpacing(fullName));
        if (fullName.length < 5 || fullName.match("  ") || /[^a-zA-Z ]/.test(fullName)) {
            while (fullName.length < 5 || fullName.match("  ") || /[^a-zA-Z ]/.test(fullName)) {
                if (fullName.length < 5) {
                    fullName = prompt(`${capitalWithoutSpacing(fullName)} is small, to sign up enter youre full name`)
                }else if (/[^a-zA-Z ]/.test(fullName)){
                    fullName = prompt(`${capitalWithoutSpacing(fullName)} write a new full name witouth symobles or numbers !`)
                }
                console.log(capitalWithoutSpacing(fullName));
            }
        }
        break
    } else if (enter == 2) {
        prompt(`number is ${enter}`)
        break
    } else if (enter == 3) {
        prompt(`number is ${enter}`)
        break
    } else {
        enter = prompt(`${enter} is not found you can write (exit) if you wanna get out or choose a number to choose between : \n1) sign up \n2) log in \n3) change the password`)
    }
}
