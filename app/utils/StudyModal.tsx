import { useState } from "react";
import { toast } from "react-toastify";

interface StudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StudyModal: React.FC<StudyModalProps> = ({ isOpen, onClose }) => {
  const [isNotifyChecked, setIsNotifyChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");

  const handleCheckboxChange = () => {
    setIsNotifyChecked(!isNotifyChecked);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          link,
          notify: isNotifyChecked,
          email: isNotifyChecked ? email : null,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      toast.success("Submission successful!");
      console.log("Submission successful:", result);
      onClose(); // Close the modal after submission
    } catch (error) {
      toast.error("Error submitting the form. Please try again.");
      console.error("Error submitting the form:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden h-[calc(100%-1rem)] max-h-full bg-gray-800 bg-opacity-75">
      <div className="relative w-full max-w-md max-h-full p-4">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Submit a Study Link
            </h3>
            <button
              onClick={onClose}
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="link"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Study Link
                </label>
                <input
                  type="url"
                  name="link"
                  id="link"
                  value={link}
                  onChange={handleLinkChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="https://example.com/study"
                  required
                />
              </div>
              <div className="flex items-start">
                <input
                  id="notify"
                  type="checkbox"
                  checked={isNotifyChecked}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-amber-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800"
                />
                <label
                  htmlFor="notify"
                  className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                >
                  Do you want to be notified when your link is live?
                </label>
              </div>
              {isNotifyChecked && (
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                  />
                </div>
              )}
              <button
                type="submit"
                className="w-full text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyModal;
