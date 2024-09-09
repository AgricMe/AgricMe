"use client";
import Nav from "@/components/dashboard/Nav";
import SelectField from "@/components/forms/selectField";
import TextField from "@/components/forms/textField";
import avatar2 from "@/public/dashboard/avatar2.jpg";
import Image from "next/image";
import { useState } from "react";

const EditPage = () => {
  const [companyName, setCompanyName] = useState<string>();
  const [fullName, setFullName] = useState<string>();
  const [area, setArea] = useState<string>();
  const [idNumber, setIdNumber] = useState<number>();
  const [email, setEmail] = useState<string>();
  const [countryCode, setCountryCode] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<number>();
  const [address, setAddress] = useState<string>();
  return (
    <section className="pb-10 px-1">
      <div className="bg-[#fff] pb-2 px-1.5">
        <Nav />
      </div>
      <h3 className="text-[1.2rem] md:text-[1.6rem] text-[#222] font-bold my-4 px-4 md:px-6 lg:px-[3.5rem]">
        Edit Profile
      </h3>
      <div className="bg-[#eff6f1] h-screen px-4 md:px-6 lg:px-[3.5rem]">
        <div
          className={`bg-[#fff] flex flex-col lg:flex-row justify-between items-center md:items-start w-full h-auto px-4 md:px-6 py-8 md:py-6 shadow-md rounded-xl`}
        >
          <div className="w-full lg:w-[40%] flex flex-col justify-center items-center lg:mr-10 mb-6 lg:mb-0">
            <Image
              src={avatar2}
              alt="profile-img"
              width={120}
              height={120}
              className="rounded-full border-4 border-[#7EB693]"
            />
            <p className="text-[#222] font-semibold text-[.95rem] mt-4">
              Edit Profile Picture
            </p>
          </div>
          <div className="w-full flex flex-col items-start lg:mr-10">
            <div className="w-full flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
              <TextField
                label="Company Name"
                InputProps={{
                  placeholder: "Company Name",
                  type: "text",
                  required: true,
                  value: companyName,
                  onChange(e) {
                    setCompanyName(e.target.value);
                  },
                }}
                className="w-full"
                LabelProps={{ className: "text-[.8rem] font-[500]" }}
              />
              <TextField
                label="FullName"
                InputProps={{
                  placeholder: "FullName",
                  type: "text",
                  required: true,
                  value: fullName,
                  onChange(e) {
                    setFullName(e.target.value);
                  },
                }}
                className="w-full"
                LabelProps={{ className: "text-[.8rem] font-[500]" }}
              />
            </div>
            <SelectField
              label="Area"
              value={area}
              LabelProps={{ className: "!text-[.9rem] font-[500]" }}
              onChange={(e) => setArea(e.target.value)}
              className=""
            >
              <option value={"Select-country"} disabled>
                Select Area
              </option>
              <option value={"Oregun-UI"}>Oregun-UI</option>
            </SelectField>
            <TextField
              label="ID Number"
              InputProps={{
                placeholder: "ID Number",
                type: "tel",
                required: true,
                value: idNumber,
                onChange(e) {
                  let id = Number(e.target.value);
                  setIdNumber(id);
                },
              }}
              className="mt-4"
              LabelProps={{ className: "text-[.8rem] font-[500]" }}
            />
            <button
              type="button"
              className="hidden lg:flex bg-[#7EB693] text-[#fff] mt-12 px-10 py-2.5 rounded-md shadow-sm text-[.85rem]"
            >
              Save
            </button>
          </div>
          <div className="w-full flex flex-col mt-4 lg:mt-0">
            <TextField
              label="Email"
              InputProps={{
                placeholder: "Email address",
                type: "email",
                required: true,
                value: email,
                onChange(e) {
                  setEmail(e.target.value);
                },
              }}
              LabelProps={{ className: "text-[.8rem] font-[500]" }}
            />

            <label
              htmlFor={"Phone Number"}
              className={`text-[.9rem] font-[500] mt-4 mb-1.5`}
            >
              Phone Number
            </label>
            <div className="flex justify-start items-center gap-4">
              <div className="w-[40%] md:w-[40%] lg:w-[30%]">
                <SelectField
                  value={area}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  <option value={"Select-country-code"} disabled>
                    Select Country Code
                  </option>
                  <option value={"+233"}>+233</option>
                  <option value={"+234"}>+234</option>
                </SelectField>
              </div>
              <TextField
                InputProps={{
                  placeholder: "Phone Number",
                  type: "tel",
                  required: true,
                  value: phoneNumber,
                  onChange(e) {
                    let PhoneNumber = Number(e.target.value);
                    setPhoneNumber(PhoneNumber);
                  },
                }}
              />
            </div>
            <TextField
              label="Address"
              InputProps={{
                placeholder: "Address",
                type: "text",
                required: true,
                value: address,
                onChange(e) {
                  setAddress(e.target.value);
                },
              }}
              className="mt-4"
              LabelProps={{ className: "text-[.8rem] font-[500]" }}
            />
          </div>
          <button
            type="button"
            className="flex lg:hidden bg-[#7EB693] text-[#fff] mt-8 px-10 py-2.5 rounded-md shadow-sm text-[.85rem]"
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditPage;
