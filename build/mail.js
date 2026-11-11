const gulp = require('gulp');
const { readFileSync } = require('fs');
const { createTransport } = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const { exec } = require('shelljs');

function createMailTransport() {
    return createTransport(smtpTransport({
        host: 'smtp.office365.com',
        port: '587',
        tls: { ciphers: 'SSLv3' },
        service: 'Outlook365',
        auth: {
            user: process.env.FROM_EMAIL_ID,
            pass: process.env.EMAIL_PASSWORD
        }
    }));
}

function getMessage() {
    return {
        from: process.env.FROM_EMAIL_ID,
        to: process.env.TO_EMAIL_ID,
        cc: process.env.TO_EMAIL_ID,
        subject: "Url validation error log",
        html: "",
        attachments: []
    };
}

gulp.task('mail', (done)=> {
    exec('gulp url-validation > url-validation-error.log');
    let message = getMessage();
    let transport = createMailTransport();
    html = "Hi Everyone,<br><br>Please find the attached url validation error log file."
        + "<br><br><br>Regards,<br> Reports Team";
    message.html = html;
    message.attachments = [{
        filename: 'url-validation-error.log',
        content: readFileSync('./url-validation-error.log')
    }];
    transport.sendMail(message, function (error) {
        if (error) {
            console.log('Error occured');
            console.log(error.message);
            return;
        }
        console.log('Message sent successfully!');
        done();
    });
});