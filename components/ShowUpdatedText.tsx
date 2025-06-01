"use client"
import useArrayStore from '@/store/arrayStore'
import React from 'react'

const ShowUpdatedText = () => {
    const { text } = useArrayStore()

    return (
        <div>
            <h2 className='bg-slate-800 text-white w-fit mx-auto p-6 text-3xl rounded-xl font-bold tracking-tight'>UPDATED TEXT</h2>
            <div className='bg-zinc-900 p-3 rounded-lg text-xl font-semibold mt-4'>
                <p className='text-2xl font-bold text-center' dangerouslySetInnerHTML={{ __html: text }}></p>
            </div>
        </div>
    )
}

export default ShowUpdatedText