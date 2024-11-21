import React from 'react';

const Faq = () => {
    return (
        <div className='mt-16'>
            <h2 className='text-center font-bold text-third text-3xl mb-2'>Frequently Asked Questions</h2>
            <p className='text-center w-full text-gray-500 md:w-3/5  mx-auto'>Your Queries, Answered — Find Clarity About Our Career Counseling Services.</p>

            <div className="join join-vertical w-full mt-6">
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title text-lg font-medium">What services do you offer for career counseling?</div>
    <div className="collapse-content">
      <p>We offer Career Counseling Sessions, Job Placement Support, Skill Development Workshops, Time Management Workshops, and Freelancing Career Counseling. Each service is designed to help you achieve your career goals effectively.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-lg font-medium">How can I book a session with a counselor?</div>
    <div className="collapse-content">
      <p>You can book a session by visiting our "Services" page, selecting the counseling session you are interested in, and clicking on the “Learn More” button. From there, you can register and schedule your session.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-lg font-medium"> Are your services available online or in-person?</div>
    <div className="collapse-content">
      <p> Most of our services are available both online and in-person to suit your preferences. You can check the availability under the “Category” section for each service.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-lg font-medium"> Can I reschedule or cancel my session?</div>
    <div className="collapse-content">
      <p> Yes, you can reschedule or cancel your session up to 24 hours before the scheduled time. Simply log in to your account and manage your bookings.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-lg font-medium">Are the counselors certified professionals?</div>
    <div className="collapse-content">
      <p>Absolutely! All our counselors are certified experts with years of experience in guiding individuals toward successful career paths.</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Faq;