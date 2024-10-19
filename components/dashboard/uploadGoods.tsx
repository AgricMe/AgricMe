import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import ModalOverlay from "../shared/modalOverlay";
import { Courgette } from "next/font/google";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

const cursive = Courgette({
  subsets: ["latin"],
  weight: "400",
});
const categories = [
  {
    id: 1,
    category: "Animal Production",
    content: ["Farm Animals", "Manure", "Others"],
  },
  {
    id: 2,
    category: "Crop Production",
    content: ["Vegetables", "Feeds and Seeds", "Others"],
  },
  {
    id: 3,
    category: "Digital Agricultural Products",
    content: ["Online Courses", "Ebook Videos", "Magazines"],
  },
  {
    id: 4,
    category: "Services",
    content: ["Veterinary Doctor", "Carpenter", "Electrician"],
  },
];
const states = [
  {
    id: 1,
    state: "Oyo",
    content: ["Moniya", "Bodija", "Others"],
  },
  {
    id: 2,
    state: "FCT Abuja",
    content: ["Garki", "Others"],
  },
  {
    id: 3,
    state: "Lagos",
    content: ["Oshodi", "Ejigbo", "Ikotun"],
  },
  {
    id: 4,
    state: "Ekiti",
    content: ["Oye", "Others"],
  },
];

interface Props {
  close: () => void;
}

