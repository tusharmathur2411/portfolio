import React from 'react';
import Image from 'next/image';
import reactJS from './icon.svg';
import linkedin from './linkedin.svg';
import { INTRODUCTION, LINKEDEIN_PROFILE, NAME } from './app.constants';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="bg-black z-10 sticky top-0 flex justify-end text-slate-100 p-5 opacity-90">
        <a target="_blank" href={LINKEDEIN_PROFILE} rel="noreferrer">
          <Image
            src={linkedin}
            alt="linked-in"
            width="100"
          />
        </a>
      </header>
      <div className="max-w-full w-full items-start justify-between font-mono text-sm lg:flex p-10 md:p-28 flex-nowrap gap-10">
        <div className="flex flex-col gap-10 md:gap-28">
          <p className="text-5xl text-slate-100">
            {NAME}
          </p>
          <p className="text-xl text-slate-100 whitespace-break-spaces">
            {INTRODUCTION}
          </p>
        </div>
        <Image
          src={reactJS}
          alt="reactJS"
        />
      </div>
    </main>
  );
}
