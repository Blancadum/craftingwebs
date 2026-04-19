import { colors, border } from './tokens'
import type { CSSProperties } from 'react'

export const servicesStyles: Record<string, CSSProperties> = {
    section: {
        background: colors.gray10,
        padding: '72px 2rem',
    },
    container: {
        maxWidth: '1100px',
        margin: '0 auto',
    },
    title: {
        fontSize: '28px',
        fontWeight: 500,
        color: colors.black,
        marginBottom: '48px',
        letterSpacing: '-0.03rem',
        lineHeight: 1.3,
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px',
        background: colors.gray9,
        border: border.default,
        borderRadius: '8px',
        overflow: 'hidden',
    },
    card: {
        background: colors.white,
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
    },
    cardNum: {
        fontSize: '10px',
        fontWeight: 500,
        color: colors.gray8,
        letterSpacing: '0.1rem',
    },
    cardName: {
        fontSize: '14px',
        fontWeight: 500,
        color: colors.black,
        lineHeight: 1.4,
    },
    cardDesc: {
        fontSize: '12px',
        color: colors.gray6,
        lineHeight: 1.7,
        margin: 0,
    },
    cardLink: {
        fontSize: '11px',
        color: colors.gray4,
        marginTop: 'auto',
        paddingTop: '8px',
        letterSpacing: '0.03rem',
    },
}