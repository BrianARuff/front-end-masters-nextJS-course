import * as React from "react"
/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from "theme-ui"
import { useRouter} from "next/router";


const Note: React.FC = () => {
    const router = useRouter()
    const { id }= router.query

    return (
        <div sx={{variant: 'containers.page'}}>
            <h1>Note: {router.query.id} </h1>
        </div>
    )
}


export default Note;