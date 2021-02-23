import * as React from "react";
import Link from "next/link"
import "../src/components/styles.module.css"

const Page: React.FC = () => {
    return (
        <div>
            <h1 className={`home-header`}>Index Page</h1>
            <Link href={`/notes`}>
                <a className={`home-header`}>Notes</a>
            </Link>
        </div>
    )
}

export default Page;