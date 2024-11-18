import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full mt-4 mb-10">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://media.istockphoto.com/id/1181008199/photo/cheerful-businesswoman-meets-with-client.webp?a=1&b=1&s=612x612&w=0&k=20&c=N1vZMd8yn7QiSU2ZgDkjLPoAJJ-AVmKkXxZor9OE3Oc="
                    className="w-full max-h-[500px] min-h-[400px] object-cover rounded-lg" />
                <div className='absolute w-full bg-[#9e969636] rounded-lg h-full'></div>
                <div className='absolute p-8 pl-16 w-full md:w-3/5 lg:w-1/2 top-1/2 -translate-y-1/2'>
                    <h3 className='font-bold text-3xl text-third'>Find Your Path, Shape Your Future!</h3>
                    <p className='my-2 text-gray-500'>Discover the career that aligns with your passions and skills. Let Pathfinder guide you to success with expert counseling and tailored resources</p>
                    <button className="btn bg-third text-primary">Start Your Journey</button>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn bg-[#ffffff4a] text-third ">❮</a>
                    <a href="#slide2" className="btn bg-[#ffffff4a] text-third ">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://media.istockphoto.com/id/1181008255/photo/mature-businesswoman-talks-withe-male-colleague.webp?a=1&b=1&s=612x612&w=0&k=20&c=ezTnbGij7Uo1grJVVuBEjY0vGC3rjEACrc_2qmYRdqU="
                    className="w-full max-h-[500px]  min-h-[400px] object-cover rounded-lg" />

                <div className='absolute w-full bg-[#9e969636] rounded-lg h-full'></div>

                <div className='absolute p-8 pl-16 w-full md:w-3/5 lg:w-1/2 top-1/2 -translate-y-1/2'>
                    <h3 className='font-bold text-3xl text-third'>Personalized Career Guidance at Your Fingertips</h3>
                    <p className='my-2 text-gray-500'>Take the next step with services like career assessments, mock interviews, and resume building. Your dream career is closer than you think.</p>
                    <button className="btn bg-third text-primary">Explore Services</button>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn bg-[#ffffff4a] text-third ">❮</a>
                    <a href="#slide3" className="btn bg-[#ffffff4a] text-third ">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://media.istockphoto.com/id/1891128165/photo/serious-senior-business-woman-employer-holding-resume-listening-candidate.jpg?s=612x612&w=0&k=20&c=G9ZXbhe9emWk9k8zN-hMVBsDs6xZyzwJkberSlwGjKQ="
                    className="w-full max-h-[500px] min-h-[400px] object-cover rounded-lg" />
                <div className='absolute w-full bg-[#9e969636] rounded-lg h-full'></div>
                <div className='absolute p-8 pl-16 w-full md:w-3/5 lg:w-1/2 top-1/2 -translate-y-1/2'>
                    <h3 className='font-bold text-3xl text-third'>Real Stories, Real Success!</h3>
                    <p className='my-2 text-gray-500'>Thousands have found their ideal career paths through Pathfinder. Join a growing community of achievers who’ve unlocked their potential.</p>
                    <button className="btn bg-third text-primary">See Success Stories</button>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn bg-[#ffffff4a] text-third ">❮</a>
                    <a href="#slide1" className="btn bg-[#ffffff4a] text-third ">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;