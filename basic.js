'user-strict'

const clone = (items) => JSON.parse(JSON.stringify(items));
const deepFreeze = (object) => {
    // Retrieve the property names defined on object
    const propNames = Object.getOwnPropertyNames(object);
    // Freeze properties before freezing self
    for (const name of propNames) {
        const value = object[name];

        if (value && typeof value === "object") {
            deepFreeze(value);
        }
    }

    return Object.freeze(object);
}

export { clone, deepFreeze }