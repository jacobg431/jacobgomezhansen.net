export const enterPresets = {
    elevator: {
        from: { transform: 'scale(0)', opacity: '0' },
        to: { transform: '', opacity: '' },
    },
    fade: {
        from: { opacity: '0' },
        to: { opacity: '' },
    },
    accordionVertical: {
        from: { transform: 'scaleY(0)', transformOrigin: 'center top' },
        to: { transform: '', transformOrigin: 'center top' },
    },
    accordionHorizontal: {
        from: { transform: 'scaleX(0)', transformOrigin: 'left center' },
        to: { transform: '', transformOrigin: 'left center' },
    },
    none: null,
}

export const leavePresets = {
    elevator: {
        from: { transform: 'scale(1)', opacity: '1' },
        to: { transform: 'scale(0)', opacity: '0' },
    },
    fade: {
        from: { opacity: '1' },
        to: { opacity: '0' },
    },
    accordionVertical: {
        from: { transform: 'scaleY(1)', transformOrigin: 'center top' },
        to: { transform: 'scaleY(0)', transformOrigin: 'center top' },
    },
    accordionHorizontal: {
        from: { transform: 'scaleX(1)', transformOrigin: 'left center' },
        to: { transform: 'scaleX(0)', transformOrigin: 'left center' },
    },
    none: null,
}

// For now, appearPresets will be identical to enterPresets.
// Assigning a custom export in case we ever want to add appear-specific ones.
export const appearPresets = enterPresets

export const defaultPreset = 'elevator'
export const disablePreset = 'none'
