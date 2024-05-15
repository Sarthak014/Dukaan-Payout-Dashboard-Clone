import React from 'react';

const Footer = () => {
    return (
        <footer className='flex flex-col p-4 bg-white'>
            <h5 className="text-center text-gray-500">
                {"Made by "}
                <a className="underline font-bold" href="https://github.com/Sarthak014" target="_blank">
                    Sarthak Agarwal
                </a>
            </h5>
        </footer>
    );
}

export default Footer;
