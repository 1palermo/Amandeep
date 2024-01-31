import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Aman | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 text-center pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <a
            href='https://drive.google.com/file/d/1mPSja848AGhwRw4L6go6HRCybBOQlVxJ/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            <button className='text-center justify-center px-5 py-5 mt-10'>Download</button>
        </a>
        {/*  */}
      </div>
    </>
  );
};

export default resume;
