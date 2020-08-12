const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'eyalgeron94@gmail.com',
        subject: 'Welcome to Task App!',
        text: `Thank you for joining, ${name}! Let me know how you get along with the app. `
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'eyalgeron94@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you sometime soon. `
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}