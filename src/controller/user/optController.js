import { config } from "dotenv";
config();
import twilio from "twilio";
import nodemailer from "nodemailer";


const { TWILIO_SERVICE_SID, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } =
  process.env;

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// const transporter = nodemailer.createTransport({
//   host: EMAIL_HOST,
//   port: EMAIL_PORT,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: EMAIL_USER,
//     pass: EMAIL_PASS,
//   },
// });

export const sendOtp = async (req, res, next) => {
  const { countryCode, phoneNumber } = req.body;
  const emailOtp = Math.floor(100000 + Math.random() * 900000).toString();
  console.log('emailOtp: ', emailOtp);
  try {
    const otpResponse = await client.verify.v2
      .services(TWILIO_SERVICE_SID)
      .verifications.create({
        to: `+${countryCode}${phoneNumber}`,
        channel: "sms",
      });

       // Send OTP via Email
    // await transporter.sendMail({
    //   from: `"Your App" <${EMAIL_USER}>`,
    //   to: email,
    //   subject: "Your OTP Code",
    //   text: `Your OTP code is ${emailOtp}`,
    //   html: `<p>Your OTP code is <strong>${emailOtp}</strong></p>`,
    // });
    console.log('transporter: ', transporter);



    res.send({
      status: 200,
      message: "OTP send successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send OTP");
  }
};

export const verifyOtp = async (req, res, next) => {
  const { countryCode, phoneNumber, otp } = req.body;
  console.log("req.body: ", req.body);
  try {
    const verifiedResponse = await client.verify.v2
      .services(TWILIO_SERVICE_SID)
      .verificationChecks.create({
        to: `+${countryCode}${phoneNumber}`,
        code: otp,
      });
    res.send({ status: 200, message: "OTP verified successfully" });
  } catch (error) {
    res
      .status(error?.status || 400)
      .send(error?.message || "Something went wrong!");
  }
};

export default { sendOtp, verifyOtp };
