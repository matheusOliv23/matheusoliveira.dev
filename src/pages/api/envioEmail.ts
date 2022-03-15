import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import sendgridTransport from 'nodemailer-sendgrid-transport';

const email = process.env.ENDERECOEMAIL;

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY
    }
  })
);

export default async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const { name, content, senderMail } = request.body;

    if (!name.trim() || !senderMail.trim() || !content.trim()) {
      return response.status(403).send('');
    }

    const message = {
      from: email,
      to: email,
      subject: `Nova mensagem - ${name}`,
      html: `<p><b>Email:</b> ${senderMail}<br/><b>Mensagem: </b>${content}</p>`,
      replyTo: senderMail
    };

    transporter.sendMail(message, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Mensagem enviada', info);
      }
    });

    return response.send('');
  } catch (error) {
    return response.json({
      error: true,
      message: error.message
    });
  }
};
