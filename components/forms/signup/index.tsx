import React from "react";
import "@/components/css/form.css";
import LeftSection from "@/components/forms/LeftSection";
import Form from "@/components/forms/Form";

const SignUp = () => {
  return (
    <>
      <div className="flex items-center justify-around md:px-10 max-w-screen-2xl mx-auto">
        <LeftSection
          text={"Create Account"}
          small={"Create an AgricMe account."}
        />
        <div className="form-div">
          <Form page="Create Account" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
