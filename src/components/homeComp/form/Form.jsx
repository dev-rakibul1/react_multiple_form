import React, { useState } from "react";

import FormPreview from "../../formPreview/FormPreview";
import FormSuccessMeg from "./formSuccessMeg/FormSuccessMeg";

const Form = () => {
  const totalForm = [1, 2, 3, 4, 5];
  const [multiFromNumber, setMuliFormNumber] = useState(totalForm[0]);
  const [errorMeg, setErrorMeg] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  // user initial value set
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    gmail: "",
    country: "bangladesh", // Set the default selected option
    age: 0,
    gender: "", // Set the default gender
    termsAccepted: false,
    questionOne: "",
    questionTwo: "",
    questionThree: "",
    message: "",
  });

  const handleInputFields = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setUserInfo({ ...userInfo, termsAccepted: !userInfo.termsAccepted });
  };

  // question 1
  const handleRadioChange = (event) => {
    setUserInfo({ ...userInfo, questionOne: event.target.value });
  };

  // question 2
  const handleRadioChangeTwo = (event) => {
    setUserInfo({ ...userInfo, questionTwo: event.target.value });
  };

  // question 2
  const handleRadioChangeThree = (event) => {
    setUserInfo({ ...userInfo, questionThree: event.target.value });
  };

  // handle next and prev button
  const nextButton = () => {
    if (multiFromNumber === 1) {
      // first name
      if (userInfo.firstName === "") {
        setErrorMeg("First name is require");
        return;
      } else {
        setErrorMeg("");
      }

      // last name
      if (userInfo.lastName === "") {
        setErrorMeg("Last name is require");
        return;
      } else {
        setErrorMeg("");
      }

      // Gmail name and validation
      const filterEmail =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (userInfo.gmail === "") {
        setErrorMeg("Gmail is require.");
        return;
      } else if (!userInfo.gmail.match(filterEmail)) {
        setErrorMeg("Gmail is not valid!");
        return;
      } else {
        setErrorMeg("");
      }

      // age
      if (userInfo.age === "") {
        setErrorMeg("Age is require");
        return;
      } else if (userInfo.age < 1) {
        setErrorMeg("Age is must be positive value.");
        return;
      } else {
        setErrorMeg("");
      }

      // gender
      if (userInfo.gender === "") {
        setErrorMeg("Gender is require");
        return;
      } else {
        setErrorMeg("");
      }

      // terms condition
      if (userInfo.termsAccepted === false) {
        setErrorMeg("Accept our terms & condition");
        return;
      } else {
        setErrorMeg("");
      }
    }

    // form 2 validation
    if (multiFromNumber === 2) {
      if (userInfo.questionOne === "") {
        setErrorMeg("First question is require");
        return;
      } else {
        setErrorMeg("");
      }
    }
    // form 3 validation
    if (multiFromNumber === 3) {
      if (userInfo.questionTwo === "") {
        setErrorMeg("Second question is require");
        return;
      } else {
        setErrorMeg("");
      }
    }
    // form 4 validation
    if (multiFromNumber === 4) {
      if (userInfo.questionThree === "") {
        setErrorMeg("Question four is require");
        return;
      } else {
        setErrorMeg("");
      }

      if (userInfo.message === "") {
        setErrorMeg("Message is require.");
        return;
      } else {
        setErrorMeg("");
      }
    }

    setMuliFormNumber(multiFromNumber + 1);
    setErrorMeg("");
  };
  const prevButton = () => {
    setMuliFormNumber(multiFromNumber - 1);
  };

  const userCompleteInfo = [
    {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      gmail: userInfo.gmail,
      country: userInfo.country,
      age: userInfo.age,
      gender: userInfo.gender,
      termsAccepted: userInfo.termsAccepted,
      questionOne: userInfo.questionOne,
      questionTwo: userInfo.questionTwo,
      questionThree: userInfo.questionThree,
      message: userInfo.message,
    },
  ];

  console.log(userCompleteInfo);

  // Final form submit
  const finalFormSubmit = () => {
    console.log(userCompleteInfo);
    setIsSubmit(true);
  };

  return (
    <div className="w-full md:w-[75%] mx-auto mt-12">
      {errorMeg && (
        <div className="text-center w-full">
          <small className="text-center text-red-600 bg-red-200 p-2 mt-3 inline-block w-full rounded-sm">
            {errorMeg}
          </small>
        </div>
      )}

      {isSubmit ? null : (
        <div className="">
          <span className="font-semibold text-gray-400 text-base py-2 inline-block">
            {totalForm[totalForm.length - 1]}
          </span>
          <span className="font-semibold text-gray-400 text-base py-2 inline-block">
            /
          </span>
          <span className="font-semibold text-gray-400 text-base py-2 inline-block">
            {multiFromNumber}
          </span>
        </div>
      )}

      {/* title condition */}
      {multiFromNumber === 1 && (
        <h3 className="font-semibold text-gray-500">
          Please fill with your details
        </h3>
      )}

      {/* single form 01 */}
      {multiFromNumber === 1 && (
        <div>
          {/* First name */}
          <div className="">
            <input
              className="outline-0 border border-slate-300 w-full mt-5 p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
              type="text"
              name="firstName"
              id=""
              placeholder="First name"
              onChange={handleInputFields}
              value={userInfo.firstName}
            />
          </div>

          {/* Last name */}
          <div className="">
            <input
              className="outline-0 border border-slate-300 w-full mt-5 p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
              type="text"
              name="lastName"
              id=""
              placeholder="Last name"
              onChange={handleInputFields}
              value={userInfo.lastName}
            />
          </div>

          {/* Gmail */}
          <div className="">
            <input
              className="outline-0 border border-slate-300 w-full mt-5 p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
              type="email"
              name="gmail"
              id=""
              placeholder="Gmail"
              onChange={handleInputFields}
              value={userInfo.gmail}
            />
          </div>

          {/* select box */}
          <div className="border mt-5">
            <select
              className="outline-0 border border-slate-300 w-full  p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
              id=""
              onChange={handleInputFields}
              name="country"
              value={userInfo.country}
            >
              <option value="bangladesh">Bangladesh</option>
              <option value="bangladesh">Bangladesh</option>
              <option value="india">India</option>
              <option value="pakistan">Pakistan</option>
            </select>
          </div>

          {/* Age & Radio box */}
          <div className="flex items-center justify-between h-full mt-5">
            {/* age */}
            <input
              className="outline-0 border border-slate-300  p-2 rounded-sm focus:border-blue-500 transition-all duration-300"
              type="number"
              name="age"
              id=""
              placeholder="Age"
              onChange={handleInputFields}
              value={userInfo.age === 0 ? "" : userInfo.age}
            />

            {/* Male */}
            <div className="flex items-center justify-between w-full px-7">
              <div className="">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  className="text-lg"
                  onChange={handleInputFields}
                  checked={userInfo.gender === "male"}
                />
                <label for="male" className="text-gray-600 ml-2 text-lg">
                  Male
                </label>
              </div>

              {/* female */}
              <div className="">
                <input
                  id="female"
                  name="gender"
                  value="female"
                  type="radio"
                  className="text-lg"
                  onChange={handleInputFields}
                  checked={userInfo.gender === "female"}
                />

                <label for="female" className="text-gray-600 ml-2 text-lg">
                  Female
                </label>
              </div>
            </div>
          </div>

          {/* Terms and condition */}
          <div className="mt-5 flex items-center justify-start">
            <input
              type="checkbox"
              name="termsAccepted"
              id="terms"
              className="w-4 h-4 text-xl text-gray-500"
              checked={userInfo.termsAccepted}
              onClick={handleCheckboxChange}
              value={userInfo.termsAccepted}
            />
            <label htmlFor="terms" className=" font-normal ml-2 text-gray-700 ">
              Please accept our{" "}
              <a className="text-blue-700" href="#">
                Terms & condition
              </a>
            </label>
          </div>

          {/* btn */}
          <div className="text-center">
            <div className="flex items-center justify-end pt-12">
              <button
                className="px-9 py-2 rounded-md text-white mx-4 bg-blue-600 hover:bg-pink-600 transition-all duration-300 "
                onClick={nextButton}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {/* single form 02 */}
      {multiFromNumber === 2 && (
        <div>
          {/* Age & Radio box */}
          <div
            className={`${
              multiFromNumber === 0 && "mt-5"
            } flex items-center justify-between flex-col h-full`}
          >
            <h2 className="font-normal text-xl pb-3 w-full">
              How do rate your overall satisfaction about the service provided?
            </h2>
            <div className="flex items-start justify-center flex-col w-full px-2 mt-7">
              {/* question 1 */}
              <div className=" flex items-center justify-start">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      name="questionOne"
                      // onChange={handleInputFields}
                      type="radio"
                      className="radio checked:bg-blue-500"
                      value="Not Satisfied"
                      checked={userInfo.questionOne === "Not Satisfied"}
                      onChange={handleRadioChange}
                    />
                    <span className="label-text ml-2 text-base capitalize">
                      Not Satisfied
                    </span>
                  </label>
                </div>
              </div>

              {/* question 02 */}
              <div className="">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      name="questionOne"
                      // onChange={handleInputFields}
                      type="radio"
                      className="radio checked:bg-blue-500"
                      value="quite Satisfied"
                      checked={userInfo.questionOne === "quite Satisfied"}
                      onChange={handleRadioChange}
                    />
                    <span className="label-text text-base ml-2">
                      quite Satisfied
                    </span>
                  </label>
                </div>
              </div>
              {/* question 03 */}
              <div className="">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      name="questionOne"
                      // onChange={handleInputFields}
                      type="radio"
                      className="radio checked:bg-blue-500"
                      value="Satisfied"
                      checked={userInfo.questionOne === "Satisfied"}
                      onChange={handleRadioChange}
                    />
                    <span className="label-text text-base ml-2">Satisfied</span>
                  </label>
                </div>
              </div>
              {/* question 04*/}
              <div className="">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      name="questionOne"
                      // onChange={handleInputFields}
                      type="radio"
                      className="radio checked:bg-blue-500"
                      value="Completely Satisfied"
                      checked={userInfo.questionOne === "Completely Satisfied"}
                      onChange={handleRadioChange}
                    />
                    <span className="label-text text-base ml-2">
                      Completely Satisfied
                    </span>
                  </label>
                </div>
              </div>
              {/* question 05 */}
              <div className="">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      name="questionOne"
                      // onChange={handleInputFields}
                      type="radio"
                      className="radio checked:bg-blue-500"
                      value="extremely Satisfied"
                      checked={userInfo.questionOne === "extremely Satisfied"}
                      onChange={handleRadioChange}
                    />
                    <span className="label-text text-base ml-2">
                      extremely Satisfied
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* btn */}
          <div className="ml-auto flex items-center justify-end mt-12">
            <button
              className="px-9 py-2 rounded-md text-gray-500 mx-4 bg-gray-200 hover:bg-pink-600 transition-all duration-300 hover:text-white"
              onClick={prevButton}
            >
              Prev
            </button>
            <button
              className="px-9 py-2 rounded-md text-white mx-4 bg-blue-600 hover:bg-pink-600 transition-all duration-300 "
              onClick={nextButton}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* single form 03 */}
      {multiFromNumber === 3 && (
        <div>
          {/* Radio box */}
          <div
            className={`${
              multiFromNumber === 0 && "mt-5"
            } flex items-center justify-between flex-col h-full`}
          >
            <h2 className="font-normal text-xl pb-3 w-full">
              How did you hear about our company?
            </h2>
            <div className="flex items-start justify-center flex-col w-full px-2 mt-7">
              {/* question 1 */}
              <div className=" flex items-center justify-start">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      name="questionTwo"
                      type="radio"
                      value="Google search engine"
                      className="radio checked:bg-blue-500"
                      checked={userInfo.questionTwo === "Google search engine"}
                      onChange={handleRadioChangeTwo}
                    />
                    <span className="label-text ml-2 text-base capitalize">
                      Google search engine
                    </span>
                  </label>
                </div>
              </div>

              {/* question 02 */}
              <div className="">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      value="A friend of mine"
                      name="questionTwo"
                      type="radio"
                      className="radio checked:bg-blue-500"
                      checked={userInfo.questionTwo === "A friend of mine"}
                      onChange={handleRadioChangeTwo}
                    />
                    <span className="label-text text-base ml-2">
                      A friend of mine
                    </span>
                  </label>
                </div>
              </div>
              {/* question 03 */}
              <div className="">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      value="Print advertise"
                      name="questionTwo"
                      type="radio"
                      className="radio checked:bg-blue-500"
                      checked={userInfo.questionTwo === "Print advertise"}
                      onChange={handleRadioChangeTwo}
                    />
                    <span className="label-text text-base ml-2">
                      Print advertise
                    </span>
                  </label>
                </div>
              </div>
              {/* question 04*/}
              <div className="">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      value="Newspaper"
                      name="questionTwo"
                      type="radio"
                      className="radio checked:bg-blue-500"
                      checked={userInfo.questionTwo === "Newspaper"}
                      onChange={handleRadioChangeTwo}
                    />
                    <span className="label-text text-base ml-2">Newspaper</span>
                  </label>
                </div>
              </div>
              {/* question 05 */}
              <div className="">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      value="Other"
                      name="questionTwo"
                      type="radio"
                      className="radio checked:bg-blue-500"
                      checked={userInfo.questionTwo === "Other"}
                      onChange={handleRadioChangeTwo}
                    />
                    <span className="label-text text-base ml-2">Other</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* btn */}
          <div className="ml-auto flex items-center justify-end mt-12">
            <button
              className="px-9 py-2 rounded-md text-gray-500 mx-4 bg-gray-200 hover:bg-pink-600 transition-all duration-300 hover:text-white"
              onClick={prevButton}
            >
              Prev
            </button>
            <button
              className="px-9 py-2 rounded-md text-white mx-4 bg-blue-600 hover:bg-pink-600 transition-all duration-300 "
              onClick={nextButton}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* single form 04 */}
      {multiFromNumber === 4 && (
        <div>
          {/* Radio box */}
          <div
            className={`${
              multiFromNumber === 0 && "mt-5"
            } flex items-center justify-between flex-col h-full`}
          >
            <h2 className="font-normal text-xl pb-3 w-full">
              Do you think to suggest our company to a friend or parent?
            </h2>
            <div className="flex items-start justify-center flex-col w-full px-2 mt-7">
              {/* question 1 */}
              <div className=" flex items-center justify-start">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      value="No"
                      name="questionThree"
                      type="radio"
                      className="radio checked:bg-blue-500"
                      checked={userInfo.questionThree === "No"}
                      onChange={handleRadioChangeThree}
                    />
                    <span className="label-text ml-2 text-base capitalize">
                      No
                    </span>
                  </label>
                </div>
              </div>

              {/* question 02 */}
              <div className="">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      value="Maybe"
                      className="radio checked:bg-blue-500"
                      name="questionThree"
                      checked={userInfo.questionThree === "Maybe"}
                      onChange={handleRadioChangeThree}
                    />
                    <span className="label-text text-base ml-2">Maybe</span>
                  </label>
                </div>
              </div>
              {/* question 03 */}
              <div className="">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      value="Probably"
                      className="radio checked:bg-blue-500"
                      name="questionThree"
                      checked={userInfo.questionThree === "Probably"}
                      onChange={handleRadioChangeThree}
                    />
                    <span className="label-text text-base ml-2">Probably</span>
                  </label>
                </div>
              </div>
              {/* question 04*/}
              <div className="">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      name="questionThree"
                      type="radio"
                      value="100% sure"
                      className="radio checked:bg-blue-500"
                      checked={userInfo.questionThree === "100% sure"}
                      onChange={handleRadioChangeThree}
                    />
                    <span className="label-text text-base ml-2">100% sure</span>
                  </label>
                </div>
              </div>
              {/* question 05 */}
              <div className="w-full mt-5">
                <label htmlFor="text-area">
                  In no, please describe with few words why
                </label>
                <textarea
                  name="message"
                  onChange={handleInputFields}
                  id="text-area"
                  className="outline-0 border border-slate-300 w-full mt-2 p-2 rounded-sm focus:border-blue-500 transition-all duration-300 h-24"
                  placeholder="Type here additional info..."
                  value={userInfo.message}
                ></textarea>
              </div>
            </div>
          </div>

          {/* btn */}
          <div className="ml-auto flex items-center justify-end mt-12">
            <button
              className="px-9 py-2 rounded-md text-gray-500 mx-4 bg-gray-200 hover:bg-pink-600 transition-all duration-300 hover:text-white"
              onClick={prevButton}
            >
              Prev
            </button>
            <button
              className="px-9 py-2 rounded-md text-white mx-4 bg-blue-600 hover:bg-pink-600 transition-all duration-300 "
              onClick={nextButton}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* single form 05 */}
      {multiFromNumber === 5 && (
        <div>
          {/* Radio box */}

          {isSubmit ? (
            <>
              <FormSuccessMeg />
            </>
          ) : (
            <>
              <div
                className={`${
                  multiFromNumber === 0 && "mt-5"
                } flex items-center justify-between flex-col h-full`}
              >
                <div className="flex items-start justify-center flex-col w-full px-2"></div>
              </div>

              {
                // eslint-disable-next-line array-callback-return
                userCompleteInfo.map((user, i) => (
                  <FormPreview data={user} key={i} />
                ))
              }

              {/* btn */}
              <div className="ml-auto flex items-center justify-end mt-12">
                <button
                  className="px-9 py-2 rounded-md text-gray-500 mx-4 bg-gray-200 hover:bg-pink-600 transition-all duration-300 hover:text-white"
                  onClick={prevButton}
                >
                  Prev
                </button>
                <button
                  className="px-9 py-2 rounded-md text-white mx-4 bg-blue-600 hover:bg-pink-600 transition-all duration-300 "
                  onClick={finalFormSubmit}
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Form;
