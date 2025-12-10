import { style }            from '@vanilla-extract/css';
import { sliderColorStore } from './store/Slider.color.store';

export const sliderWrapperClass = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '1.25rem',
});

export const sliderTrackClass = style({
  position: 'absolute',
  width: '100%',
  height: '4px',
  borderRadius: '2px',
  background: sliderColorStore.use('track'),

  selectors: {
    '&[data-disabled="true"]': {
      background: sliderColorStore.use('disabled-track'),
    },
  },
});

export const sliderFillClass = style({
  position: 'absolute',
  height: '4px',
  borderRadius: '2px',
  background: sliderColorStore.use('fill'),

  selectors: {
    '&[data-disabled="true"]': {
      background: sliderColorStore.use('disabled-fill'),
    },
  },
});

export const sliderInputClass = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  margin: 0,
  opacity: 0,
  cursor: 'pointer',
  zIndex: 2,

  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
});

export const sliderThumbClass = style({
  position: 'absolute',
  width: '1rem',
  height: '1rem',
  borderRadius: '50%',
  background: sliderColorStore.use('thumb'),
  transform: 'translateX(-50%)',
  pointerEvents: 'none',
  transition: 'box-shadow 0.15s cubic-bezier(1, 0.5, 0, 0.5)',
  zIndex: 1,

  selectors: {
    [`${sliderInputClass}:focus-visible + &`]: {
      boxShadow: `0 0 0 3px rgba(0, 0, 0, 0.1)`,
    },
    '&[data-disabled="true"]': {
      background: sliderColorStore.use('disabled-thumb'),
    },
  },
});
