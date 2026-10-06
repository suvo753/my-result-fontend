"use client";

import { useState } from "react";
import { Button, Input, TextField } from "@heroui/react";
import { FaArrowRight, FaLock } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [securityCode, setSecurityCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setError("");

    if (!securityCode.trim()) {
      setError("Please enter your security number.");
      return;
    }

    setLoading(true);

    // Demo security code
    if (securityCode === "713676") {
      router.push("/result");
    } else {
      setLoading(false);
      setError("Invalid security number. Please try again.");
    }
  };

  return (
    <main className="min-h-screen w-full bg-slate-50 flex items-center justify-center px-3 py-6 sm:px-5 sm:py-10">
      <div className="w-full max-w-md sm:max-w-lg">

        <div className="rounded-2xl sm:rounded-3xl border border-slate-300 bg-white p-5 sm:p-7 md:p-8 shadow-xl shadow-slate-200/60">

          {/* Logo */}
          <div className="flex justify-center mb-5 sm:mb-6">
            <div className="flex items-center justify-center h-20 w-20 sm:h-24 sm:w-24 rounded-full border-2 border-slate-300 bg-white p-2.5 sm:p-3 shadow-md">
              <img
                src="/buet.svg"
                alt="University Logo"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              CSE Result Zone
            </h1>

            <p className="mt-2 text-sm sm:text-base font-medium text-slate-500">
              BUET • Department of CSE
            </p>
          </div>

          <div className="my-6 sm:my-7 h-px bg-slate-200" />

          {/* Security Input */}
          <TextField
            name="security"
            className="w-full"
          >
            <div className="relative w-full">

              <FaLock className="absolute left-3 sm:left-4 top-1/2 z-10 -translate-y-1/2 text-slate-500 text-sm sm:text-base" />

              <Input
                value={securityCode}
                onChange={(e) => {
                  setSecurityCode(e.target.value);
                  setError("");
                }}
                type="text"
                inputMode="numeric"
                placeholder="Enter your security number"
                className="w-full pl-9 sm:pl-11 text-sm sm:text-base font-medium"
                style={{
                  border: "2px solid #475569",
                  borderRadius: "12px",
                }}
              />

            </div>
          </TextField>

          {/* Error */}
          {error && (
            <p className="mt-2 text-sm font-medium text-red-500">
              {error}
            </p>
          )}

          {/* Button */}
          <Button
            onPress={handleSubmit}
            isDisabled={loading}
            className="mt-4 sm:mt-5 h-11 sm:h-12 w-full rounded-xl bg-slate-900 text-white text-sm sm:text-base font-semibold shadow-md shadow-slate-300 transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
          >
              {loading ? "Verifying..." : "Verify & Continue"}

            {!loading && (
              <FaArrowRight className="ml-2 text-xs sm:text-sm" />
            )}
          </Button>

          <p className="mt-5 sm:mt-6 text-center text-[11px] sm:text-xs leading-5 text-slate-400 px-2">
            Enter your security number to securely view your academic result.
          </p>

        </div>

        <p className="mt-4 sm:mt-5 text-center text-[11px] sm:text-xs text-slate-400">
          © {new Date().getFullYear()} CSE Result Zone
        </p>

      </div>
    </main>
  );
}