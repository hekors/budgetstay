const express = require("express");
const { dirname } = require("path");
const MessagingResponse = require("twilio/lib/twiml/MessagingResponse");
const app = express();
const port = "5000";

app.use(express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Heyy Ayush");
});

app.post("/recieve", (req, res) => {
  console.log(req.body.ProfileName);

  const twiml = new MessagingResponse();
  twiml.message("you sent a message");
  res.writeHead(200, { "Content-type": "text/xml" });
  res.end(twiml.toString());
});

app.listen(port, () => {
  console.log("PORT IS RUNNING");
});

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    from: "whatsapp:+14155238886",
    body: "hey there",
    // TO changed to FROM value for not displaying numbers
    to: "whatsapp:+14155238886",
  })
  .then((message) => console.log(message.sid));
