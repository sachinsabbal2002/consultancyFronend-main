import React from "react";
import "./FooterStyle.css";

function Footer() {
  return (
    <div style={{ position: "relative", width: "100%", bottom: "0" }}>
      <div
        style={{
          color: "yellow",
          textAlign: "center",
          fontSize: "20px",
          background: "black",
        }}
      >
        E'Tax Consultancy-Self Service Portal, an initiative to fill Gst online
        by expert.
        <div className="icons">
          <div>
            <a
              href="https://www.youtube.com/@accountingarena1591"
              target="_balank"
            >
              <img src="https://tax2win.in/assets-new/img/new-theme/youtube.svg" />
            </a>{" "}
          </div>
          <div>
            <a href="https://www.instagram.com/govindsharma7777?igsh=YmFicHY2enpjbjJ4&utm_source=qr" target="_balank">
              <img src="https://tax2win.in/assets-new/img/new-theme/insta.svg" />
            </a>{" "}
          </div>
          <div>
            <a href="#twitter" target="_balank">
              <img src="https://tax2win.in/assets-new/img/new-theme/twiter.svg" />
            </a>{" "}
          </div>
          <div>
            <a href="#facebok" target="_balank">
              <img src="https://tax2win.in/assets-new/img/new-theme/fb.svg" />
            </a>{" "}
          </div>
          <div>
            <a href="#linkdin" target="_balank">
              <img src="https://tax2win.in/assets-new/img/new-theme/linkdin.svg" />
            </a>{" "}
          </div>
          <div>
            <a href="#whatapps" target="_balank">
              <img
                style={{ width: "25px", height: "25px" }}
                src="https://i.pinimg.com/originals/a7/5a/a1/a75aa10146a2b8c058959ce77e37f13a.png"
              />
            </a>{" "}
          </div>
        </div>
        <div
          className="mobile_email "
          // style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop:'2px'}}
        >
          <div>
            <a href="#calllink">
              {" "}
              <img
                src="https://tax2win.in/assets-new/img/new-theme/call.svg"
                alt="Call Now"
              />{" "}
              +91 8178569324
            </a>
          </div>
          <div>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new"  target="_balank">
              <img
                src="https://tax2win.in/assets-new/img/new-theme/mail.svg"
                alt="Call Now"
                width="32"
                height="32"
              />
              support@etaxconsultancey.in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
