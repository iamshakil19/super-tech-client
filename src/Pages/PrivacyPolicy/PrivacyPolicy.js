import React from "react";
import { useEffect } from "react";
import PageTitle from "../../Utils/PageTitle";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="poppins my-10 px-5">
      <PageTitle
        title={"Privacy Policy - Super Tech Furniture & Interior"}
      ></PageTitle>
      <div className="max-w-3xl mx-auto">
        <h3 className="lg:text-3xl text-xl text-center font-serif font-semibold text-black">
          Privacy Policy
        </h3>

        <div className="mt-10">
          <p>
            Being a smart, contemporary furniture brand, Super Tech aspires to
            make sure you get the best value and exciting experience. We also
            believe you have high expectations from Super Tech, and we too
            believe, we can deliver on our promises as long as we have you with
            us. With every passing day, we get to know each other better for
            sake of our enduring relationship. And you know, the relationship
            gets stronger when we know a bit more details about each other.
            That’s why, we are going to collect some details about you, and we
            will be the sole custodian to secure the privacy of those details
            for the best interest of both of us. Privacy Maintenance:
          </p>
          <ul className="list-disc list-inside mt-5">
            <li className="leading-relaxed">
              We always inform you of the purpose of any information we are
              going to ask you for
            </li>
            <li className="leading-relaxed">
              We clearly state where we are going to use that information
            </li>
            <li className="leading-relaxed">
              You know beforehand how long we are going to keep that information
              with us
            </li>
            <li className="leading-relaxed">
              We let you know based on that information only who can contact you
              Details We Ask For:
            </li>
            <li className="leading-relaxed">
              Photograph: When you go for a visual search, you select
              ‘photographs’ of our furniture. When you are done with searching
              and decide to log out, we remove your select ‘photographs’ of
              those chosen furniture
            </li>
            <li className="leading-relaxed">
              Names & Emails: To get back to you with feedback, we need to have
              your name and Email Sharing of Information
            </li>
            <li className="leading-relaxed">
              We do not share, exchange, spread, or trade your details to any
              third party, banks, and marketing agencies. Only business
              verticals of us who actually are there to serve you can access
              that information for your best interest
            </li>
            <li className="leading-relaxed">
              In case of any directive from state agencies or regulatory bodies,
              as a law-abiding corporate citizen, we have no choice but to share
              your details Data Security: We take a series of steps to maintain
              this
            </li>
            <li className="leading-relaxed">Data Encryption</li>
            <li className="leading-relaxed">Secure Server</li>
            <li className="leading-relaxed">Password</li>
            <li className="leading-relaxed">
              Logging Systems Data Preservation
            </li>
            <li className="leading-relaxed">
              We don’t store your personal information once they are no longer
              in use. Your searched photos are stored only for a few hours.
              Names and Emails remain with us as long as you wish them to be
              with us. Privacy Rights
            </li>
            <li className="leading-relaxed">
              Right to Access: You have the sole right to access your personal
              information you share with us. If you have the right to
              change/alter/modify them when you feel like, providing you contact
              us through proper channel
            </li>
            <li className="leading-relaxed">
              Right to Object: You have every right to inform us about any
              erroneous or misinformation we have for you. We shall rectify
              those immediately
            </li>
            <li className="leading-relaxed">
              Right to Withdraw: You have the sole right to withdraw your
              personal information anytime. In In this case, you need to inform
              us through the proper channel Share Your Mind: For any concern or
              query regarding our privacy policy, we are happy to listen from
              you: super.tech767@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
