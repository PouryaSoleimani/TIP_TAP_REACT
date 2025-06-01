'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import useArrayStore from '@/store/arrayStore'
import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { Button } from '@chakra-ui/react'

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
                <div className="button-group">
                    <Button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''} >
                        H1
                    </Button>
                    <Button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''} >
                        H2
                    </Button>
                    <Button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}  >
                        H3
                    </Button>
                </div>
            </div>
            <EditorContent editor={editor} value={text} />
        </>
    )
}

export default TipTapEditor
