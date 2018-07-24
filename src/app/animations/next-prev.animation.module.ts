import { animate, state, style, transition, trigger, keyframes } from '@angular/animations';

export const NEXT_PREV_ANIMATION =
  trigger('nextPrevTrigger', [
  // trigger('flyInOut', [
    state('next', style({
      // transform: 'scale(1.1)'
    })),
    state('prev', style({
      // transform: 'scale(1.1)'
    })),
    transition('next => prev', animate(
      '.9s 100ms ease-in',
      keyframes([
        style({opacity: 0, transform: 'translateY(-75%)'}),
        style({opacity: 0.5, transform: 'translateY(35px)'}),
        style({opacity: 1, transform: 'translateY(0)'})
      ])
    )),
    transition('prev => next', animate(
      '.9s 100ms ease-out',
      keyframes([
        style({opacity: 0, transform: 'translateY(75%)'}),
        style({opacity: 0.5, transform: 'translateY(-35px)'}),
        style({opacity: 1, transform: 'translateY(0)'})
      ])
    ))
  ]
);
