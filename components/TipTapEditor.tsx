'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import useArrayStore from '@/store/arrayStore'

const TipTapEditor = () => {
    const { array } = useArrayStore()

    const editor = useEditor({
        extensions: [StarterKit],
        content: array.join("\n"),
        onUpdate: ({ editor }) => {
            const content = editor.getHTML()
            console.log(content)
        },
    })

    return <EditorContent editor={editor} value={array.join("\n")} />
}

export default TipTapEditor
