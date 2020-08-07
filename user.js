const validator = require('validator')
const chalk = require('chalk')

const getDataUser = (username, email) => {
    if(validator.isEmail(email)) {
        return chalk.green(`Selamat Datang ${username}, Email kamu adalah ${email}`)
    }
    else {
        return chalk.red(`Email tidak valid`)
    }
}

const isEmailValid = validator.isEmail('chris-yeo@live.com')

module.exports = ({
    getDataUser, 
})