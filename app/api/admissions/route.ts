import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import nodemailer from "nodemailer";
// hi
// Configure Nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true, // true for 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    const { fullName, email, phone, dob, gender, course, qualification, passingYear, marks, address } = formData;

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // 1. Send to Google Apps Script (maintaining existing sheet integration)
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxTixTHH07NqeVXW9ZoyeIfRHsNLOsWQQd1FGlNDjdHV-Ieik-imi5R_L1A9jcvlU8/exec";
    
    // Pass data to the script
    const params = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      params.append(key, String(value));
    });

    // We use a separate fetch because Google Apps Script doesn't handle JSON as easily as form params sometimes
    try {
      await axios.post(SCRIPT_URL, params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
    } catch (err) {
      console.error("Error sending to Google Script:", err);
      // We continue anyway to send the email, as the user primarily wants the mail sent
    }

    // 2. Send Email
    const htmlBody = `
 <html> 
 <head> 
   <meta charset="utf-8" /> 
   <meta name="viewport" content="width=device-width" /> 
   <title>Admission Confirmation - Kalam Institute</title> 
 </head> 
 <body style="margin:0; padding:0; background:#090a0e; font-family:'Segoe UI', Roboto, Arial, sans-serif;"> 
 
   <div style="display:none; max-height:0; overflow:hidden; opacity:0; mso-hide:all;"> 
     Your admission application for Kalam Institute has been received. 
   </div> 
 
   <div style="max-width:720px; margin:0 auto;"> 
     <!-- Top Banner --> 
     <div style="background:#141a26; border-radius:10px 10px 0 0; margin-top:24px;"> 
       <div style="padding:22px 0 18px 0; text-align:center;"> 
         <div style="color:#f8b851; font-weight:600; font-size:19px; letter-spacing:0.05em;">KIITech - Dr. A.P.J. Abdul Kalam
  Institute of Innovation and Technology</div> 
         <div style="color:#cfcfcf; font-size:11.5px; margin-top:2px;"> 
           Admissions 2026-27 · Majhgoan
         </div> 
       </div> 
       <div style="background:#191f29; padding:12px 0 14px 0;"> 
         <div style="text-align:center; font-size:22px; font-weight:700; color:#fed47d; letter-spacing:0.02em;"> 
           THANK YOU, <span style="color:#ffe494;">${fullName}!</span> 
         </div> 
         <div style="text-align:center; color:#e3b054; font-size:14.3px; font-weight:600; margin-top:3px;"> 
           Your application for <span style="color:#ffe494;">${course.toUpperCase()}</span> has been received successfully. 
         </div> 
       </div> 
     </div> 
     <div style="background:#14161e; border-radius:0 0 10px 10px; padding:32px 22px 24px 22px;"> 
       <!-- Greeting --> 
       <div style="color:#fff; font-size:15.8px; margin-bottom:8px;"> 
         Dear <b>${fullName}</b>, 
       </div> 
       <div style="color:#f4f1ed; font-size:14.1px; margin-bottom:17px;"> 
         Thanks for applying to <span style="color:#ffdb94; font-weight:600;">KIITech</span>. Below are your application details. 
       </div> 
       <div style="display:flex; gap:23px; margin-bottom:18px; align-items:flex-start;"> 
         <!-- Application Details Card --> 
         <div style="background:#16191f; padding:16px 18px 15px 19px; border-radius:9px; flex:1; border:1px solid #232426;"> 
           <div style="color:#ffcc82; font-weight:700; font-size:15px; margin-bottom:9px;"> 
             APPLICATION DETAILS 
           </div> 
           <div style="color:#ffb964; font-size:13.5px; margin-top:6px;"> 
             <b>Name:</b> <span style="color:#ebebeb; font-weight:400;">${fullName}</span> 
           </div> 
           <div style="color:#ffb964; font-size:13.5px; margin-top:6px;"> 
             <b>Course:</b> <span style="color:#ebebeb; font-weight:400;">${course.toUpperCase()}</span> 
           </div> 
           <div style="color:#ffb964; font-size:13.5px; margin-top:6px;"> 
             <b>Email:</b> <span style="color:#a6cdfd; font-weight:400; text-decoration:none;">${email}</span> 
           </div> 
           <div style="color:#888; font-size:11.2px; margin-top:11px;"> 
             Our admissions team will reach out within 48 working hours shortly on ${phone} for further steps. 
           </div> 
         </div> 
       </div> 
       <!-- Action Buttons --> 
       <div style="margin-bottom:23px;"> 
         <a href="mailto:admissions@kalaminstitute.edu.in" style="display:inline-block; background:#141a26; color:#ffd27a; font-weight:700; border-radius:6px; padding:9px 19px; font-size:15px; text-decoration:none; border:1.5px solid #ffb84d; margin-left:3px;">Contact Admissions</a> 
       </div> 
       <div style="color:#adadad; font-size:12.1px;"> 
         Please keep your documents (10th/12th marksheet, ID proof) ready for the next phase of admission. 
       </div> 
       <!-- Footer Details --> 
       <div style="padding-top:24px;"> 
         <div style="color:#ffcc7c; font-weight:700; font-size:12.5px;">KIITech - Dr. A.P.J. Abdul Kalam
  Institute of Innovation and Technology</div> 
         <div style="color:#d8d6cf; font-size:12px;"> 
      Majhgaon, West Singhbhum, Jharkhand – 833214, India
         </div> 
       </div> 
       <div style="color:#ffd27a; margin-top:18px; font-size:13.2px;"> 
         Admissions Team · <br> 
         <span style="color:#ffe3a3;">Email:</span> office@kiitech.org · <span style="color:#ffe3a3;">Phone:</span> +91 9337736501
       </div> 
     </div> 
   </div> 
 </body> 
 </html> 
 `;

    const mailOptions = {
      from: '"Kalam Institute Admissions" <office@kiitech.org>',
      to: email,
      subject: "Admission Application Received - Kalam Institute",
      html: htmlBody,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${email}`);

    return NextResponse.json({ success: true, message: "Application submitted and email sent" });
  } catch (error: any) {
    console.error("Error in admission API:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
