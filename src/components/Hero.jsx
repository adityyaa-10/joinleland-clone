"use client";
import React, { useState } from 'react';
import HeroSlider from './HeroSlider';
import Image from 'next/image';

const Hero = () => {
    const [selectedGoal, setSelectedGoal] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showGoalDropdown, setShowGoalDropdown] = useState(false);
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

    const goals = ['Get Into School', 'Build Your Career', 'Take a Test'];
    const categories = [
        'Category A',
        'Category B',
        'Category C',
        'Category D',
        'Category E',
        'Category F',
        'Category G',
        'Category H',
        'Category I',
        'Category J',
        'Category K',
        'Category L',
        'Category M',
        'Category N',
        'Category O',
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
        <section className="mx-auto flex w-full flex-col justify-center text-center">
            <header className="space-y-5 px-6 sm:space-y-4 ">
                <h2 className="tracking-tighter text-5xl font-medium">Find a coach to help you achieve your goals.</h2>
                <h3 className="text-lg text-[#707070]">Search 500+ experts across more than 50 career &amp; admissions categories.</h3>
            </header>
            <div className="flex flex-col items-center justify-center px-6">
                <div className="mt-12 flex w-full flex-col space-y-2 rounded-xl border border-[#F5F5F5] p-2 shadow-md md:h-20 md:w-min md:flex-row md:items-center md:space-x-2 md:space-y-0">
                    <div className="relative">
                        <button
                            className="flex size-full min-w-56 cursor-pointer select-none items-center gap-1 whitespace-nowrap rounded-lg bg-white px-4 py-3 text-left shadow-none transition duration-100 focus-within:shadow-sm hover:bg-[#F5F5F5]"
                            onClick={() => setShowGoalDropdown(!showGoalDropdown)}
                        >
                            <span className="text-base font-medium text-[#333]">
                                {selectedGoal || 'Select your goal'}
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="size-4 text-leland-gray-extra-light transform transition-transform"
                                style={{ transform: showGoalDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }}
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
                            <div className="absolute top-full left-0 p-2 w-full border border-[#fafafa] bg-white shadow-md rounded-lg mt-3 h-[149px]">
                                {goals.map((goal) => (
                                    <button
                                        key={goal}
                                        className="block w-full text-left text-sm font-medium px-5 py-3 hover:bg-gray-100"
                                        onClick={() => handleGoalSelect(goal)}
                                    >
                                        {goal}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="md:h-full md:py-2">
                        <div className="h-px w-full bg-[#e5e7eb] md:h-full md:w-px">
                        </div>
                    </div>
                    <div className="relative">
                        <button
                            className={`flex size-full min-w-56 cursor-pointer select-none items-center gap-1 whitespace-nowrap rounded-lg bg-white px-4 py-3 text-left shadow-none transition duration-100 focus-within:shadow-sm hover:bg-[#F5F5F5] ${selectedGoal ? '' : 'opacity-50 cursor-not-allowed'}`}
                            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                            disabled={!selectedGoal}
                        >
                            <span className="text-base font-medium text-[#333]">
                                {selectedCategory || 'Select a category'}
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="size-4 text-leland-gray-extra-light transform transition-transform"
                                style={{ transform: showCategoryDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }}
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
                            <div className="absolute top-full left-0 w-full p-2 border border-[#fafafa] bg-white shadow-md rounded-lg mt-3 overflow-y-auto max-h-[150px]">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        className="block w-full  text-left text-sm font-medium px-5 py-3 hover:bg-gray-100"
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
                            className={`sm:whitespace-nowrap items-center justify-center border shadow-border text-white bg-[#15B078] border-[#15B078] disabled:bg-[#15B078] hover:bg-[#15B078]-hover hover:border-[#15B078]-hover shadow-transparent py-4 px-5 text-base space-x-2 flex w-full sm:w-auto sm:inline-flex font-medium rounded-lg ${isButtonDisabled() ? 'cursor-not-allowed opacity-50' : 'hover:shadow-md'}`}
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
                        <button type="button" className="sm:whitespace-nowrap items-center justify-center border shadow-border text-[#707070] bg-[#F5F5F5] disabled:bg-[#F5F5F5] border-[#F5F5F5] hover:bg-leland-gray-stroke hover:border-leland-gray-stroke shadow-transparent p-2 text-sm leading-none space-x-1 inline-flex font-medium rounded-full cursor-pointer" aria-label="MBA">
                            <span>MBA</span>
                        </button>
                        <button type="button" className="sm:whitespace-nowrap items-center justify-center border shadow-border text-[#707070] bg-[#F5F5F5] disabled:bg-[#F5F5F5] border-[#F5F5F5] hover:bg-leland-gray-stroke hover:border-leland-gray-stroke shadow-transparent p-2 text-sm leading-none space-x-1 inline-flex font-medium rounded-full cursor-pointer" aria-label="Management Consulting">
                            <span>Management Consulting</span>
                        </button>
                        <button type="button" className="sm:whitespace-nowrap items-center justify-center border shadow-border text-[#707070] bg-[#F5F5F5] disabled:bg-[#F5F5F5] border-[#F5F5F5] hover:bg-leland-gray-stroke hover:border-leland-gray-stroke shadow-transparent p-2 text-sm leading-none space-x-1 inline-flex font-medium rounded-full cursor-pointer" aria-label="GMAT">
                            <span>GMAT</span>
                        </button>
                        <button type="button" className="sm:whitespace-nowrap items-center justify-center border shadow-border text-[#707070] bg-[#F5F5F5] disabled:bg-[#F5F5F5] border-[#F5F5F5] hover:bg-leland-gray-stroke hover:border-leland-gray-stroke shadow-transparent p-2 text-sm leading-none space-x-1 inline-flex font-medium rounded-full cursor-pointer" aria-label="Medical School">
                            <span>Medical School</span>
                        </button>
                    </div>
                </div>
            </div>

            <p className="mt-20 px-6 text-sm uppercase tracking-wider text-[#707070] sm:mt-32">JOIN 50,000+ Real people achieving their goals on Leland</p>
            <div>
                <HeroSlider />
            </div>
            <section className="mt-4 w-full flex flex-wrap items-center justify-center gap-6 bg-black px-6 py-8 text-white sm:gap-14">
                <span className="text-lg font-medium">Featured in</span>
                <div className="transition-opacity duration-200 ease-in-out hover:opacity-70">
                    <Image src={'/forbes.svg'} width={100} height={100} />
                </div>
                <div className="transition-opacity duration-200 ease-in-out hover:opacity-70">
                    <Image src={'/business.svg'} width={100} height={100} />
                </div>
                <div className="transition-opacity duration-200 ease-in-out hover:opacity-70">
                    <Image src={'/tc.svg'} width={100} height={100} />
                </div>
                <div className="transition-opacity duration-200 ease-in-out hover:opacity-70">
                    <Image src={'/protocol.svg'} width={100} height={100} />
                </div>
            </section>
        </section>
    );
};

export default Hero;
