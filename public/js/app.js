let exit = "exit"

let enter = prompt("Write a number to choose between : \n1) sign up \n2) log in \n3) change the password").toLowerCase() // ila bghiti tkhorji ketbi exit.    

function capitalWithoutSpacing(parametre) {
    return parametre.trim().split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(" ")
}

function lowerWithouthSpacing(params) {
    return params.trim().split("").map(e => e.toLowerCase()).join("")
}

while (enter) {
    if (enter == exit) {
        enter = prompt("Write a number to choose between : \n1) sign up \n2) log in \n3) change the password").toLowerCase() // ila bghiti tkhorji ketbi exit.    
    } else if (enter == 1) {
        // // start name
        // let fullName = prompt(`to sign up enter youre name`)
        // if (fullName.length < 5 || fullName.match("  ") || /[^a-zA-Z ]/.test(fullName)) {
        //     while (fullName.length < 5 || fullName.match("  ") || /[^a-zA-Z ]/.test(fullName)) {
        //         if (fullName.length < 5) {
        //             fullName = prompt(`${capitalWithoutSpacing(fullName)} is small, to sign up enter youre full name`)
        //         } else if (/[^a-zA-Z ]/.test(fullName)) {
        //             fullName = prompt(`${capitalWithoutSpacing(fullName)} write a new full name witouth symobles or numbers !`)
        //         }
        //         console.log(capitalWithoutSpacing(fullName));
        //     }
        // }
        // console.log(capitalWithoutSpacing(fullName));
        // // end name

        // // start email
        // let fullEmail = prompt(`to sign up enter youre Email`)
        // if (fullEmail.length < 10 || fullEmail.includes(" ") || !fullEmail.includes("@") || !fullEmail.includes(".") || fullEmail.split("@").length !== 2) {
        //     while (fullEmail.length < 10 || fullEmail.includes(" ") || !fullEmail.includes("@") || !fullEmail.includes(".") || fullEmail.split("@").length !== 2) {
        //         if (fullEmail.length < 10) {
        //             fullEmail = prompt(`${lowerWithouthSpacing(fullEmail)} is small, to sign up enter youre full Email`)
        //         } else if (!fullEmail.includes("@") || !fullEmail.includes(".")) {
        //             fullEmail = prompt(`${lowerWithouthSpacing(fullEmail)} write a new full name with @ and . !`)
        //         }else if (fullEmail.includes(" ") || fullEmail.split("@").length !== 2){
        //             fullEmail = prompt(`${lowerWithouthSpacing(fullEmail)} write a new full name withouth double @ and withouth space !`)
        //         }
        //         console.log(lowerWithouthSpacing(fullEmail));
        //     }
        // }
        // console.log(lowerWithouthSpacing(fullEmail));
        // // end email

        // // start age
        // let fullAge = prompt(`to sign up enter youre Age`)
        // if (fullAge.length > 2 || fullAge.match("  ") || /[^0-9 ]/.test(fullAge) || fullAge.startsWith(" ") || fullAge.endsWith(" ") || fullAge.includes(" ")) {
        //     while (fullAge.length > 2 || fullAge.match("  ") || /[^0-9 ]/.test(fullAge) || fullAge.includes(" ")) {
        //         if (fullAge.match("  ") || /[^0-9 ]/.test(fullAge)) {
        //             fullAge = prompt(`${fullAge} you write not a number`)
        //         } else if (fullAge.includes(" ")) {
        //             fullAge = prompt(`${fullAge} you write a age with a space enter a real Age`)
        //         } else {
        //             fullAge = prompt(`${fullAge} you write is big to sign up enter youre Age`)
        //         }
        //     }
        // }
        // console.log(+fullAge);
        // // end age

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
