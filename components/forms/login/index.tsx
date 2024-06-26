import React from "react";
import "@/components/css/form.css";
import LeftSection from "@/components/forms/LeftSection";
import Form from "@/components/forms/Form";

const LogIn = () => {
  return (
    <>
      <div className="flex items-center justify-around md:px-10 max-w-screen-2xl mx-auto">
        <LeftSection
          text={"Log In"}
          small={"Log in to your AgricMe account."}
        />
        <div className="form-div">
          <Form page="Log In" />
        </div>
      </div>
    </>
  );
};

export default LogIn;
