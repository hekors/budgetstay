import { NextApiRequest, NextApiResponse } from "next";
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: process.env.OPEN_AI,
});

const openai = new OpenAIApi(config);

// eslint-disable-next-line import/no-anonymous-default-export
export default async function(req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: req.body.prompt,
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return res.status(200).json({ results: completion.data });
};