const UploadGoodsModal = ({ close }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [Category, setCategory] = useState<string>();
  const [Content, setContent] = useState<string>();
  const [State, setState] = useState<string>();
  const [StateContent, setStateContent] = useState<string>();
  const [step, setStep] = useState<0 | 1 | 2 | 3 | 4>(0);
  return (
    <ModalOverlay width={800}>
      <div className="flex justify-end items-center">
        <RiCloseLine
          size={26}
          className="text-[#444] cursor-pointer"
          onClick={close}
        />
      </div>
      <div className="flex flex-col justify-center items-center py-8">
        <div className="w-full flex flex-col bg-gray-300 border border-gray-400 p-3 rounded-md shadow-md mb-4">
          {step < 2 && (
            <div
              className="flex justify-center items-center cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <h3 className={`text-[.9rem] text-gray-500 font-normal`}>
                Category
              </h3>
              {isOpen ? (
                <IoIosArrowDown
                  size={16}
                  className="cursor-pointer text-gray-500 ml-auto"
                />
              ) : (
                <IoIosArrowForward
                  size={16}
                  className="cursor-pointer text-gray-500 ml-auto"
                />
              )}
            </div>
          )}
          {step >= 2 && (
            <div className="flex justify-center items-center cursor-pointer">
              <h3 className={`text-[.9rem] text-green-800 font-normal`}>
                {Category}
              </h3>
              <p className="font-bold mx-[2rem] text-gray-400">|</p>
              <h3 className={`text-[.9rem] font-semibold`}>{Content}</h3>
              {isOpen ? (
                <IoIosArrowDown
                  size={16}
                  className="cursor-pointer text-gray-500 ml-auto"
                />
              ) : (
                <IoIosArrowForward
                  size={16}
                  className="cursor-pointer text-gray-500 ml-auto"
                />
              )}
            </div>
          )}
          {step === 0 && isOpen && (
            <div className="flex flex-col mt-6 duration-300">
              {categories.map(({ id, category }) => {
                return (
                  <div
                    key={id}
                    className={`${
                      id < categories.length &&
                      "pb-1.5 border-b border-gray-400"
                    } cursor-pointer pt-4 font-semibold`}
                    onClick={() => {
                      setCategory(category);
                      setStep(1);
                    }}
                  >
                    {category}
                  </div>
                );
              })}
            </div>
          )}
          {step === 1 && isOpen && (
            <div className="w-full flex items-start gap-10 md:gap-[8rem] mt-6 duration-300">
              <h3 className={`w-[25%] text-[.9rem] text-green-800`}>
                {Category}
              </h3>
              <div className="w-full flex flex-col mt-6 duration-300">
                {categories.map(({ category, content }) => {
                  if (Category === category) {
                    return content.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`${
                            index < content.length - 1 &&
                            "pb-1.5 border-b border-gray-400"
                          } w-full pt-4 font-semibold cursor-pointer`}
                          onClick={() => {
                            setContent(item);
                            setStep(2);
                          }}
                        >
                          {item}
                        </div>
                      );
                    });
                  }
                })}
              </div>
            </div>
          )}
        </div>
        {step < 2 && (
          <div className="flex justify-end items-end ml-auto">
            <button
              type="button"
              className="bg-orange-100 px-[2.5rem] py-2.5 rounded-md shadow-sm"
              onClick={() => {
                setCategory(undefined);
                setContent(undefined);
                setIsOpen(false);
                setStep(0);
              }}
            >
              Clear
            </button>
          </div>
        )}
        {step >= 2 && isOpen && (
          <>
            <div className="w-full flex flex-col bg-gray-300 border border-gray-400 p-3 rounded-md shadow-md my-4">
              {step === 2 && (
                <>
                  <div
                    className="flex justify-center items-center cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <h3 className={`text-[.9rem] text-gray-500 font-normal`}>
                      Select Location
                    </h3>
                    {isOpen ? (
                      <IoIosArrowDown
                        size={16}
                        className="cursor-pointer text-gray-500 ml-auto"
                      />
                    ) : (
                      <IoIosArrowForward
                        size={16}
                        className="cursor-pointer text-gray-500 ml-auto"
                      />
                    )}
                  </div>
                </>
              )}
              {step === 4 && (
                <>
                  <div className="flex justify-center items-center cursor-pointer">
                    <h3 className={`text-[.9rem] text-green-800 font-normal`}>
                      {State}
                    </h3>
                    <p className="font-bold mx-[2rem] text-gray-400">|</p>
                    <h3 className={`text-[.9rem] font-semibold`}>
                      {StateContent}
                    </h3>
                    {isOpen ? (
                      <IoIosArrowDown
                        size={16}
                        className="cursor-pointer text-gray-500 ml-auto"
                      />
                    ) : (
                      <IoIosArrowForward
                        size={16}
                        className="cursor-pointer text-gray-500 ml-auto"
                      />
                    )}
                  </div>
                </>
              )}
              {step === 2 && isOpen && (
                <div className="flex flex-col mt-6 duration-300">
                  {states.map(({ id, state }) => {
                    return (
                      <div
                        key={id}
                        className={`${
                          id < states.length &&
                          "pb-1.5 border-b border-gray-400"
                        } cursor-pointer pt-4 font-semibold`}
                        onClick={() => {
                          setState(state);
                          setStep(3);
                        }}
                      >
                        {state}
                      </div>
                    );
                  })}
                </div>
              )}
              {step === 3 && isOpen && (
                <div className="w-full flex items-start gap-10 md:gap-[8rem] mt-6 duration-300">
                  <h3 className={`w-[25%] text-[.9rem] text-green-800`}>
                    {State}
                  </h3>
                  <div className="w-full flex flex-col mt-6 duration-300">
                    {states.map(({ state, content }) => {
                      if (State === state) {
                        return content.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className={`${
                                index < content.length - 1 &&
                                "pb-1.5 border-b border-gray-400"
                              } w-full pt-4 font-semibold cursor-pointer`}
                              onClick={() => {
                                setStateContent(item);
                                setStep(4);
                              }}
                            >
                              {item}
                            </div>
                          );
                        });
                      }
                    })}
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-end items-end ml-auto">
              <button
                type="button"
                className="bg-orange-100 px-[2.5rem] py-2.5 rounded-md shadow-sm"
                onClick={() => {
                  setState(undefined);
                  setStateContent(undefined);
                  setIsOpen(false);
                  setStep(1);
                }}
              >
                Clear
              </button>
            </div>
          </>
        )}
      </div>
    </ModalOverlay>
  );
};
export default UploadGoodsModal;
