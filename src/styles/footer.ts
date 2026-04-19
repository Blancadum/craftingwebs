import { colors, border } from './tokens'
import type { CSSProperties } from 'react'

export const footerStyles: Record<string, CSSProperties> = {
    footer: {
        background: colors.black,
        borderTop: border.dark,
    },
    container: {
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '48px 2rem 0',
    },
    top: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr 1fr',
        gap: '48px',
        paddingBottom: '48px',
        borderBottom: border.dark,
    },
    brand: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '16px',
    },
    brandText: {
        color: colors.white,
        fontSize: '14px',
    },
    brandSpan: {
        color: colors.gray7,
        fontWeight: 500,
    },
    brandDesc: {
        color: colors.gray5,
        fontSize: '12px',
        lineHeight: 1.7,
        maxWidth: '260px',
    },
    brandEmail: {
        color: colors.gray4,
        fontSize: '11px',
        marginTop: '16px',
    },
    colLabel: {
        fontSize: '10px',
        letterSpacing: '0.16rem',
        color: colors.gray4,
        marginBottom: '16px',
    },
    col: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    link: {
        color: colors.gray6,
        fontSize: '13px',
        textDecoration: 'none',
    },
    bottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 0',
    },
    bottomText: {
        color: colors.gray3,
        fontSize: '11px',
    },
}