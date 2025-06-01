'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import useArrayStore from '@/store/arrayStore'
import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { Button, Flex } from '@chakra-ui/react'

const TipTapEditor = () => {
    const { text, setText } = useArrayStore()

    const editor = useEditor({
        extensions: [Document, Paragraph, Text, Heading.configure({ levels: [1, 2, 3, 4, 5, 6], }),],
        content: text,
        onUpdate: ({ editor }) => {
            const content = editor.getHTML()
            setText(content)
            console.info("TEXT===>", text)
        },
    })

    if (!editor) { return null }

    return (
        <>
            <div className="control-group">
                <Flex className="button-group space-x-4">
                    <Button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} style={{ margin: "0 1rem" }} className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''} >        H1    </Button>
                    <Button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} style={{ margin: "0 1rem" }} className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''} >     H2 </Button>
                    <Button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} style={{ margin: "0 1rem" }} className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}  >     H3 </Button>
                </Flex>
            </div>
            <EditorContent editor={editor} value={text} className='p-5 border border-zinc-600 ' />
        </>
    )
}

export default TipTapEditor
