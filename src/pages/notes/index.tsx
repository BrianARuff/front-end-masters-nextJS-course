import * as React from "react";
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
        <>
            <h1>Notes Page</h1>
            <ul>
                <li>
                    <Link href={`/`}>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href={`notes/[id]`} as={`/notes/1`}>
                        <a>Note</a>
                    </Link>
                </li>
            </ul>
            <ul>
                {
                    notes.map<{}>(note => {
                        return (
                            <li key={note.id}>
                                <Link href={`/notes/[id]`}
                                      as={`/notes/${note.id}`}>
                                    <a>{note.title}</a>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>

            <button onClick={e => router.push("/")}>Go Home</button>
            <button onClick={e => router.push("/notes/1")}>Note 1</button>
        </>
    );
}

export default Notes;