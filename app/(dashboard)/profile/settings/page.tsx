"use client";
import Nav from "@/components/dashboard/Nav";
import SelectField from "@/components/forms/selectField";
import TextField from "@/components/forms/textField";
import avatar2 from "@/public/dashboard/avatar2.jpg";
import Image from "next/image";
import { useState } from "react";

const EditPage = () => {
  const [activeId, setActiveId] = useState<string>("1");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [address1, setAddress1] = useState<string>("");
  const [address2, setAddress2] = useState<string>("");
  const [zipcode, setZipCode] = useState<string>("");
  const [currentpassword, setCurrentPassword] = useState<string>();
  const [newpassword, setNewPassword] = useState<string>();
  const [newpassword2, setNewPassword2] = useState<string>();
  const [language, setLanguage] = useState<string>("");
  const [timezone, setTimeZone] = useState<string>("");
  const [dateformat, setDateFormat] = useState<string>("");
  return (
    <section className="pb-10 px-1">
      <div className="bg-[#fff] pb-2 px-1.5">
        <Nav />
      </div>
      <div className="flex flex-col gap-4 px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center pt-6 pb-4 border-b-2 border-gray-300">
          <h3 className="text-[1.2rem] md:text-[1.6rem] text-[#222] font-bold ">
            Account
          </h3>

          <div className="flex items-center gap-4">
            <button
              id="1"
              type="button"
              className={`${
                activeId === "1" ? "bg-yellow-600" : "bg-yellow-300"
              } text-[#444] px-8 py-2.5 rounded-md shadow-sm text-[.85rem] font-medium duration-300`}
              onClick={() => setActiveId("1")}
            >
              General Settings
            </button>
            <button
              id="2"
              type="button"
              className={`${
                activeId === "2" ? "bg-yellow-600" : "bg-yellow-300"
              } text-[#444] px-8 py-2.5 rounded-md shadow-sm text-[.85rem] font-medium duration-300`}
              onClick={() => setActiveId("2")}
            >
              Email
            </button>
            <button
              id="3"
              type="button"
              className={`${
                activeId === "3" ? "bg-yellow-600" : "bg-yellow-300"
              } text-[#444] px-8 py-2.5 rounded-md shadow-sm text-[.85rem] font-medium duration-300`}
              onClick={() => setActiveId("3")}
            >
              Change Password
            </button>
            <button
              id="4"
              type="button"
              className={`${
                activeId === "4" ? "bg-yellow-600" : "bg-yellow-300"
              } text-[#444] px-8 py-2.5 rounded-md shadow-sm text-[.85rem] font-medium duration-300`}
              onClick={() => setActiveId("4")}
            >
              Preferences
            </button>
            <button
              id="5"
              type="button"
              className={`${
                activeId === "5" ? "bg-yellow-600" : "bg-yellow-300"
              } text-[#444] px-8 py-2.5 rounded-md shadow-sm text-[.85rem] font-medium duration-300`}
              onClick={() => setActiveId("5")}
            >
              Delete Account
            </button>
          </div>
        </div>
        <div className="md:px-6">
          <div className="bg-[#fff] w-full h-auto px-4 md:px-10 py-8 md:py-6 shadow-md rounded-xl transition-all duration-500">
            {activeId === "1" && (
              <div className="flex flex-col gap-[6rem]">
                <div className="flex flex-col gap-2.5">
                  <h1 className="text-[1.4rem] md:text-[1.8rem] text-[#222] font-bold ">
                    General Settings
                  </h1>
                  <p className="text-[#444] font-semibold text-[1rem]">
                    Your current primary email address is{" "}
                    <span className="text-[#7EB693]">
                      dashprops@example.com
                    </span>
                  </p>
                  <div className="border-b-2 border-gray-100 pt-2"></div>
                  <div className="flex flex-col gap-[3rem] mt-4">
                    <div className="flex justify-between items-center">
                      <h3 className="w-[45%] text-[1.1rem] text-[#333] font-medium">
                        Avatar
                      </h3>
                      <div className="w-full flex items-end gap-4">
                        <button
                          type="button"
                          className="bg-[#fff] text-[#7EB693] border border-gray-200 px-8 py-2.5 rounded-md shadow-sm text-[.85rem] font-medium"
                        >
                          Change
                        </button>
                        <button
                          type="button"
                          className="bg-[#fff] text-[#7EB693] border border-gray-200 px-8 py-2.5 rounded-md shadow-sm text-[.85rem] font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <h3 className="w-[45%] text-[1.1rem] text-[#333] font-medium">
                        Cover Photo
                      </h3>
                      <div className="w-full h-[170px] flex justify-center items-center border border-gray-200 rounded-xl">
                        <p className="text-gray-400 font-semibold text-[1rem]">
                          Drag image here. or
                          <span className="text-[#7EB693]"> Browse Files</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-[10%] ml-[31%] my-2 text-[#7EB693] bg-[#fff] border border-gray-200 py-2 rounded-md shadow-sm text-[.95rem] font-semibold"
                  >
                    Change
                  </button>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h1 className="text-[1.4rem] md:text-[1.8rem] text-[#222] font-bold ">
                    Basic Information
                  </h1>
                  <p className="text-[#444] font-semibold text-[1rem]">
                    Update some personal information. Your address will never be
                    publicly available.
                  </p>
                  <div className="border-b-2 border-gray-100 pt-2"></div>
                  <div className="flex flex-col gap-4 mt-4">
                    <div className="flex justify-between items-center">
                      <h3 className="w-[45%] text-[1.1rem] text-[#333] font-medium">
                        Full Name
                      </h3>
                      <div className="w-full flex gap-4">
                        <TextField
                          InputProps={{
                            placeholder: "First Name",
                            type: "text",
                            required: true,
                            value: firstName,
                            onChange(e) {
                              setFirstName(e.target.value);
                            },
                            className: "text-[.95rem] font-medium p-3.5",
                          }}
                        />
                        <TextField
                          InputProps={{
                            placeholder: "Last Name",
                            type: "text",
                            required: true,
                            value: lastName,
                            onChange(e) {
                              setLastName(e.target.value);
                            },
                            className: "text-[.95rem] font-medium p-3.5",
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <h3 className="w-[45%] text-[1.1rem] text-[#333] font-medium">
                        Email
                      </h3>
                      <TextField
                        InputProps={{
                          placeholder: "Email address",
                          type: "email",
                          required: true,
                          value: email,
                          onChange(e) {
                            setEmail(e.target.value);
                          },
                          className: "text-[.95rem] font-medium p-3.5",
                        }}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <h3 className="w-[45%] text-[1.1rem] text-[#333] font-medium">
                        Phone <span className="text-gray-400"> (Optional)</span>
                      </h3>
                      <TextField
                        InputProps={{
                          placeholder: "Phone",
                          type: "tel",
                          value: phone,
                          onChange(e) {
                            setPhone(e.target.value);
                          },
                          className: "text-[.95rem] font-medium p-3.5",
                        }}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <h3 className="w-[45%] text-[1.1rem] text-[#333] font-medium">
                        Location
                      </h3>
                      <div className="w-full flex flex-col gap-4">
                        <SelectField
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="text-[1rem] font-medium p-3.5 text-gray-400"
                        >
                          <option value={"Select Country"}>
                            Select Country
                          </option>
                          <option value={"Nigeria"}>Nigeria</option>
                        </SelectField>
                        <TextField
                          InputProps={{
                            placeholder: "City",
                            type: "text",
                            required: true,
                            value: city,
                            onChange(e) {
                              setCity(e.target.value);
                            },
                            className: "text-[.95rem] font-medium p-3.5",
                          }}
                        />
                        <TextField
                          InputProps={{
                            placeholder: "State",
                            type: "text",
                            required: true,
                            value: state,
                            onChange(e) {
                              setState(e.target.value);
                            },
                            className: "text-[.95rem] font-medium p-3.5",
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <h3 className="w-[45%] text-[1.1rem] text-[#333] font-medium">
                        Address line 1
                      </h3>
                      <TextField
                        InputProps={{
                          placeholder: "Address line 1",
                          type: "text",
                          value: address1,
                          required: true,
                          onChange(e) {
                            setAddress1(e.target.value);
                          },
                          className: "text-[.95rem] font-medium p-3.5",
                        }}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <h3 className="w-[45%] text-[1.1rem] text-[#333] font-medium">
                        Address line 2{" "}
                        <span className="text-gray-400"> (Optional)</span>
                      </h3>
                      <TextField
                        InputProps={{
                          placeholder: "Address line 2",
                          type: "text",
                          value: address2,
                          onChange(e) {
                            setAddress2(e.target.value);
                          },
                          className: "text-[.95rem] font-medium p-3.5",
                        }}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <h3 className="w-[45%] text-[1.1rem] text-[#333] font-medium">
                        Zip Code
                      </h3>
                      <TextField
                        InputProps={{
                          placeholder: "Zip Code",
                          type: "text",
                          value: zipcode,
                          required: true,
                          onChange(e) {
                            setZipCode(e.target.value);
                          },
                          className: "text-[.95rem] font-medium p-3.5",
                        }}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-[15%] mx-auto mt-8 mb-2 bg-[#7EB693] text-[#fff] py-3 rounded-md shadow-sm text-[.95rem] font-semibold"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}
            {activeId === "2" && (
              <div className="flex flex-col gap-2.5">
                <h1 className="text-[1.4rem] md:text-[1.8rem] text-[#222] font-bold ">
                  Email
                </h1>
                <p className="text-[#444] font-semibold text-[1rem]">
                  Your current primary email address is{" "}
                  <span className="text-[#7EB693]">dashprops@example.com</span>
                </p>
                <div className="border-b-2 border-gray-100 pt-2"></div>
                <div className="flex justify-between items-center my-12">
                  <h3 className="w-[45%] text-[1.5rem] text-[#222] font-normal">
                    New email address
                  </h3>
                  <div className="w-full flex flex-col gap-6">
                    <TextField
                      InputProps={{
                        placeholder: "Enter your Email address",
                        type: "email",
                        required: true,
                        value: email,
                        onChange(e) {
                          setEmail(e.target.value);
                        },
                        className: "text-[.95rem] font-medium p-3.5",
                      }}
                    />
                    <button
                      type="button"
                      className="w-[20%] bg-[#7EB693] text-[#fff] py-3 rounded-md shadow-sm text-[.95rem] font-semibold"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
            {activeId === "3" && (
              <div className="flex flex-col gap-2.5">
                <h1 className="text-[1.4rem] md:text-[1.8rem] text-[#222] font-bold ">
                  Change your password
                </h1>
                <p className="text-[#444] font-semibold text-[1rem]">
                  Your current primary email address is{" "}
                  <span className="text-[#7EB693]">dashprops@example.com</span>
                </p>
                <div className="border-b-2 border-gray-100 pt-2"></div>
                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex justify-between items-center">
                    <h3 className="w-[45%] text-[1.1rem] text-[#333] font-medium">
                      Current password
                    </h3>
                    <TextField
                      InputProps={{
                        placeholder: "Enter your current password",
                        type: "password",
                        required: true,
                        value: currentpassword,
                        onChange(e) {
                          setCurrentPassword(e.target.value);
                        },
                        className: "text-[.95rem] font-medium p-3.5",
                      }}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="w-[45%] text-[1.1rem] text-[#333] font-medium">
                      New password
                    </h3>
                    <TextField
                      InputProps={{
                        placeholder: "Enter your new password",
                        type: "password",
                        required: true,
                        value: newpassword,
                        onChange(e) {
                          setNewPassword(e.target.value);
                        },
                        className: "text-[.95rem] font-medium p-3.5",
                      }}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="w-[45%] text-[1.1rem] text-[#333] font-medium">
                      Confirm new password
                    </h3>
                    <TextField
                      InputProps={{
                        placeholder: "Confirm your new password",
                        type: "password",
                        required: true,
                        value: newpassword2,
                        onChange(e) {
                          setNewPassword2(e.target.value);
                        },
                        className: "text-[.95rem] font-medium p-3.5",
                      }}
                    />
                  </div>
                  <div className="flex flex-col justify-start items-center ml-[3.5rem] mt-4">
                    <h3 className="w-[45%] text-[1.1rem] text-[#222] font-bold">
                      Password requirements:
                    </h3>
                    <p className="w-[45%] text-[#444] font-medium text-[1rem] mb-4">
                      Ensure that these requirements are met:
                    </p>
                    <ul className="w-[45%] ml-[2.5rem]">
                      <li className="list-disc text-[#444] text-[.95rem]">
                        Minimum 8 characters long - the more, the better
                      </li>
                      <li className="list-disc text-[#444] text-[.95rem]">
                        At least one lowercase character
                      </li>
                      <li className="list-disc text-[#444] text-[.95rem]">
                        At least one uppercase character
                      </li>
                      <li className="list-disc text-[#444] text-[.95rem]">
                        At least one number, symbol, or whitespace character
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-[15%] mx-auto mt-8 mb-2 bg-[#7EB693] text-[#fff] py-3 rounded-md shadow-sm text-[.95rem] font-semibold"
                >
                  Save Changes
                </button>
              </div>
            )}
            {activeId === "4" && (
              <div className="flex flex-col gap-2.5">
                <h1 className="text-[1.4rem] md:text-[1.8rem] text-[#222] font-bold ">
                  Preferences
                </h1>
                <p className="text-[#444] font-semibold text-[1rem]">
                  Preferences settings affects your view of the entire
                  application
                </p>
                <div className="border-b-2 border-gray-100 pt-2"></div>
                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex justify-between items-center">
                    <h3 className="w-[45%] text-[1.1rem] text-[#333] font-medium">
                      Language
                    </h3>
                    <SelectField
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="text-[1rem] font-medium p-3.5 text-gray-400"
                    >
                      <option value={"Select Language"} disabled>
                        Select Language
                      </option>
                      <option value={"English"}>English</option>
                    </SelectField>
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="w-[45%] text-[1.1rem] text-[#333] font-medium">
                      Time Zone
                    </h3>
                    <SelectField
                      value={timezone}
                      LabelProps={{ className: "!text-[.9rem] font-[500]" }}
                      onChange={(e) => setTimeZone(e.target.value)}
                      className="text-[1rem] font-medium p-3.5 text-gray-400"
                    >
                      <option value={"Select Time Zone"} disabled>
                        Select Time Zone
                      </option>
                      <option value={"GMT +5.30"}>GMT +5.30</option>
                    </SelectField>
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="w-[45%] text-[1.1rem] text-[#333] font-medium">
                      Date Format
                    </h3>
                    <SelectField
                      value={dateformat}
                      LabelProps={{ className: "!text-[.9rem] font-[500]" }}
                      onChange={(e) => setDateFormat(e.target.value)}
                      className="text-[1rem] font-medium p-3.5 text-gray-400"
                    >
                      <option value={"Select Date Format"} disabled>
                        Select Date Format
                      </option>
                      <option value={"No Preferences"}>No Preferences</option>
                    </SelectField>
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="w-[45%] text-[1.1rem] text-[#333] font-medium">
                      Default
                    </h3>
                    <div className="w-full flex items-center gap-6">
                      <div className="flex justify-center items-center gap-3">
                        <input
                          type="radio"
                          name="on"
                          id="on"
                          className="accent-green-700 cursor-pointer w-4 h-4"
                        />
                        <p className="text-[1rem] text-[#333] font-medium">
                          On
                        </p>
                      </div>
                      <div className="flex justify-center items-center gap-3">
                        <input
                          type="radio"
                          name="off"
                          id="off"
                          checked={true}
                          className="accent-green-700 cursor-pointer w-4 h-4"
                        />
                        <p className="text-[1rem] text-[#333] font-medium">
                          Off
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="w-[45%] text-[1.1rem] text-[#333] font-medium">
                      Choose option default
                    </h3>
                    <div className="w-full flex flex-col gap-6">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          name="tell me"
                          id="tell me"
                          className="accent-green-700 w-4 h-4 cursor-pointer"
                        />
                        <p className="text-[1rem] text-[#333] font-medium">
                          Tell me
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          name="email"
                          id="email"
                          className="accent-green-700 w-4 h-4 cursor-pointer"
                        />
                        <p className="text-[1rem] text-[#333] font-medium">
                          Open e-mail
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          name="default"
                          id="default"
                          checked={true}
                          className="accent-green-700 w-4 h-4 cursor-pointer"
                        />
                        <p className="text-[1rem] text-[#333] font-medium">
                          Show default
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-[15%] mx-auto mt-8 mb-2 bg-green-700 text-[#fff] py-3 rounded-md shadow-sm text-[.95rem] font-semibold"
                >
                  Save Changes
                </button>
              </div>
            )}
            {activeId === "5" && (
              <div className="flex flex-col gap-2.5">
                <h1 className="text-[1.4rem] md:text-[1.8rem] text-red-600 font-bold ">
                  Danger Zone
                </h1>
                <p className="text-[#444] font-semibold text-[1rem]">
                  Delete your profile, along with your authentication
                  associations.
                </p>
                <div className="border-b-2 border-gray-100 pt-2"></div>
                <p className="text-[#555] font-semibold text-[1.1rem] mt-8">
                  Delete any and all contents you have, such as articles,
                  comments, your reading list or chat messages.
                </p>
                <p className="text-[#555] font-semibold text-[1.1rem]">
                  Allow your username to become available to anyone
                </p>
                <button
                  type="button"
                  className="w-[15%] bg-red-600 text-[#fff] py-3 my-4 rounded-xl shadow-sm text-[.95rem] font-semibold"
                >
                  Delete Account
                </button>
                <p className="text-[#555] font-semibold text-[1.1rem]">
                  Feel free to contact
                  <span className="text-[#7EB693]">
                    {" "}
                    dashprops@example.com{" "}
                  </span>
                  with any questions.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditPage;
