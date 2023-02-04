import { NextApiRequest, NextApiResponse } from "next";
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(config);

export default async (req, res) => {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: req.body.prompt,
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  res.status(200).json({ results: completion.data });
};
