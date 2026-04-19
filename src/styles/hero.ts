import { colors, border } from './tokens'
import type { CSSProperties } from 'react'

export const heroStyles: Record<string, CSSProperties> = {
    section: {
        background: colors.black,
        padding: '72px 2rem 80px',
    },
    container: {
        maxWidth: '1100px',
        margin: '0 auto',
    },
    title: {
        color: colors.white,
        fontSize: '42px',
        fontWeight: 500,
        letterSpacing: '-0.05rem',
        lineHeight: 1.15,
        marginBottom: '16px',
        maxWidth: '560px',
    },
    titleMuted: {
        color: colors.gray6,
    },
    subtitle: {
        color: colors.gray5,
        fontSize: '15px',
        lineHeight: 1.7,
        maxWidth: '440px',
        marginBottom: '28px',
    },
    diferencial: {
        display: 'flex',
        gap: '32px',
        marginBottom: '40px',
    },
    diferencialItem: {
        display: 'flex',
        gap: '10px',
        alignItems: 'flex-start',
    },
    diferencialNum: {
        color: colors.gray3,
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.08rem',
        paddingTop: '2px',
    },
    diferencialText: {
        color: colors.gray5,
        fontSize: '12px',
        lineHeight: 1.6,
        whiteSpace: 'pre-line',
    },
    ctas: {
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
        marginBottom: '48px',
    },
    statsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px',
        background: colors.gray2,
        border: border.dark,
        borderRadius: '8px',
        overflow: 'hidden',
    },
    statItem: {
        background: colors.gray1,
        padding: '20px 24px',
    },
    statNum: {
        color: colors.white,
        fontSize: '26px',
        fontWeight: 500,
        letterSpacing: '-0.03rem',
    },
    statLabel: {
        color: colors.gray5,
        fontSize: '11px',
        marginTop: '4px',
        letterSpacing: '0.08rem',
    },
}