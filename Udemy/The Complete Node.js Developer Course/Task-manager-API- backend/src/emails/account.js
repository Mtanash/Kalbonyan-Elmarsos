const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  const msg = {
    to: email,
    from: "tanashkoo@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  };

  sgMail.send(msg);
};

const sendCancelationEmail = (email, name) => {
  const msg = {
    to: email,
    from: "tanashkoo@gmail.com",
    subject: "We are sad that you are leaving!",
    text: `We are sorry you are leaving, ${name}. Let us know what to do to make the app better.`,
  };

  sgMail.send(msg);
};

module.exports = { sendWelcomeEmail, sendCancelationEmail };
