import EventSlider from './EventSlider'

const UpcomingEvents = () => {
    return (
        <section className="mx-auto w-full max-w-7xl pt-16 sm:px-6 sm:last:pt-32">
            <h2 className="px-6 pb-7 tracking-tighter text-4xl sm:px-0">
                Browse upcoming free events
            </h2>
            <EventSlider />
        </section>
    )
}

export default UpcomingEvents
