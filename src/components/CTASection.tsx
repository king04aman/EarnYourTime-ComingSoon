import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { db } from "../../firebaseConfig";
import { collection, query, where, getDocs, addDoc, Timestamp } from "firebase/firestore";
import validator from "email-validator";


const handleNotify = async (email: string) => {
  if (!email || !validator.validate(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  try {
    // Check if the email already exists in Firestore
    const emailCollection = collection(db, "emails-waitlisted");
    const q = query(emailCollection, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      alert("This email is already on the waitlist.");
      return;
    }

    // Rate-limiting logic (if applicable)
    const now = Timestamp.now();
    const timeGap = 60 * 5000; // 5 minutes
    const previousSubmissions = querySnapshot.docs.map((doc) => doc.data());
    if (
      previousSubmissions.some(
        (submission) => now.toMillis() - submission.timestamp?.toMillis() < timeGap
      )
    ) {
      alert("Please wait a while before submitting another email.");
      return;
    }

    // Add email and timestamp to Firestore
    await addDoc(emailCollection, { email, timestamp: now });
    alert("You've been added to the waitlist!");
  } catch (error) {
    console.error("Error adding email:", error);
    alert("Failed to add email. Please try again.");
  }
};
interface CTASectionProps {
  theme: string;
}

const CTASection: React.FC<CTASectionProps> = ({ theme }) => {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <section id="join-waitlist" className="py-20">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto text-center p-12 rounded-2xl
            ${theme === "dark" ? "bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-800" : "bg-gradient-to-r from-blue-50 to-blue-100"}`}
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Digital Habits?
          </h2>
          <p
            className={`text-xl mb-8 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
          >
            Join the waitlist and be the first to experience the future of
            productivity.
          </p>
          <div className="flex flex-col items-center">
            <div
              className={`transition-all duration-700 ease-in-out transform ${showEmailInput ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
                }`}
            >
              {!showEmailInput && (
                <button
                  onClick={() => setShowEmailInput(true)}
                  className={`px-8 py-4 rounded-full font-medium inline-flex items-center space-x-2
            transition-all duration-300 transform hover:scale-105
            ${theme === "dark" ? "bg-blue-600 hover:bg-blue-500 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
                >
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Email Input Section*/}
            <div
              className={`flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-700 ease-in-out transform ${showEmailInput ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"
                }`}
            >
              {showEmailInput && (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className={`flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500
                ${theme === "dark" ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"} border`}
                  />
                  <button
                    onClick={() => handleNotify(email)}
                    className={`px-8 py-3 rounded-full font-medium
                ${theme === "dark" ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"}
                text-white transition-colors duration-200`}
                  >
                    Notify Me
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
