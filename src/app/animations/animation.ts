import { animate, state, style, transition, trigger, keyframes } from '@angular/animations';

export const HIDE_UP_DOWN_ANIMATION =
  trigger('hideUpDownTrigger', [
    transition('hideDown => prev', animate(
      '.6s 00ms ease-out',
      keyframes([
        style({ opacity: 0, transform: 'scale(0,0)' }),
        style({ opacity: 0.33, transform: 'scale(1.1,1.1)' }),
        style({ opacity: 0.66, transform: 'scale(0.95,0.95)' }),
        style({ opacity: 1, transform: 'scale(1,1)' })
      ])
    )),
    transition('hideUp => next', animate(
      '.6s 00ms ease-out',
      keyframes([
        style({ opacity: 0, transform: 'scale(0,0)' }),
        style({ opacity: 0.33, transform: 'scale(1.1,1.1)' }),
        style({ opacity: 0.66, transform: 'scale(0.95,0.95)' }),
        style({ opacity: 1, transform: 'scale(1,1)' })
      ])
    )),
    transition('* => hideDown', animate(
      '.3s 00ms ease-out',
      keyframes([
        style({ opacity: 0, transform: 'scale(1,1)' }),
        style({ opacity: 1, transform: 'scale(0,0)' })
      ])
    )),
    transition('* => hideUp', animate(
      '.3s 00ms ease-out',
      keyframes([
        style({ opacity: 0, transform: 'scale(1,1)' }),
        style({ opacity: 1, transform: 'scale(0,0)' })
      ])
    ))
  ]);

// export const HIDE_UP_DOWN_ANIMATION =
//   trigger('hideUpDownTrigger', [
//     transition('hideDown => prev', animate(
//       '.6s 00ms ease-out',
//       keyframes([
//         style({ opacity: 0, transform: 'translateY(-75%)' }),
//         style({ opacity: 0.33, transform: 'translateY(45px)' }),
//         style({ opacity: 0.66, transform: 'translateY(-25px)' }),
//         style({ opacity: 1, transform: 'translateY(0)' })
//       ])
//     )),
//     transition('hideUp => next', animate(
//       '.6s 00ms ease-out',
//       keyframes([
//         style({ opacity: 0, transform: 'translateY(75%)' }),
//         style({ opacity: 0.33, transform: 'translateY(-45px)' }),
//         style({ opacity: 0.66, transform: 'translateY(25px)' }),
//         style({ opacity: 1, transform: 'translateY(0)' }),
//       ])
//     )),
//     transition('* => hideDown', animate(
//       '.3s 00ms ease-out',
//       keyframes([
//         style({ opacity: 1, transform: 'translateY(0%)' }),
//         style({ opacity: 0, transform: 'translateY(50%)' }),
//       ])
//     )),
//     transition('* => hideUp', animate(
//       '.3s 00ms ease-out',
//       keyframes([
//         style({ opacity: 1, transform: 'translateY(-0%)' }),
//         style({ opacity: 0, transform: 'translateY(-50%)' }),
//       ])
//     ))
//   ]);

export const NO_YES_ANIMATION =
  trigger('noTrigger', [
    transition('* => *', animate(
      '.3s 00ms ease-out',
      keyframes([
        style({ opacity: 1, transform: 'translateX(20px)' }),
        style({ opacity: 1, transform: 'translateX(-20px)' }),
        style({ opacity: 1, transform: 'translateX(20px)' }),
        style({ opacity: 1, transform: 'translateX(-20px)' }),
      ])
    ))
  ]
  );
