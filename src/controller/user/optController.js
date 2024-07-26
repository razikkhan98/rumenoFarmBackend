import { config } from "dotenv";
config();
import twilio from "twilio";
import nodemailer from "nodemailer";
import { UserModel } from "../../model/user/user.js";

const { TWILIO_SERVICE_SID, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } =
  process.env;

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendOtp = async (req, res, next) => {
  const { countryCode, phoneNumber } = req.body;
  const emailOtp = Math.floor(100000 + Math.random() * 900000).toString();
  try {
    // check if mobile number already exists
    const user = await UserModel.findOne({ mobile: phoneNumber });
    if (!user) {
      return res.send({
        status: 400,
        message: "This number is not registered",
      });
    }
    //  send otp to mobile
    const otpResponse = await client.verify.v2
      .services(TWILIO_SERVICE_SID)
      .verifications.create({
        to: `+${countryCode}${phoneNumber}`,
        channel: "sms",
      });

    // Send OTP via Email
    let sendToEmail = await UserModel.findOne({ mobile: req.body.phoneNumber });
    if (sendToEmail) {
      sendToEmail.otp = emailOtp;
      await sendToEmail.save();
    }

    await transporter.sendMail({
      from: `"Your App" <${process.env.EMAIL_USER}>`,
      to: sendToEmail.email,
      subject: "Rumeno OTP",
      text: `Your OTP code is ${emailOtp}`,
      html: `<h3>Your OTP is <h1>${emailOtp}</h1></h3>
      <h4>Please use this code to reset your password. This OTP is valid for the next 60 second. Do not share this code with anyone.</h4>
      <br>
      <h4>Thank you,</h4>
      <h1>Rumeno</h1>`,
    });

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
  console.log('req.body: ', req.body);
  try {
    // verify email otp
    const verifyEmailOtp = await UserModel.findOne({
      mobile: phoneNumber,
      otp,
    });
    if (!verifyEmailOtp) {
      const verifiedResponse = await client.verify.v2
      .services(TWILIO_SERVICE_SID)
      .verificationChecks.create({
        to: `+${countryCode}${phoneNumber}`,
        code: otp,
      });
    }
    console.log('verifiedResponse: ', verifiedResponse);
    res.send({ status: 200, message: "OTP verified successfully" });
  } catch (error) {
    console.log('error: ', error);
    res
      .status(error?.status || 400)
      .send(error?.message || "Something went wrong!");
  }
};

export default { sendOtp, verifyOtp };
