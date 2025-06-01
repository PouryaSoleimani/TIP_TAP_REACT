"use client"
import useArrayStore from '@/store/arrayStore'
import React from 'react'
import { Code, Flex } from "@chakra-ui/react"


const ShowUpdatedText = () => {
    const { text } = useArrayStore()

    return (
        <div>
            <Code className='!text-3xl font-bold !p-5 !my-6'>UPDATED TEXT</Code>
            <Flex className='bg-zinc-900 p-3 rounded-lg text-xl font-semibold mt-4'>
                <p className='text-2xl font-bold text-center !p-10 !border' dangerouslySetInnerHTML={{ __html: text }}></p>
            </Flex>
        </div>
    )
}

export default ShowUpdatedText