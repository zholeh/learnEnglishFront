import { animate, state, style, transition, trigger, keyframes } from '@angular/animations';

export const HIDE_UP_DOWN_ANIMATION =
  trigger('hideUpDownTrigger', [
    transition('* => down_1', animate(
      '.3s 00ms ease-out',
      keyframes([
        style({ opacity: 1, transform: 'rotate(0deg) scale(1,1)' }),
        style({ opacity: 0, transform: 'rotate(360deg) scale(0,0)' })
      ])
    )),
    transition('* => up_1', animate(
      '.3s 00ms ease-out',
      keyframes([
        style({ opacity: 1, transform: 'scale(1,1) rotate(0deg)' }),
        style({ opacity: 0, transform: 'scale(0,0) rotate(360deg)' })
      ])
    )),
    transition('* => down_2', animate(
      '.3s 00ms ease-out',
      keyframes([
        style({ opacity: 1, transform: 'translateY(0%)' }),
        style({ opacity: 0, transform: 'translateY(50%)' }),
      ])
    )),
    transition('* => up_2', animate(
      '.3s 00ms ease-out',
      keyframes([
        style({ opacity: 1, transform: 'translateY(-0%)' }),
        style({ opacity: 0, transform: 'translateY(-50%)' }),
      ])
    )),
    transition('* => down_3', animate(
      '.3s 00ms ease-out',
      keyframes([
        style({ opacity: 1, transform: 'scale(1,1)' }),
        style({ opacity: 0, transform: 'scale(0,0)' })
      ])
    )),
    transition('* => up_3', animate(
      '.3s 00ms ease-out',
      keyframes([
        style({ opacity: 1, transform: 'scale(1,1)' }),
        style({ opacity: 0, transform: 'scale(0,0)' })
      ])
    )),
    transition('* => down_4', animate(
      '.3s 00ms ease-out',
      keyframes([
        style({ opacity: 1, transform: 'rotate(0deg)' }),
        style({ opacity: 0, transform: 'rotate(360deg)' })
      ])
    )),
    transition('* => up_4', animate(
      '.3s 00ms ease-out',
      keyframes([
        style({ opacity: 1, transform: 'rotate(0deg)' }),
        style({ opacity: 0, transform: 'rotate(360deg)' })
      ])
    )),
    transition('* => down_5', animate(
      '.3s 00ms ease-out',
      keyframes([
        style({ opacity: 1 }),
        style({ opacity: 0 })
      ])
    )),
    transition('* => up_5', animate(
      '.3s 00ms ease-out',
      keyframes([
        style({ opacity: 1 }),
        style({ opacity: 0 })
      ])
    )),
    transition('* => down_6', animate(
      '.3s 00ms ease-out',
      keyframes([
        style({ opacity: 1, transform: 'rotate(0deg) scale(1,1)' }),
        style({ opacity: 0, transform: 'rotate(-360deg) scale(0,0)' })
      ])
    )),
    transition('* => up_6', animate(
      '.3s 00ms ease-out',
      keyframes([
        style({ opacity: 1, transform: 'scale(1,1) rotate(0deg)' }),
        style({ opacity: 0, transform: 'scale(0,0) rotate(-360deg)' })
      ])
    )),
    transition('* => down_7', animate(
      '.3s 00ms ease-out',
      keyframes([
        style({ opacity: 1, transform: 'rotate(0deg)' }),
        style({ opacity: 0, transform: 'rotate(-360deg)' })
      ])
    )),
    transition('* => up_7', animate(
      '.3s 00ms ease-out',
      keyframes([
        style({ opacity: 1, transform: 'rotate(0deg)' }),
        style({ opacity: 0, transform: 'rotate(-360deg)' })
      ])
    ))
  ]);

