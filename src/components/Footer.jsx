import React from 'react';

const Footer = () => {
    return (
      <div className='bg-primary text-secondary'>
          <section className='max-w-7xl w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6'>
            <aside className='lg:col-span-2'>
                <p className=''>
                    <h2 className='font-bold text-3xl'>Pathfinder</h2>
                    <br />
                    Pathfinder empowers individuals with expert career guidance, personalized tools, and resources to explore opportunities, unlock potential, and achieve fulfilling professional and academic goals.
                </p>
            </aside>
            <nav className='flex flex-col gap-4'>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className='flex flex-col gap-4'>
                <h6 className="footer-title">Pages</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Councilors</a>
            </nav>
            <nav className='lg:col-span-2'>
                <h6 className="footer-title">Join Newsletter</h6>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="join">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered join-item" />
                        <button className="btn bg-third text-primary join-item">Subscribe</button>
                    </div>
                </fieldset>
            </nav>
        </section>
      </div>
    );
};

export default Footer;