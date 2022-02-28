import { formatNumber } from './formatNumber.js';

/**
 * 
 * @param {[]} DOMelements  sarasas DOM elementu, kuriu reikšmes norime atnaujinti
 * @param {number[]} timeValues timeValues sarasas sakaiciu, kurie reiskia likusi laika
 */

function updateClock(DOMelements, timeValues) {
    for (let i = 0; i < DOMelements.length; i++) {
        const formatedNumber = i > 0 ? formatNumber(timeValues[i]) : timeValues[i];
        DOMelements[i].innerText = formatedNumber;
    }

}


export { updateClock }