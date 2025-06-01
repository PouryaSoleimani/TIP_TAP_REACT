"use client"
import useArrayStore from '@/store/arrayStore'
import React from 'react'
import { Button, Code, Flex } from "@chakra-ui/react"


const ShowUpdatedText = () => {
    const { text, setText } = useArrayStore()

    return (
        <div className='flex flex-col gap-y-6'>
            <Code className='!text-3xl font-bold !p-5 !my-6'>UPDATED TEXT</Code>
            <Flex className='bg-zinc-900 p-3 rounded-lg text-xl font-semibold mt-4 list-disc'>
                <p className='text-2xl font-bold text-center !p-10 !border' dangerouslySetInnerHTML={{ __html: text }}></p>
            </Flex>
            <hr />
            <Button color={"white"} backgroundColor={"darkred"} onClick={() => { console.info("TEXT", text); setText("") }}>SUBMIIT</Button>
        </div>
    )
}

export default ShowUpdatedText