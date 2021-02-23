import * as React from "react"
/** @jsx jsx */
/** @jsxRuntime classic */
import {jsx} from "theme-ui"
import Link from 'next/link'
import theme from "../../theme"

const {
    header,
    headerNav,
    headerNavLink1,
    headerNavLink2
}: { header: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, headerNav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, headerNavLink1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, headerNavLink2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> } = theme.containers

const Nav: React.FC = (): JSX.Element => (
    <header sx={header}>
        <nav sx={headerNav}>
            <Link href="/">
                <a sx={headerNavLink1}>Note App</a>
            </Link>

            <Link href="/notes">
                <a sx={headerNavLink2}>notes</a>
            </Link>

        </nav>
    </header>
)

export default Nav