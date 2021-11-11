import { trigger, transition, style, animate, animation, keyframes } from "@angular/animations"

export let fade =

  trigger('fade', [
    transition('void => *', [
      style({ backgroundColor: 'blue' }),
      animate('0.2s 100ms cubic-bezier(.23, .75, .88, .15)')
    ])
  ])
export let bounsleftani = animation([
  style({  backgroundColor: '{{m}}'}),

  animate('{{ time }}')
], { params: {  time: '2000' ,m:'blue'} })


export let slide =
  trigger('slide', [
    transition('void => *', [
      style({ transform: 'translateX(-300px)' }),
      animate(2000, keyframes([
        style({ transform: 'translateX(-200px)' }),
        style({ transform: 'translateX(-100px)' }),
        style({ transform: 'translateX(-50px)' })
      ]))
    ]),
    transition('* => void', [
      style({ transform: 'translateX(-100%)' }),
      animate(2000, keyframes([
        style({ transform: 'translateX(300px)' }),
        style({ transform: 'translateX(500px)' }),
        style({ transform: 'translateX(700px)' })


      ]))
    ])])
