"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const ViewResult = () => {
  const router = useRouter();

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedResult = sessionStorage.getItem("studentResult");

      if (!storedResult) {
        router.replace("/result/check");
        return;
      }

      const resultData = JSON.parse(storedResult);

      console.log("View Result Data:", resultData);

      setResult(resultData);
    } catch (error) {
      console.error("Result loading error:", error);
      router.replace("/result/check");
    } finally {
      setLoading(false);
    }
  }, [router]);

  // =========================================
  // LOADING
  // =========================================

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fff7ff] px-4">
        <div className="text-center">
          <div className="mx-auto h-9 w-9 animate-spin rounded-full border-4 border-green-200 border-t-green-600" />

          <p className="mt-3 text-sm text-slate-500">
            Loading result...
          </p>
        </div>
      </main>
    );
  }

  // =========================================
  // NO RESULT
  // =========================================

  if (!result) {
    return null;
  }

  // =========================================
  // TOP 20 HANDLER
  // =========================================

  const handleTopStudents = () => {
    try {
      const topStudentsInfo = {
        session: result.session,
        semester: result.semester,
      };

      console.log("Top Students Info:", topStudentsInfo);

      sessionStorage.setItem(
        "topStudentsInfo",
        JSON.stringify(topStudentsInfo)
      );

      router.push("/result/check/viewresult/topresult");
    } catch (error) {
      console.error("Top students navigation error:", error);
    }
  };

  return (
    <main className="min-h-screen bg-[#fff7ff] px-3 py-5 sm:px-6 sm:py-8">
      <div className="mx-auto w-full max-w-[850px]">

        {/* =========================================
            HEADER
        ========================================= */}

        <header className="text-center">

          {/* Roll */}
          <h1
            className="
              text-[25px]
              font-semibold
              leading-none
              tracking-tight
              text-[#111111]
              sm:text-3xl
            "
          >
            # {result?.code}
          </h1>

          {/* Department */}
          <p
            className="
              mt-2
              text-[13px]
              font-normal
              leading-5
              text-black
              sm:text-[15px]
            "
          >
            {result.department}
          </p>

          {/* Institute */}
          <p
            className="
              text-[13px]
              leading-5
              text-black
              sm:text-[15px]
            "
          >
            {result.institute}
          </p>

          {/* BUET */}
          <p className="text-[13px] text-black sm:text-[15px]">
            (BUET)
          </p>
        </header>

        {/* =========================================
            RESULT CARD
        ========================================= */}

        <section
          className="
            mt-4
            rounded-xl
            border
            border-green-400
            bg-[#efdada]
            p-3
            sm:mt-5
            sm:p-4
          "
        >

          {/* =====================================
              TOP ROW
          ===================================== */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-2
            "
          >

            {/* Semester */}
            <div className="flex min-w-0 items-center gap-2">
              <FaGraduationCap
                className="
                  shrink-0
                  text-[21px]
                  text-[#55aaf5]
                  sm:text-[25px]
                "
              />

              <h2
                className="
                  truncate
                  text-[17px]
                  font-bold
                  text-[#111111]
                  sm:text-[21px]
                "
              >
                {result.semester} Semester
              </h2>
            </div>

            {/* Passed + Student Details */}
            <div
              className="
                flex
                shrink-0
                items-center
                gap-1.5
              "
            >

              {/* Passed */}
              <div
                className="
                  flex
                  items-center
                  gap-1
                  whitespace-nowrap
                  rounded-md
                  bg-[#64d582]
                  px-2
                  py-1
                  text-[10px]
                  font-semibold
                  text-white
                  sm:px-2.5
                  sm:py-1.5
                  sm:text-[13px]
                "
              >
                <FaCheckCircle className="text-[11px] sm:text-[12px]" />

                <span>
                  {result.result || "Passed"}
                </span>
              </div>

              {/* Student Details */}
              <button
                type="button"
                className="
                  flex
                  items-center
                  gap-1
                  whitespace-nowrap
                  rounded-md
                  bg-[#64d582]
                  px-2
                  py-1
                  text-[9px]
                  font-medium
                  text-white
                  transition
                  duration-200
                  hover:bg-[#4fc873]
                  active:scale-95
                  sm:px-2.5
                  sm:py-1.5
                  sm:text-[12px]
                "
              >
                <span>Student Details</span>

                <FaArrowRight className="text-[7px] sm:text-[8px]" />
              </button>
            </div>
          </div>

          {/* =========================================
              DATE
          ========================================= */}

          <div className="mt-4 flex items-center gap-2 pl-1">
            <FaCalendarAlt
              className="
                shrink-0
                text-[18px]
                text-[#b879e8]
                sm:text-[19px]
              "
            />

            <span
              className="
                text-[12px]
                font-medium
                text-[#1d9be8]
                sm:text-[13px]
              "
            >
              {result.date || "6 April, 2026"}
            </span>
          </div>

          {/* =========================================
              GPA
          ========================================= */}

          <div
            className="
              mt-3
              rounded-xl
              border
              border-green-400
              bg-[#cef0d3]
              px-3
              py-2.5
              text-center
              sm:py-3
            "
          >
            <p
              className="
                text-[15px]
                font-medium
                text-[#222222]
                sm:text-[17px]
              "
            >
              GPA
            </p>

            <p
              className="
                mt-0.5
                text-[28px]
                font-bold
                leading-8
                text-[#40a84d]
                sm:text-[32px]
              "
            >
              {result.gpa}
            </p>
          </div>
        </section>

        {/* =========================================
            STUDENT IMAGE
        ========================================= */}

        <section
          className="
            mt-4
            rounded-xl
            p-3
            shadow-sm
            sm:mt-5
            sm:p-4
          "
        >
          <div
            className="
              mx-auto
              flex
              w-full
              items-center
              justify-center
              overflow-hidden
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              p-2
              shadow-sm
              sm:p-3
            "
          >
            <img
              src={result.image}
              alt={result.name || "Student"}
              className="
                block
                h-auto
                max-h-[520px]
                w-auto
                max-w-full
                rounded-lg
                object-contain
              "
            />
          </div>
        </section>

        {/* =========================================
            TOP 20 BUTTON
        ========================================= */}

        <div className="flex justify-center py-7 sm:py-9">
          <button
            type="button"
            onClick={handleTopStudents}
            className="
              rounded-lg
              bg-[#d82027]
              px-4
              py-2.5
              text-[12px]
              font-bold
              text-white
              shadow-[0_5px_14px_rgba(216,32,39,0.20)]
              transition
              duration-200
              hover:bg-[#bd171d]
              active:scale-95
              sm:px-5
              sm:py-3
              sm:text-[13px]
            "
          >
            Top 20 Students List
          </button>
        </div>

      </div>
    </main>
  );
};

export default ViewResult;