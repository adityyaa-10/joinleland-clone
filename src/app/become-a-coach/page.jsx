import React from 'react'
import NavBar from '@/components/NavBar'
import Hero from '@/components/BecomeCoach/Hero'
import Steps from '@/components/BecomeCoach/Steps'
import Testimonials from '@/components/BecomeCoach/Testimonials'
import Stats from '@/components/BecomeCoach/Stats'
import UnlockOpportunity from '@/components/BecomeCoach/UnlockOpportunity'
import JoinCommunity from '@/components/BecomeCoach/JoinCommunity'
import Banner from '@/components/BecomeCoach/Banner'
import ItemsList from '@/components/BecomeCoach/ItemsList'
import Footer from '@/components/Footer'
const BecomeCoach = () => {
    return (
        <div className="overflow-hidden">
            <NavBar />
            <div className="pt-20">
                <div className=" min-h-screen">
                    <Hero />
                    <Steps />
                    <Testimonials />
                    <Stats />
                    <UnlockOpportunity />
                    <JoinCommunity />
                    <Banner />
                    <ItemsList />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default BecomeCoach
