import React from "react";

const FormPreview = ({ data }) => {
  const {
    firstName,
    lastName,
    gmail,
    questionOne,
    questionTwo,
    questionThree,
    message,
    country,
    age,
    gender,
    termsAccepted,
  } = data;
  console.log(firstName);
  return (
    <div>
      {/* basic info */}
      <h4 className="py-2 font-semibold text-lg">User basic information</h4>
      <article className="grid grid-cols-1 sm:grid-cols-2 md:gird-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        <div className="">
          <ul>
            <li>
              <strong className="capitalize">Name</strong>:{" "}
              {`${firstName} ${lastName}`}
            </li>
            <li>
              <strong className="capitalize">Gmail</strong>: {gmail}
            </li>
            <li>
              <strong className="capitalize">Country</strong>: {country}
            </li>
          </ul>
        </div>
        <div className="">
          <ul>
            <li>
              <strong className="capitalize">Age</strong>: {age}
            </li>
            <li>
              <strong className="capitalize">Gender</strong>: {gender}
            </li>
            <li>
              <strong className="capitalize">Terms & conditions</strong>:{" "}
              {`${termsAccepted && true}`}
            </li>
          </ul>
        </div>
      </article>

      {/* question */}
      <article className="mt-4">
        <h4 className="py-2 font-semibold text-lg">User question answer</h4>
        {/* question 01 */}
        <ul>
          <li>
            <h4 className=" text-base font-bold w-full ">
              How do rate your overall satisfaction about the service provided?
            </h4>
            <span> Answer: {questionOne}</span>
          </li>

          <li className="mt-3">
            <h4 className=" text-base font-bold w-full ">
              How did you hear about our company?
            </h4>
            <span> Answer: {questionTwo}</span>
          </li>
          <li className="mt-3">
            <h4 className=" text-base font-bold w-full ">
              Do you think to suggest our company to a friend or parent?
            </h4>
            <span> Answer: {questionThree}</span>
          </li>
        </ul>
        <div className="mt-3">
          <h4 className=" text-base font-bold w-full ">User message</h4>
          <p>{message}</p>
        </div>
      </article>
    </div>
  );
};

export default FormPreview;
