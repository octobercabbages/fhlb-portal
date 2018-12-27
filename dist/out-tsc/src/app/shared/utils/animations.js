"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
// const query = (s,a,o={optional:true})=>q(s,a,o);
// export const routerTransition = trigger('routerTransition', [
//   transition('* => *', [
//   ])
// ]);
function doTransition(fromState, toState) {
    return toState >= fromState;
}
exports.doTransition = doTransition;
exports.routerTransition = animations_1.trigger('routerTransition', [
    animations_1.transition(doTransition, [
        // query(':enter, :leave', style({ position: 'fixed', width:'100%' }), { optional: true }),
        // group([  // block executes in parallel
        //   query(':enter', [
        //     style({ transform: 'translateX(100%)', zIndex: 9999 }),
        //     animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        //   ], { optional: true })
        // ]),
        animations_1.query(':enter, :leave', animations_1.style({ position: 'absolute', width: '100%', height: '100%' }), { optional: true }),
        animations_1.query(':enter', animations_1.style({ transform: 'translateY(100%)' }), { optional: true }),
        animations_1.sequence([
            animations_1.query(':leave', animations_1.animateChild(), { optional: true }),
            animations_1.group([
                animations_1.query(':leave', [
                    animations_1.style({ transform: 'translateY(0%)', opacity: '1' }),
                    animations_1.animate('300ms cubic-bezier(.36,.13,.69,.98)', animations_1.style({ transform: 'translateY(20%)', opacity: '0' }))
                ], { optional: true }),
                animations_1.query(':enter', [
                    animations_1.style({ transform: 'translateY(20%)', opacity: '0' }),
                    animations_1.animate('300ms cubic-bezier(.36,.13,.69,.98)', animations_1.style({ transform: 'translateY(0%)', opacity: '1' })),
                ], { optional: true }),
            ]),
            animations_1.query(':enter', animations_1.animateChild(), { optional: true }),
        ])
    ])
]);
//# sourceMappingURL=animations.js.map