import * as React from "react";
/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from "theme-ui"
import Link from "next/link";
import {NextRouter, useRouter} from "next/router";

const Notes: React.FC = () => {
    type Note = {
        id: number,
        title: string
    }
    const notes: Note[] = new Array(15).fill(1).map((_, i) => ({
        id: i + 1, title: `Note ${i + 1}`
    }))
    const router: NextRouter = useRouter();
    return (
        <div sx={{variant: 'containers.page'}}>
            <h1>My Notes</h1>

            <div sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}>
                {notes.map(note => (
                    <div sx={{width: '33%', p: 2}} key={note.id}>
                        <Link href="/notes/[id]" as={`/notes/${note.id}`}>
                            <a sx={{textDecoration: 'none', cursor: 'pointer'}}>
                                <div sx={{variant: 'containers.card',}}>
                                    <strong>{note.title}</strong>
                                </div>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notes;