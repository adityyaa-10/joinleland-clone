"use client";
import { useState } from "react";

const PreferenceSelector = () => {
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showGoalDropdown, setShowGoalDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const goals = ["Get Into School", "Build Your Career", "Take a Test"];
  const categories = [
    "Category A",
    "Category B",
    "Category C",
    "Category D",
    "Category E",
    "Category F",
    "Category G",
    "Category H",
    "Category I",
    "Category J",
    "Category K",
    "Category L",
    "Category M",
    "Category N",
    "Category O",
  ]; // Sample categories (10-15)

  const handleGoalSelect = (goal) => {
    setSelectedGoal(goal);
    setShowGoalDropdown(false); // Close the goal dropdown after selection
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowCategoryDropdown(false); // Close the category dropdown after selection
  };

  const isButtonDisabled = () => {
    return !selectedGoal || !selectedCategory; // Button is disabled if either goal or category is not selected
  };

  return (
    <div className="flex flex-col items-center justify-center px-6">
      <div className="mt-12 flex w-full flex-col space-y-2 rounded-xl border border-[#F5F5F5] p-2 shadow-md md:h-20 md:w-min md:flex-row md:items-center md:space-x-2 md:space-y-0">
        <div className="relative">
          <button
            className="flex size-full min-w-56 cursor-pointer select-none items-center gap-1 whitespace-nowrap rounded-lg bg-white px-4 py-3 text-left shadow-none transition duration-100 focus-within:shadow-sm hover:bg-[#F5F5F5]"
            onClick={() => setShowGoalDropdown(!showGoalDropdown)}
          >
            <span className="text-base font-medium text-[#333]">
              {selectedGoal || "Select your goal"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="text-leland-gray-extra-light size-4 transform transition-transform"
              style={{
                transform: showGoalDropdown ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m6 9 6 6 6-6"
                vectorEffect="non-scaling-stroke"
              ></path>
            </svg>
          </button>
          {showGoalDropdown && (
            <div className="absolute left-0 top-full z-30 mt-3 h-[149px] w-full rounded-lg border border-[#fafafa] bg-white p-2 shadow-md">
              {goals.map((goal) => (
                <button
                  key={goal}
                  className="block w-full px-5 py-3 text-left text-sm font-medium hover:bg-gray-100"
                  onClick={() => handleGoalSelect(goal)}
                >
                  {goal}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="md:h-full md:py-2">
          <div className="h-px w-full bg-[#e5e7eb] md:h-full md:w-px"></div>
        </div>
        <div className="relative">
          <button
            className={`flex size-full min-w-56 cursor-pointer select-none items-center gap-1 whitespace-nowrap rounded-lg bg-white px-4 py-3 text-left shadow-none transition duration-100 focus-within:shadow-sm hover:bg-[#F5F5F5] ${selectedGoal ? "" : "cursor-not-allowed opacity-50"}`}
            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            disabled={!selectedGoal}
          >
            <span className="text-base font-medium text-[#333]">
              {selectedCategory || "Select a category"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="text-leland-gray-extra-light size-4 transform transition-transform"
              style={{
                transform: showCategoryDropdown
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              }}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m6 9 6 6 6-6"
                vectorEffect="non-scaling-stroke"
              ></path>
            </svg>
          </button>
          {showCategoryDropdown && (
            <div className="absolute left-0 top-full z-30 mt-3 max-h-[150px] w-full overflow-y-auto rounded-lg border border-[#fafafa] bg-white p-2 shadow-md">
              {categories.map((category) => (
                <button
                  key={category}
                  className="block w-full px-5 py-3 text-left text-sm font-medium hover:bg-gray-100"
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        <a href="">
          <button
            type="button"
            className={`shadow-border hover:bg-[#15B078]-hover hover:border-[#15B078]-hover flex w-full items-center justify-center space-x-2 rounded-lg border border-[#15B078] bg-[#15B078] px-5 py-4 text-base font-medium text-white shadow-transparent disabled:bg-[#15B078] sm:inline-flex sm:w-auto sm:whitespace-nowrap ${isButtonDisabled() ? "cursor-not-allowed opacity-50" : "hover:shadow-md"}`}
            aria-label="Find coaching"
            disabled={isButtonDisabled()}
          >
            <span>Find coaching</span>
          </button>
        </a>
      </div>
      <div className="mt-6 hidden items-center justify-start md:flex">
        <p className="mr-3 text-base font-medium text-[#333]">Popular:</p>
        <div className="grid auto-cols-min grid-flow-col gap-1.5 whitespace-nowrap">
          <button
            type="button"
            className="shadow-border hover:bg-leland-gray-stroke hover:border-leland-gray-stroke inline-flex cursor-pointer items-center justify-center space-x-1 rounded-full border border-[#F5F5F5] bg-[#F5F5F5] p-2 text-sm font-medium leading-none text-[#707070] shadow-transparent disabled:bg-[#F5F5F5] sm:whitespace-nowrap"
            aria-label="MBA"
          >
            <span>MBA</span>
          </button>
          <button
            type="button"
            className="shadow-border hover:bg-leland-gray-stroke hover:border-leland-gray-stroke inline-flex cursor-pointer items-center justify-center space-x-1 rounded-full border border-[#F5F5F5] bg-[#F5F5F5] p-2 text-sm font-medium leading-none text-[#707070] shadow-transparent disabled:bg-[#F5F5F5] sm:whitespace-nowrap"
            aria-label="Management Consulting"
          >
            <span>Management Consulting</span>
          </button>
          <button
            type="button"
            className="shadow-border hover:bg-leland-gray-stroke hover:border-leland-gray-stroke inline-flex cursor-pointer items-center justify-center space-x-1 rounded-full border border-[#F5F5F5] bg-[#F5F5F5] p-2 text-sm font-medium leading-none text-[#707070] shadow-transparent disabled:bg-[#F5F5F5] sm:whitespace-nowrap"
            aria-label="GMAT"
          >
            <span>GMAT</span>
          </button>
          <button
            type="button"
            className="shadow-border hover:bg-leland-gray-stroke hover:border-leland-gray-stroke inline-flex cursor-pointer items-center justify-center space-x-1 rounded-full border border-[#F5F5F5] bg-[#F5F5F5] p-2 text-sm font-medium leading-none text-[#707070] shadow-transparent disabled:bg-[#F5F5F5] sm:whitespace-nowrap"
            aria-label="Medical School"
          >
            <span>Medical School</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreferenceSelector;
