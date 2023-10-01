import React, { useEffect, useState } from "react";
import FormPreview from "../../components/formPreview/FormPreview";
import Spinner from "../../shared/menu/Spinner";
const url =
  "https://multi-step-form-server-o9a8qsu7w-dev-rakibul1.vercel.app/api/v1/user-feedback/";

const User = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  return (
    <>
      <div className="full-width-container ">
        <div className="w-full md:w-[60%] mx-auto mt-16 ">
          <div className="join join-vertical w-full">
            {loading ? (
              <Spinner />
            ) : (
              <>
                <h4 className="py-2 font-semibold text-lg text-pink-700">
                  Total user: {data?.data?.length}
                </h4>
                {!data?.data?.length ? (
                  <div className="flex items-center justify-center h-full mt-16">
                    <h2 className="text-gray-400 text-4xl">
                      User feedback not available.
                    </h2>
                  </div>
                ) : (
                  data?.data?.map((user, index) => (
                    <>
                      <div
                        key={index}
                        className={`collapse collapse-arrow join-item border border-base-300 ${
                          index === activeAccordion ? "collapse-open" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="my-accordion-4"
                          checked={index === activeAccordion}
                          onChange={() => handleAccordionClick(index)}
                        />
                        <div
                          className="collapse-title text-xl font-medium"
                          onClick={() => handleAccordionClick(index)}
                        >
                          <h3 className="font-bold text-blue-700">{`${
                            index + 1
                          }. ${user.firstName} ${user.lastName}`}</h3>
                        </div>
                        <div className="collapse-content bg-gray-100">
                          <div>
                            {/* basic info and body */}
                            <FormPreview data={user} />
                          </div>
                        </div>
                      </div>
                    </>
                  ))
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
