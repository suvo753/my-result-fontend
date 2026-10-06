'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaSearch,
  FaArrowRight,
  FaChartLine,
  FaCheckCircle,
  FaBolt,
  FaGift,
} from "react-icons/fa";

const ResultPage = () => {

     const router = useRouter();
       const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <main className="min-h-screen w-full bg-white text-[#172033]">
      {/* ================= HEADER ================= */}
 <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div
        className="
          mx-auto
          flex
          h-[60px]
          w-full
          max-w-[1280px]
          items-center
          justify-between
          px-4
          sm:px-6
          md:px-8
          lg:px-10
        "
      >
        {/* =========================================
            LOGO
        ========================================= */}

        <div
          className="
            select-none
            text-[15px]
            font-extrabold
            tracking-[-0.3px]
            text-[#1855e5]
            sm:text-[17px]
          "
        >
          BUET Results Zone
        </div>

        {/* =========================================
            DESKTOP NAVIGATION
        ========================================= */}

        <nav
          className="
            hidden
            items-center
            gap-5
            text-[12px]
            font-medium
            text-slate-600
            md:flex
            lg:gap-7
            lg:text-[13px]
          "
        >
          {/* Individual Results */}

          <Link 
            href="/result/check"
            className="
              group
              flex
              items-center
              gap-2
              whitespace-nowrap
              transition-colors
              duration-200
              hover:text-[#1855e5]
            "
          >
            <span
              className="
                text-[15px]
                text-slate-400
                transition
                duration-200
                group-hover:text-[#1855e5]
              "
            >
              ♙
            </span>

            Individual Results
          </Link>

          {/* Other Results */}

          <a
            href="#"
            className="
              flex
              items-center
              gap-1
              whitespace-nowrap
              transition
              hover:text-[#1855e5]
            "
          >
            {/* Other Results */}
            {/* <span className="text-[10px]">⌄</span> */}
          </a>

          {/* Calculators */}

          <a
            href="#"
            className="
              flex
              items-center
              gap-1
              whitespace-nowrap
              transition
              hover:text-[#1855e5]
            "
          >
            {/* Calculators */}
            {/* <span className="text-[10px]">⌄</span> */}
          </a>

          {/* Exam Routines */}

     

          {/* More */}

          <a
            href="#"
            className="
              flex
              items-center
              gap-1
              whitespace-nowrap
              transition
              hover:text-[#1855e5]
            "
          >
            {/* More */}
            {/* <span className="text-[10px]">⌄</span> */}
          </a>
        </nav>

        {/* =========================================
            MOBILE MENU BUTTON
        ========================================= */}

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() =>
            setMobileMenuOpen(!mobileMenuOpen)
          }
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            border
            border-slate-200
            bg-white
            text-[19px]
            text-slate-700
            shadow-sm
            transition-all
            duration-200
            hover:border-[#1855e5]
            hover:bg-blue-50
            hover:text-[#1855e5]
            active:scale-95
            md:hidden
          "
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* =========================================
          MOBILE MENU
      ========================================= */}

      {mobileMenuOpen && (
        <div
          className="
            border-t
            border-slate-100
            bg-white
            px-4
            py-3
            shadow-[0_8px_20px_rgba(0,0,0,0.06)]
            md:hidden
          "
        >
          <div className="mx-auto w-full max-w-[1280px] space-y-2">

            {/* Individual Results */}

            <Link
              href="/result/check"
              onClick={() => setMobileMenuOpen(false)}
              className="
                flex
                items-center
                gap-3
                rounded-lg
                px-3
                py-2.5
                text-[13px]
                font-medium
                text-slate-700
                transition
                hover:bg-blue-50
                hover:text-[#1855e5]
              "
            >
              <span
                className="
                  text-[15px]
                  text-slate-400
                "
              >
                ♙
              </span>

              Individual Results
            </Link>

            {/* Exam Routines */}


          </div>
        </div>
      )}
    </header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Soft background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(219,234,254,0.35),transparent_35%)]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-58px)] w-full max-w-[1280px] items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">

          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-[600px]">
            
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center rounded-md border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-medium text-blue-700">
                ✨ Trusted by BUET All Students
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[42px] font-extrabold leading-[1.08] tracking-[-1.5px] text-[#182033] sm:text-[50px] lg:text-[52px]">
              BUET Results at Your
              <br />
              <span className="text-[#2161ee]">
                Fingertips
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[590px] text-[16px] leading-7 text-slate-600">
              BUET most trusted and Private platform for BUET exam
              results. Get instant access to your exam results quickly
              and securely.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              
              <button
                type="button"
                 onClick={() => router.push("/result/check")}
                className="
                  group
                  flex
                  h-11
                  items-center
                  gap-2
                  rounded-md
                  bg-[#2161ee]
                  px-6
                  text-[14px]
                  font-semibold
                  text-white
                  shadow-sm
                  transition
                  hover:bg-[#1554dc]
                  hover:shadow-lg
                "
              >
                <FaSearch className="text-[12px]" />

                Check Your Results

                <FaArrowRight
                  className="
                    ml-1
                    text-[11px]
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </button>

              <button
                type="button"
                className="
                  flex
                  h-11
                  items-center
                  gap-2
                  rounded-md
                  border
                  border-slate-200
                  bg-white
                  px-6
                  text-[14px]
                  font-semibold
                  text-slate-700
                  transition
                  hover:border-blue-200
                  hover:bg-blue-50
                  hover:text-blue-700
                "
              >
                <FaChartLine className="text-[12px]" />
                View Latest Results
              </button>
            </div>

            {/* Google Play */}
            <button
              type="button"
              className="
                mt-4
                flex
                h-[48px]
                items-center
                gap-2
                rounded-[6px]
                bg-black
                px-4
                text-left
                text-white
                transition
                hover:bg-[#171717]
              "
            >
              <span className="text-[25px] leading-none">▶</span>

              <span className="flex flex-col leading-none">
                <span className="text-[8px] tracking-wide">
                  GET IT ON
                </span>

                <span className="mt-1 text-[17px] tracking-wide">
                  Google Play
                </span>
              </span>
            </button>

            {/* Features */}
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
              
              <div className="flex items-center gap-2 text-[12px] text-slate-500">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                100% Secure
              </div>

              <div className="flex items-center gap-2 text-[12px] text-slate-500">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Lightning Fast
              </div>

              <div className="flex items-center gap-2 text-[12px] text-slate-500">
                <span className="h-2 w-2 rounded-full bg-purple-500" />
                Always Free
              </div>

            </div>
          </div>

          {/* ================= RIGHT CARD ================= */}
          <div className="relative flex items-center justify-center lg:justify-end">
            
            {/* Blue floating circle */}
            <div
              className="
                absolute
                -left-2
                top-[-15px]
                h-7
                w-7
                rounded-full
                bg-blue-300
              "
            />

            {/* Main Card */}
            <div
              className="
                relative
                flex
                h-[400px]
                w-full
                max-w-[420px]
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-[0_15px_45px_rgba(15,23,42,0.08)]
              "
            >
              {/* Live Badge */}
              <div
                className="
                  absolute
                  right-5
                  top-5
                  z-20
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#00bf63]
                  px-4
                  py-2
                  text-[12px]
                  font-semibold
                  text-white
                  shadow-lg
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Live & Updated
              </div>

              {/* Background circle */}
              <div
                className="
                  absolute
                  h-[270px]
                  w-[270px]
                  rounded-full
                  bg-[#d9f5e2]
                "
              />

              {/* Illustration */}
              <div className="relative z-10 flex flex-col items-center">
                
                <div className="mb-3 flex items-end gap-4">
                  
                  {/* Person 1 */}
                  <div className="flex flex-col items-center">
                    <div className="h-12 w-12 rounded-full bg-slate-700" />

                    <div className="mt-1 h-[105px] w-[48px] -rotate-6 rounded-[25px] bg-slate-500" />

                    <div className="mt-[-8px] h-12 w-4 -rotate-12 rounded-full bg-slate-700" />
                  </div>

                  {/* Person 2 */}
                  <div className="flex flex-col items-center">
                    <div className="h-12 w-12 rounded-full bg-slate-800" />

                    <div className="mt-1 h-[125px] w-[55px] rotate-2 rounded-[28px] bg-emerald-400" />

                    <div className="mt-[-5px] flex gap-2">
                      <div className="h-12 w-4 -rotate-12 rounded-full bg-slate-800" />
                      <div className="h-12 w-4 rotate-12 rounded-full bg-slate-800" />
                    </div>
                  </div>

                  {/* Person 3 */}
                  <div className="flex flex-col items-center">
                    <div className="h-12 w-12 rounded-full bg-slate-700" />

                    <div className="mt-1 h-[105px] w-[48px] rotate-6 rounded-[25px] bg-slate-400" />

                    <div className="mt-[-8px] h-12 w-4 rotate-12 rounded-full bg-slate-700" />
                  </div>

                </div>

                {/* Result document */}
                <div className="absolute bottom-[-20px] rounded-lg border border-slate-200 bg-white px-5 py-3 shadow-md">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-500" />
                    <span className="text-[12px] font-semibold text-slate-700">
                      Result Verified
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Purple floating circle */}
            <div
              className="
                absolute
                -bottom-5
                right-[-5px]
                h-11
                w-11
                rounded-full
                bg-purple-200
              "
            />

          </div>
        </div>
      </section>

      {/* ================= QUICK INFO ================= */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto grid w-full max-w-[1000px] grid-cols-1 gap-4 px-5 py-12 sm:grid-cols-3">
          
          <div className="rounded-xl border border-slate-100 bg-white p-5 text-center shadow-sm">
            <FaCheckCircle className="mx-auto mb-3 text-xl text-emerald-500" />
            <h3 className="text-sm font-bold text-slate-800">
              100% Secure
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Your result information stays protected.
            </p>
          </div>

          <div className="rounded-xl border border-slate-100 bg-white p-5 text-center shadow-sm">
            <FaBolt className="mx-auto mb-3 text-xl text-blue-500" />
            <h3 className="text-sm font-bold text-slate-800">
              Lightning Fast
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Get your result without waiting.
            </p>
          </div>

          <div className="rounded-xl border border-slate-100 bg-white p-5 text-center shadow-sm">
            <FaGift className="mx-auto mb-3 text-xl text-purple-500" />
            <h3 className="text-sm font-bold text-slate-800">
              Always Free
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Access your results completely free.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-200 bg-white py-7">
        <p className="text-center text-[11px] text-slate-400">
          © {new Date().getFullYear()} BUET Results Zone. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default ResultPage;