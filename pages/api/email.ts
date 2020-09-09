import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SEND_GRID_KEY);

async function SendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    await sgMail.send(req.body);
  } catch (err) {
    console.error(err.response.body);
    res.status(500).end();
    return;
  }
  res.send("OK");
  res.end();
}

export default SendEmail;
