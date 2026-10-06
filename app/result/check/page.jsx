"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaChevronDown, FaExclamationCircle } from "react-icons/fa";

const CheckingResult = () => {
  const [session, setSession] = useState("");
  const [semester, setSemester] = useState("");
  const [roll, setRoll] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  // =========================================
  // HANDLE SUBMIT
  // =========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error
    setError("");

    // =========================================
    // FRONTEND VALIDATION
    // =========================================

    if (!session || !semester || !roll.trim()) {
      setError(
        "Please select session, semester and enter your roll number."
      );
      return;
    }

    const resultData = {
      session: session.trim(),
      semester: semester.trim(),
      roll: roll.trim(),
    };

    console.log("Sending to backend:", resultData);

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_SIDE}/result`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(resultData),
        }
      );

      const data = await res.json();

      console.log("Backend status:", res.status);
      console.log("Backend response:", data);

      // =========================================
      // RESULT FOUND
      // =========================================

      if (res.ok && data.success) {
        console.log("✅ RESULT FOUND");
        console.log("Result data:", data.data);

        // Save result
        sessionStorage.setItem(
          "studentResult",
          JSON.stringify(data.data)
        );

        // Go to result page
        router.push("/result/check/viewresult");

        return;
      }

      // =========================================
      // RESULT NOT FOUND
      // =========================================

      if (res.status === 404) {
        setError(
          "No result found for the selected session, semester and roll number."
        );

        return;
      }

      // =========================================
      // OTHER BACKEND ERROR
      // =========================================

      setError(
        data.message || "Something went wrong. Please try again."
      );
    } catch (error) {
      console.error("❌ Request failed:", error);

      setError(
        "Unable to connect to the server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#f4f8ff]
        flex
        items-center
        justify-center
        px-4
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-100/60
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-indigo-100/60
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-50/50
          blur-3xl
        "
      />

      {/* Form Card */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-[450px]
          rounded-2xl
          border
          border-white
          bg-white/95
          p-6
          sm:p-7
          shadow-[0_20px_60px_rgba(37,99,235,0.12)]
          ring-1
          ring-slate-200/60
        "
      >
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-bold">
            BUET Individual Results
          </h1>

          <p className="text-sm text-slate-500">
            Check your Semester results instantly by roll number
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6">

          {/* =========================================
              SESSION
          ========================================= */}

          <div className="mb-5">
            <label
              htmlFor="session"
              className="
                mb-2
                block
                text-[13px]
                font-medium
                text-slate-700
              "
            >
              Session
            </label>

            <div className="relative">
              <select
                id="session"
                value={session}
                onChange={(e) => {
                  setSession(e.target.value);
                  setError("");
                }}
                disabled={loading}
                className="
                  h-[44px]
                  w-full
                  appearance-none
                  rounded-lg
                  border
                  border-slate-200
                  bg-white
                  px-3
                  text-[13px]
                  text-slate-700
                  outline-none
                  shadow-[0_2px_8px_rgba(15,23,42,0.05)]
                  transition-all
                  duration-200
                  hover:border-slate-300
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-500/10
                  focus:shadow-[0_4px_14px_rgba(37,99,235,0.10)]
                  disabled:cursor-not-allowed
                  disabled:bg-slate-50
                "
              >
                <option value="">Select Session</option>
                <option value="2017-18">2017-18</option>
                <option value="2018-19">2018-19</option>
                <option value="2019-20">2019-20</option>
                <option value="2020-21">2020-21</option>
                <option value="2021-22">2021-22</option>
                <option value="2022-23">2022-23</option>
                <option value="2023-24">2023-24</option>
                <option value="2024-25">2024-25</option>
                <option value="2025-26">2025-26</option>
                <option value="2025-26">2026-27</option>
                <option value="2025-26">2027-28</option>
                <option value="2025-26">2028-29</option>
                <option value="2025-26">2029-30</option>
                <option value="2025-26">2030-31</option>
                <option value="2025-26">2031-32</option>


                 
                </select>

              <FaChevronDown
                className="
                  pointer-events-none
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-[10px]
                  text-slate-400
                "
              />
            </div>
          </div>

          {/* =========================================
              SEMESTER
          ========================================= */}

          <div className="mb-5">
            <label
              htmlFor="semester"
              className="
                mb-2
                block
                text-[13px]
                font-medium
                text-slate-700
              "
            >
              Semester
            </label>

            <div className="relative">
              <select
                id="semester"
                value={semester}
                onChange={(e) => {
                  setSemester(e.target.value);
                  setError("");
                }}
                disabled={loading}
                className="
                  h-[44px]
                  w-full
                  appearance-none
                  rounded-lg
                  border
                  border-slate-200
                  bg-white
                  px-3
                  text-[13px]
                  text-slate-700
                  outline-none
                  shadow-[0_2px_8px_rgba(15,23,42,0.05)]
                  transition-all
                  duration-200
                  hover:border-slate-300
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-500/10
                  focus:shadow-[0_4px_14px_rgba(37,99,235,0.10)]
                  disabled:cursor-not-allowed
                  disabled:bg-slate-50
                "
              >
                <option value="">Select Semester</option>
                <option value="1st">1st Semester</option>
                <option value="2nd">2nd Semester</option>
                <option value="3rd">3rd Semester</option>
                <option value="4th">4th Semester</option>
                <option value="5th">5th Semester</option>
                <option value="6th">6th Semester</option>
                <option value="7th">7th Semester</option>
                <option value="8th">8th Semester</option>
              </select>

              <FaChevronDown
                className="
                  pointer-events-none
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-[10px]
                  text-slate-400
                "
              />
            </div>
          </div>

          {/* =========================================
              ROLL NUMBER
          ========================================= */}

          <div className="mb-5">
            <label
              htmlFor="roll"
              className="
                mb-2
                block
                text-[13px]
                font-medium
                text-slate-700
              "
            >
              Roll Number
            </label>

            <input
              id="roll"
              type="text"
              inputMode="numeric"
              maxLength={10}
              value={roll}
              onChange={(e) => {
                setRoll(e.target.value);
                setError("");
              }}
              disabled={loading}
              placeholder="Enter your roll number"
              className="
                h-[44px]
                w-full
                rounded-lg
                border
                border-slate-200
                bg-white
                px-3
                text-[13px]
                text-slate-700
                outline-none
                shadow-[0_2px_8px_rgba(15,23,42,0.05)]
                transition-all
                duration-200
                placeholder:text-slate-400
                hover:border-slate-300
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-500/10
                focus:shadow-[0_4px_14px_rgba(37,99,235,0.10)]
                disabled:cursor-not-allowed
                disabled:bg-slate-50
              "
            />
          </div>

          {/* =========================================
              ERROR MESSAGE
          ========================================= */}

          {error && (
            <div
              className="
                mb-5
                flex
                items-start
                gap-2
                rounded-lg
                border
                border-red-200
                bg-red-50
                px-3
                py-2.5
                text-left
              "
            >
              <FaExclamationCircle
                className="
                  mt-[2px]
                  shrink-0
                  text-[13px]
                  text-red-500
                "
              />

              <p
                className="
                  text-[11px]
                  font-medium
                  leading-4
                  text-red-600
                "
              >
                {error}
              </p>
            </div>
          )}

          {/* =========================================
              VIEW RESULT
          ========================================= */}

          <button
            type="submit"
            disabled={loading}
            className="
              h-[44px]
              w-full
              rounded-lg
              bg-[#2161ee]
              text-[13px]
              font-semibold
              text-white
              shadow-[0_8px_20px_rgba(37,99,235,0.25)]
              transition-all
              duration-200
              hover:bg-[#1554dc]
              hover:shadow-[0_10px_25px_rgba(37,99,235,0.32)]
              active:scale-[0.98]
              disabled:cursor-not-allowed
              disabled:opacity-70
              flex
              items-center
              justify-center
              gap-2
            "
          >
            {loading ? (
              <>
                {/* Loading Spinner */}
                <span
                  className="
                    h-4
                    w-4
                    animate-spin
                    rounded-full
                    border-2
                    border-white/30
                    border-t-white
                  "
                />

                <span>Checking Result...</span>
              </>
            ) : (
              "View Result"
            )}
          </button>
        </form>

        {/* =========================================
            SPONSORED BY
        ========================================= */}

        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="text-[11px] font-medium text-slate-600">
            Sponsored by
          </span>

          <div
            className="
              flex
              h-[38px]
              w-[38px]
              items-center
              justify-center
              rounded-full
              border
              border-green-600
              bg-white
            "
          >
            <span className="text-[9px] font-bold text-green-700">
              BdREN
            </span>
          </div>

          <span className="text-[14px] font-bold text-slate-800">
            BdREN
          </span>
        </div>
      </div>
    </main>
  );
};

export default CheckingResult;

