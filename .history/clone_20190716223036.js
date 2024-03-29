'user-strict'

const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item);

export{clone}