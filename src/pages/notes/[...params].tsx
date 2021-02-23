import * as React from "react";
import { useRouter} from "next/router";


const Note: React.FC = () => {
    const router = useRouter(); // accesses props.url.query data which is otherwise non-accessible
    const { params } = router.query
    return <div>Note {params}, <button onClick={e => router.push("/notes")}>Notes</button></div>
}


export default Note;