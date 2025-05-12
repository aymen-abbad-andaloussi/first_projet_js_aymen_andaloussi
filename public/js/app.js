class database {
    constructor(name, email, age, password) {
        this.name = name
        this.email = email
        this.age = age
        this.password = password
    }
}
let user = new database([], [], [], []);

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
        // start name
        let fullName = prompt(`to sign up enter youre name`)
        if (fullName.length < 5 || fullName.match("  ") || /[^a-zA-Z ]/.test(fullName)) {
            while (fullName.length < 5 || fullName.match("  ") || /[^a-zA-Z ]/.test(fullName)) {
                if (fullName.length < 5) {
                    fullName = prompt(`${capitalWithoutSpacing(fullName)} is small, to sign up enter youre full name`)
                } else if (/[^a-zA-Z ]/.test(fullName)) {
                    fullName = prompt(`${capitalWithoutSpacing(fullName)} write a new full name witouth symobles or numbers !`)
                }
            }
        }
        //* console.log(capitalWithoutSpacing(fullName));
        user.name.push(capitalWithoutSpacing(fullName))
        // end name

        // start email
        let fullEmail = prompt(`to sign up enter youre Email`)
        if (fullEmail.length < 10 || fullEmail.includes(" ") || !fullEmail.includes("@") || !fullEmail.includes(".") || fullEmail.split("@").length !== 2) {
            while (fullEmail.length < 10 || fullEmail.includes(" ") || !fullEmail.includes("@") || !fullEmail.includes(".") || fullEmail.split("@").length !== 2) {
                if (fullEmail.length < 10) {
                    fullEmail = prompt(`${lowerWithouthSpacing(fullEmail)} is small, to sign up enter youre full Email`)
                } else if (!fullEmail.includes("@") || !fullEmail.includes(".")) {
                    fullEmail = prompt(`${lowerWithouthSpacing(fullEmail)} write a new full name with @ and . !`)
                } else if (fullEmail.includes(" ") || fullEmail.split("@").length !== 2) {
                    fullEmail = prompt(`${lowerWithouthSpacing(fullEmail)} write a new full name withouth double @ and withouth space !`)
                }
                //* console.log(lowerWithouthSpacing(fullEmail));
            }
        }
        //* console.log(lowerWithouthSpacing(fullEmail));
        user.email.push(fullEmail)
        // end email

        // start age
        let fullAge = prompt(`to sign up enter youre Age`)
        if (fullAge.length > 2 || fullAge.match("  ") || /[^0-9 ]/.test(fullAge) || fullAge.includes(" ")) {
            while (fullAge.length > 2 || fullAge.match("  ") || /[^0-9 ]/.test(fullAge) || fullAge.includes(" ")) {
                if (fullAge.match("  ") || /[^0-9 ]/.test(fullAge)) {
                    fullAge = prompt(`${fullAge} you write not a number`)
                } else if (fullAge.includes(" ")) {
                    fullAge = prompt(`${fullAge} you write a age with a space enter a real Age`)
                } else {
                    fullAge = prompt(`${fullAge} you write is big to sign up enter youre Age`)
                }
            }
        }
        //* console.log(+fullAge);
        user.age.push(+fullAge)
        // end age

        // start password
        let fullPassword = prompt(`to sign up enter your Password`)
        while (fullPassword.length < 7 || fullPassword.includes(" ") || !/[#@+\-*/0-9]/.test(fullPassword)) {
            fullPassword = prompt(`Password must be at least 7 characters, contain one of [# @ + - * /], and no spaces`)
        }
        alert(`the new password : ${fullPassword} is accepted`)
        // end password

        // start confirm password
        let fullConfirmPassword = prompt(`confirm your Password`)
        while (fullConfirmPassword !== fullPassword) {
            fullConfirmPassword = prompt(`the password incorrect`)
        }
        alert(`the password : ${fullPassword} is confirmed`)
        user.password.push(fullPassword)
        // end confirm password

        let confimData = confirm(`your name is: ${user.name[0]} \nyour email is: ${user.email[0]} \nyour age is: ${user.age[0]} \nyour password is: ${user.password[0]} \nif you want to change the password clique ok`)

        if (confimData == true) {
            // start new password
            let checkEmail = prompt(`enter your email to change the password`)
            if (checkEmail == user.email[0]) {
                let fullNewPassword = prompt(`enter new Password`)
                while (fullNewPassword.length < 7 || fullNewPassword.includes(" ") || !/[#@+\-*/0-9]/.test(fullNewPassword)) {
                    fullNewPassword = prompt(`Password must be at least 7 characters, contain one of [# @ + - * /], and no spaces`)
                }
                alert(`the new password : ${fullNewPassword} is changed`)
                user.password.splice(0, 1, fullNewPassword)
                alert(`your signing up is successfully \nyour name is: ${user.name[0]} \nyour email is: ${user.email[0]} \nyour age is: ${user.age[0]} \nyour password is: ${user.password[0]}`)
            } else {
                alert(`you are not the same user "siir bhalek"!`)
            }
            // end new password
        } else {
            alert(`your signing up is successfully \nyour name is: ${user.name[0]} \nyour email is: ${user.email[0]} \nyour age is: ${user.age[0]} \nyour password is: ${user.password[0]}`)

        }

        // start sign in
        while (true) {
            let enterLogin = prompt(`to log in enter youre email`)

            if (enterLogin == user.email[0]) {
                let enterLogPassword = prompt(`to log in enter youre password`)
                if (enterLogPassword == user.password[0]) {
                    var successfully = confirm(`you successfully log in`)//^^^^^^^
                    break
                }
            } else {
                alert("youre not the same user")
            }
        }

        console.log(user);
        // end sign in

        break
    } else if (enter == 2) {
        alert(`you need to sign in first`)
        break
    } else if (enter == 3) {
        alert(`you need to sign in first`)
        break
    }
}
//^ 3ereft knt kn3eref b let dakhel scoop ms 3ereft var hitach khrojt mno w dkholt lwehdakhor 3ad khedmat lita 
if (successfully == true) {
    //todo    start bank
    let floussi = 0;
    while (true) {
        let myCIH = prompt("merhba bik f CIH bank:\n1) chhal f rasid\n2) versement\n3) retrait\n4) exit").toLowerCase();

        if (myCIH == 1) {
            alert(`3endek db f jibek : ${floussi} dh`);
        } else if (myCIH == 2) {
            let rassid = +prompt("dekhel lmablagh li bghiti tversi:");
            if (!isNaN(rassid) && rassid > 0) {
                floussi += rassid;
                alert(`lmablagh li hotiti daz bi najah. lmontat jdid: ${floussi} dh`);
            } else {
                alert("madazetch!");
            }
        } else if (myCIH == 3) {
            let withdrawAmount = +prompt("dekhel chhal bghity tkherej:");
            if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= floussi) {
                floussi -= withdrawAmount;
                alert(`lmablagh li kherejti daz bi najah. lmontat jdid: ${floussi} dh`);
            } else {
                alert("baraka 3lik salaw flouss!");
            }
        } else if (myCIH == 4 || myCIH == exit) { // ila bghiti tkhorji ketbi exit wla 4.
            alert("merhba bik f ay we9t. good bye :)");
            console.log(`rasid lhali li b9alik Mme.${user.name[0]} fel flouss : ${floussi} dh`);
            break;
        } else {
            alert("ghalat try again:(");
        }
    }
    //todo    end bank
}
