"use client"
import React, { useEffect } from 'react'
import { waveform } from 'ldrs'

export default function DashBoard() {
    return (
        <>
        <main className='h-screen bg-slate-950'>
            <header className='flex justify-between items-center p-4 w-full absolute top-0 z-100 text-white bg-slate-950'>
                <h1 className='text-4xl'>
                    Title
                </h1>
                <nav className='flex gap-8'>
                    <a className='text-xl font-semibold pl-8 pr-4' href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <a href="#faq">FAQ</a>
                </nav>
            </header>
        </main>
        </>  
    )
}

    /**useEffect(()=>{
        if (typeof window !== 'undefined') {
            waveform.register()
        }
    },[])
    return (
        <>
        <main className="h-screen flex justify-center items-center bg-slate-900 text-white text-2xl">
            <h1 className='px-5'>Loading</h1>
            <l-waveform
            size="35"
            stroke="3.5"
            speed="1" 
            color="white" 
            ></l-waveform>
        </main>
        </>
    )**/