export const SHOW_UP_DOWN_ANIMATION =
  trigger('showUpDownTrigger', [
    transition('* => up_1', animate(
      '.6s 00ms ease-out',
      keyframes([
        style({ opacity: 0, transform: 'scale(0,0) rotate(0deg)' }),
        style({ opacity: 0.33, transform: 'scale(1.15,1.15) rotate(270deg)' }),
        style({ opacity: 0.66, transform: 'scale(0.90,0.90) rotate(360deg)' }),
        style({ opacity: 1, transform: 'scale(1,1)' })
      ])
    )),
    transition('* => down_1', animate(
      '.6s 00ms ease-out',
      keyframes([
        style({ opacity: 0, transform: 'scale(0,0) rotate(0deg)' }),
        style({ opacity: 0.33, transform: 'scale(1.15,1.15) rotate(270deg)' }),
        style({ opacity: 0.66, transform: 'scale(0.90,0.90) rotate(360deg)' }),
        style({ opacity: 1, transform: 'scale(1,1)' })
      ])
    )),
    transition('* => up_2', animate(
      '.6s 00ms ease-out',
      keyframes([
        style({ opacity: 0, transform: 'translateY(-75%)' }),
        style({ opacity: 0.33, transform: 'translateY(45px)' }),
        style({ opacity: 0.66, transform: 'translateY(-25px)' }),
        style({ opacity: 1, transform: 'translateY(0)' })
      ])
    )),
    transition('* => down_2', animate(
      '.6s 00ms ease-out',
      keyframes([
        style({ opacity: 0, transform: 'translateY(75%)' }),
        style({ opacity: 0.33, transform: 'translateY(-45px)' }),
        style({ opacity: 0.66, transform: 'translateY(25px)' }),
        style({ opacity: 1, transform: 'translateY(0)' }),
      ])
    )),
    transition('* => up_3', animate(
      '.6s 00ms ease-out',
      keyframes([
        style({ opacity: 0, transform: 'scale(0,0)' }),
        style({ opacity: 0.33, transform: 'scale(1.15,1.15)' }),
        style({ opacity: 0.66, transform: 'scale(0.90,0.90)' }),
        style({ opacity: 1, transform: 'scale(1,1)' })
      ])
    )),
    transition('* => down_3', animate(
      '.6s 00ms ease-out',
      keyframes([
        style({ opacity: 0, transform: 'scale(0,0)' }),
        style({ opacity: 0.33, transform: 'scale(1.15,1.15)' }),
        style({ opacity: 0.66, transform: 'scale(0.90,0.90)' }),
        style({ opacity: 1, transform: 'scale(1,1)' })
      ])
    )),
    transition('* => up_4', animate(
      '.6s 00ms ease-out',
      keyframes([
        style({ opacity: 0, transform: 'rotate(0deg)' }),
        style({ opacity: 0.33, transform: 'rotate(270deg)' }),
        style({ opacity: 0.66, transform: 'rotate(390deg)' }),
        style({ opacity: 1, transform: 'rotate(355deg)' }),
        style({ opacity: 1, transform: 'rotate(360deg)' })
      ])
    )),
    transition('* => down_4', animate(
      '.6s 00ms ease-out',
      keyframes([
        style({ opacity: 0, transform: 'rotate(0deg)' }),
        style({ opacity: 0.33, transform: 'rotate(270deg)' }),
        style({ opacity: 0.66, transform: 'rotate(390deg)' }),
        style({ opacity: 1, transform: 'rotate(355deg)' }),
        style({ opacity: 1, transform: 'rotate(360deg)' })
      ])
    )),
    transition('* => up_5', animate(
      '.6s 00ms ease-out',
      keyframes([
        style({ opacity: 0 }),
        style({ opacity: 1 })
      ])
    )),
    transition('* => down_5', animate(
      '.6s 00ms ease-out',
      keyframes([
        style({ opacity: 0 }),
        style({ opacity: 1 })
      ])
    )),
    transition('* => up_6', animate(
      '.6s 00ms ease-out',
      keyframes([
        style({ opacity: 0, transform: 'scale(0,0) rotate(0deg)' }),
        style({ opacity: 0.33, transform: 'scale(1.15,1.15) rotate(-270deg)' }),
        style({ opacity: 0.66, transform: 'scale(0.90,0.90) rotate(-360deg)' }),
        style({ opacity: 1, transform: 'scale(1,1)' })
      ])
    )),
    transition('* => down_6', animate(
      '.6s 00ms ease-out',
      keyframes([
        style({ opacity: 0, transform: 'scale(0,0) rotate(0deg)' }),
        style({ opacity: 0.33, transform: 'scale(1.15,1.15) rotate(-270deg)' }),
        style({ opacity: 0.66, transform: 'scale(0.90,0.90) rotate(-360deg)' }),
        style({ opacity: 1, transform: 'scale(1,1)' })
      ])
    )),
    transition('* => up_7', animate(
      '.6s 00ms ease-out',
      keyframes([
        style({ opacity: 0, transform: 'rotate(0deg)' }),
        style({ opacity: 0.33, transform: 'rotate(-270deg)' }),
        style({ opacity: 0.66, transform: 'rotate(-390deg)' }),
        style({ opacity: 1, transform: 'rotate(-355deg)' }),
        style({ opacity: 1, transform: 'rotate(-360deg)' })
      ])
    )),
    transition('* => down_7', animate(
      '.6s 00ms ease-out',
      keyframes([
        style({ opacity: 0, transform: 'rotate(0deg)' }),
        style({ opacity: 0.33, transform: 'rotate(-270deg)' }),
        style({ opacity: 0.66, transform: 'rotate(-390deg)' }),
        style({ opacity: 1, transform: 'rotate(-355deg)' }),
        style({ opacity: 1, transform: 'rotate(-360deg)' })
      ])
    ))
  ]);

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
  ]);
