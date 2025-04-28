//what unknown does is it forces the developer to add some extra if checks before you use the received value in a certain place.
// unknown forces you to check if you can safely execute this code by checking for a bunch of codes. 'any' wouldn't force you to do any checks. 
function process(val: unknown) {
    if  (
        typeof val === 'object' && 
        !!val && 
        'log' in val &&
        typeof val.log === 'function'
    ) {
        val.log();
    }
}