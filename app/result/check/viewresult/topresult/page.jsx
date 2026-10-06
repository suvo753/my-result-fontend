"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaArrowLeft,
  FaGraduationCap,
  FaTrophy,
  FaUserGraduate,
} from "react-icons/fa";

const Page = () => {
  const router = useRouter();

  const [students, setStudents] = useState([]);
  const [session, setSession] = useState("");
  const [semester, setSemester] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =========================================
  // FETCH TOP STUDENTS
  // =========================================

  useEffect(() => {
    const fetchTopStudents = async () => {
      try {
        const storedInfo =
          sessionStorage.getItem("topStudentsInfo");

        // No session/semester information
        if (!storedInfo) {
          router.replace("/result/check");
          return;
        }

        const info = JSON.parse(storedInfo);

        console.log("Top Students Request:", info);

        if (!info.session || !info.semester) {
          router.replace("/result/check");
          return;
        }

        setSession(info.session);
        setSemester(info.semester);

        // =====================================
        // BACKEND REQUEST
        // =====================================

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_SIDE}/top-students`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              session: info.session,
              semester: info.semester,
            }),
          }
        );

        const data = await res.json();

        console.log("Top Students Response:", data);

        // =====================================
        // ERROR
        // =====================================

        if (!res.ok || !data.success) {
          setError(
            data.message || "Top students not found."
          );

          return;
        }

        // =====================================
        // SUCCESS
        // =====================================

        setStudents(data.data || []);
      } catch (error) {
        console.error(
          "Top students loading error:",
          error
        );

        setError(
          "Something went wrong. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTopStudents();
  }, [router]);

  // =========================================
  // LOADING
  // =========================================

  if (loading) {
    return (
      <main
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-[#fff7ff]
          px-4
        "
      >
        <div className="text-center">
          <div
            className="
              mx-auto
              h-10
              w-10
              animate-spin
              rounded-full
              border-4
              border-red-200
              border-t-red-600
            "
          />

          <p className="mt-3 text-sm text-slate-500">
            Loading top students...
          </p>
        </div>
      </main>
    );
  }

  // =========================================
  // ERROR
  // =========================================

  if (error) {
    return (
      <main
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-[#fff7ff]
          px-4
        "
      >
        <div
          className="
            w-full
            max-w-md
            rounded-2xl
            border
            border-red-200
            bg-white
            p-6
            text-center
            shadow-sm
          "
        >
          <div
            className="
              mx-auto
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-red-100
            "
          >
            <FaTrophy className="text-xl text-red-500" />
          </div>

          <h2 className="mt-4 text-lg font-bold text-slate-800">
            No Top Students Found
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            {error}
          </p>

          <button
            type="button"
            onClick={() => router.back()}
            className="
              mt-5
              inline-flex
              items-center
              gap-2
              rounded-lg
              bg-[#d82027]
              px-4
              py-2.5
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-[#bd171d]
              active:scale-95
            "
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>
      </main>
    );
  }

  // =========================================
  // MAIN PAGE
  // =========================================

  return (
    <main
      className="
        min-h-screen
        bg-[#fff7ff]
        px-3
        py-5
        sm:px-6
        sm:py-8
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[850px]
        "
      >
        {/* =========================================
            BACK BUTTON
        ========================================= */}

        <div className="mb-4 flex justify-start">
          <button
            type="button"
            onClick={() => router.back()}
            className="
              flex
              items-center
              gap-2
              rounded-lg
              border
              border-slate-200
              bg-white
              px-3
              py-2
              text-xs
              font-medium
              text-slate-600
              shadow-sm
              transition
              hover:border-red-300
              hover:text-red-600
              active:scale-95
            "
          >
            <FaArrowLeft />
            Back
          </button>
        </div>

        {/* =========================================
            RESULT CARD
        ========================================= */}

        <section
          className="
            overflow-hidden
            border
            rounded-2xl
            p-4
          
            bg-white
            shadow-[0_3px_10px_rgba(0,0,0,0.12)]
          "
        >
          {/* =====================================
              UNIVERSITY HEADER
          ===================================== */}

          <div
            className="
              px-4
              pb-3
              pt-4
              text-center
              sm:px-6
              sm:pt-5
            "
          >
            <h1
              className="
                text-[12px]
                font-medium
                leading-[15px]
                text-[#111111]
                sm:text-[14px]
                sm:leading-[17px]
              "
            >
              Bangladesh University of Engineering and Technology
              <br />
              (BUET)
            </h1>

            {/* Session + Semester */}

            <div
              className="
                mt-2
                flex
                items-center
                justify-center
                gap-2
                text-[10px]
                text-slate-500
                sm:text-[11px]
              "
            >
              <span>
                Session:{" "}
                <strong className="font-semibold text-slate-700">
                  {session}
                </strong>
              </span>

              <span className="text-slate-300">|</span>

              <span>
                Semester:{" "}
                <strong className="font-semibold text-slate-700">
                  {semester}
                </strong>
              </span>
            </div>
          </div>

          {/* =====================================
              TABLE WRAPPER
          ===================================== */}

          <div className="px-1.5 pb-2 sm:px-2 sm:pb-3">
            <div className="overflow-hidden rounded-lg border border-[#61c978]">

              {/* =================================
                  TABLE
              ================================= */}

              <div className="overflow-x-auto">
                <table
                  className="
                    w-full
                    min-w-[430px]
                    border-collapse
                  "
                >
                  {/* =================================
                      TABLE HEADER
                  ================================= */}

                  <thead>
                    <tr
                      className="
                        bg-[#efdada]
                      "
                    >
                      {/* RANK */}

                      <th
                        className="
                          w-[30%]
                          border-b
                          border-[#61c978]
                          px-2
                          py-1.5
                          text-center
                          text-[11px]
                          font-bold
                          text-[#171717]
                          sm:px-3
                          sm:py-2
                          sm:text-[13px]
                        "
                      >
                        Rank
                      </th>

                      {/* NAME */}

                      <th
                        className="
                          w-[45%]
                          border-b
                          border-[#61c978]
                          px-2
                          py-1.5
                          text-center
                          text-[11px]
                          font-bold
                          text-[#171717]
                          sm:px-3
                          sm:py-2
                          sm:text-[13px]
                        "
                      >
                        Name
                      </th>

                      {/* GPA */}

                      <th
                        className="
                          w-[25%]
                          border-b
                          border-[#61c978]
                          px-2
                          py-1.5
                          text-center
                          text-[11px]
                          font-bold
                          text-[#171717]
                          sm:px-3
                          sm:py-2
                          sm:text-[13px]
                        "
                      >
                        GPA
                      </th>
                    </tr>
                  </thead>

                  {/* =================================
                      TABLE BODY
                  ================================= */}

                  <tbody>
                    {students.map((student, index) => {
                      const rank = Number(student.serial);

                      return (
                        <tr
                          key={
                            student._id ||
                            `${student.serial}-${index}`
                          }
                          className="
                            bg-[#ffffff]
                            transition
                            duration-150
                            hover:bg-[#fff8f8]
                          "
                        >
                          {/* =========================
                              RANK
                          ========================= */}

                          <td
                            className="
                              border-b
                              border-[#777777]
                              px-2
                              py-1.5
                              text-center
                              sm:px-3
                              sm:py-2
                            "
                          >
                            <span
                              className={`
                                inline-flex
                                min-w-[62px]
                                items-center
                                justify-center
                                rounded-sm
                                border
                                px-2
                                py-1
                                text-[9px]
                                font-medium
                                sm:min-w-[72px]
                                sm:text-[10px]

                                ${
                                  rank === 1
                                    ? `
                                      border-[#d5b22f]
                                      bg-[#fff5c7]
                                      text-[#806600]
                                    `
                                    : rank === 2
                                    ? `
                                      border-[#bcbcbc]
                                      bg-[#f2f2f2]
                                      text-[#555555]
                                    `
                                    : rank === 3
                                    ? `
                                      border-[#c99b70]
                                      bg-[#fff0e4]
                                      text-[#8b542d]
                                    `
                                    : `
                                      border-[#c8c8c8]
                                      bg-[#fafafa]
                                      text-[#333333]
                                    `
                                }
                              `}
                            >
                              Serial{" "}
                              {String(rank).padStart(2, "0")}
                            </span>
                          </td>

                          {/* =========================
                              NAME
                          ========================= */}

                          <td
                            className="
                              border-b
                              border-[#777777]
                              px-2
                              py-1.5
                              text-center
                              sm:px-3
                              sm:py-2
                            "
                          >
                            <span
                              className="
                                block
                                text-[10px]
                                font-medium
                                leading-[14px]
                                text-[#222222]
                                sm:text-[11px]
                                sm:leading-[15px]
                              "
                            >
                              {student.name}
                            </span>
                          </td>

                          {/* =========================
                              GPA
                          ========================= */}

                          <td
                            className="
                              border-b
                              border-[#777777]
                              px-2
                              py-1.5
                              text-center
                              sm:px-3
                              sm:py-2
                            "
                          >
                            <span
                              className="
                                text-[10px]
                                font-medium
                                text-[#222222]
                                sm:text-[11px]
                              "
                            >
                              {student.gpa}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* =====================================
              RESULT FOOTER
          ===================================== */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-1.5
              border-t
              border-slate-100
              px-3
              py-2.5
              text-[9px]
              text-slate-400
              sm:text-[10px]
            "
          >
            <FaUserGraduate />

            <span>
              Showing Top {students.length} Students
            </span>
          </div>
        </section>

        {/* =========================================
            BOTTOM INFO
        ========================================= */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-2
            py-5
            text-center
          "
        >
          <FaGraduationCap className="text-[11px] text-[#55aaf5]" />

          <p className="text-[10px] text-slate-400 sm:text-[11px]">
            Academic Result Information
          </p>
        </div>
      </div>
    </main>
  );
};

export default Page;