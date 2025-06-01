'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import useArrayStore from '@/store/arrayStore'

const TipTapEditor = () => {
    const { text, setText } = useArrayStore()

    const editor = useEditor({
        extensions: [StarterKit],
        content: text,
        onUpdate: ({ editor }) => {
            const content = editor.getHTML()
            setText(content)
            console.info("TEXT===>", text)
        },
    })

    return <EditorContent editor={editor} value={text} />
}

export default TipTapEditor
