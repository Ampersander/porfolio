import nodemailer from 'nodemailer';

export async function POST({ request }) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    // Configurer le transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // Configurer l'email
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Nouveau message de contact de ${name}`,
      text: `
        Nom: ${name}
        Email: ${email}
        Message: ${message}
      `
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
