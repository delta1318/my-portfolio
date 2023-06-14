import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build with{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          by&nbsp;
          <Link
            href={"https://github.com/delta1318"}
            className={"underline"}
            target="_blank"
          >
            {" "}
            Ankit Shah
          </Link>
        </div>
        <Link
          href={"https://www.linkedin.com/in/ankitshah0913/"}
          target="_blank"
          className={"underline"}
        >
          Say Hello <span className="no-underline">😊</span>{" "}
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
