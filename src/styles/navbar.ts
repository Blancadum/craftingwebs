import { colors, border } from './tokens'
import type { CSSProperties } from 'react'

export const navStyles: Record<string, CSSProperties> = {
    nav: {
        background: colors.black,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        height: '56px',
        borderBottom: border.dark,
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        textDecoration: 'none',
    },
    logoText: {
        color: colors.white,
        fontSize: '15px',
        fontWeight: 400,
        letterSpacing: '-0.3px',
    },
    logoSpan: {
        color: colors.gray7,
        fontWeight: 500,
    },
    links: {
        display: 'flex',
        gap: '28px',
    },
    link: {
        color: colors.gray6,
        fontSize: '13px',
        textDecoration: 'none',
    },
    cta: {
        background: colors.white,
        color: colors.black,
        fontSize: '12px',
        fontWeight: 500,
        padding: '7px 16px',
        borderRadius: '4px',
        textDecoration: 'none',
        letterSpacing: '0.03em',
    },
}