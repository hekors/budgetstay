const express = require("express");
const MessagingResponse = require("twilio/lib/twiml/MessagingResponse");
const twilio = require("twilio");

const app = express();
const PORT = process.env.PORT || 5000;
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;

app.use(express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Heyy Ayush");
});

app.post("/receive", (req, res) => {
  try {
    console.log(req.body.ProfileName);
    const twiml = new MessagingResponse();
    twiml.message("you sent a message");
    res.writeHead(200, { "Content-type": "text/xml" });
    res.end(twiml.toString());
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

client.messages
  .create({
    from: `whatsapp:${TWILIO_PHONE_NUMBER}`,
    body: "Hey there",
    to: `whatsapp:${TWILIO_PHONE_NUMBER}`,
  })
  .then((message) => console.log(message.sid))
  .catch((error) => console.error(error));
