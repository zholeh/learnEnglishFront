import { animate, state, style, transition, trigger, keyframes } from '@angular/animations';

export const NEXT_PREV_ANIMATION =
trigger('nextPrevTrigger', [
  transition('next => prev', animate(
    '.9s 00ms ease-out',
    keyframes([
      style({ opacity: 0, transform: 'translateY(-75%)' }),
      style({ opacity: 0.33, transform: 'translateY(45px)' }),
      style({ opacity: 0.66, transform: 'translateY(-25px)' }),
      style({ opacity: 1, transform: 'translateY(0)' })
    ])
  )),
  transition('prev => next', animate(
    '.6s 00ms ease-out',
    keyframes([
      style({ opacity: 0, transform: 'translateY(75%)' }),
      style({ opacity: 0.33, transform: 'translateY(-45px)' }),
      style({ opacity: 0.66, transform: 'translateY(25px)' }),
      style({ opacity: 1, transform: 'translateY(0)' }),
    ])
  ))
]
);

export const NO_YES_ANIMATION =
  trigger('noTrigger', [
    transition('yes => no', animate(
      '.3s 00ms ease-out',
      keyframes([
        style({ opacity: 1, transform: 'translateX(20px)' }),
        style({ opacity: 1, transform: 'translateX(-20px)' }),
        style({ opacity: 1, transform: 'translateX(20px)' }),
        style({ opacity: 1, transform: 'translateX(-20px)' }),
      ])
    )),
    transition('prev => next', animate(''))
  ]
  );
