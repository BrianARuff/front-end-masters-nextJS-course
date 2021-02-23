import * as React from "react"
/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from "theme-ui"
import {PropsWithChildren} from "react";
import theme from "../../theme";

const Page: React.FC = (props: PropsWithChildren<{}>) => {

    return (
        <div sx={{height: `calc(100vh - 60px)`}}>
            <div sx={{
                variant: "containers.pages"
            }}>
                <h1 sx={{fontSize: 8, my: 0}}>This is a really dope note taking
                    app.</h1>
            </div>
        </div>
    )
}

export default Page;