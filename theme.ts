import {roboto} from "@theme-ui/presets"

const theme = {
    ...roboto,
    containers: {
        card: {
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
            border: "1px solid",
            borderColor: "muted",
            borderRadius: "4px",
        },
        pages: {
            width: "100%",
            maxWidth: "960px",
            m: 0,
            mx: "auto",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        },
        header: {
            height: '60px',
            width: '100vw',
            bg: 'primary',
            borderBottom: '1px solid',
            borderColor: 'primary',
            p: 40,
        },
        headerNav: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            variant: 'containers.page',
            height: '100%',
            pr: 40,
        },
        headerNavLink1: {fontWeight: 'bold', fontSize: 4, cursor: 'pointer'},
        headerNavLink2: {color: 'text', fontSize: 3, cursor: 'pointer'}
    },
    styles: {
        ...roboto.styles
    },
}

export default theme;