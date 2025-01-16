const nodeMailer = require("nodemailer");
const { SMPT_MAIL,SMPT_PASSWORD, SMPT__SERVICE, SMPT_PORT,SMPT_HOST  } = require("../config/config");
const sendEmail = async (options)=>{
const transporter = nodeMailer.createTransport({
    host:SMPT_HOST,
    port:SMPT_PORT,
    service:SMPT__SERVICE,
    auth:{
        user:SMPT_MAIL,
        pass:SMPT_PASSWORD,
    }
})
const mailOptions = {
    from:SMPT_MAIL, //SMPT = simple mail transport protocol
    to:options.email,
    subject:options.subject,
    text:options.message
};
await transporter.sendMail(mailOptions);
}
module.exports = sendEmail;