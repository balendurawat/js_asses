function debounce(fn, timeInMs) {
    let tim;

    return function (){
        clearTimeout(tim);
        tim = setTimeout(() => {
            fn.apply(this, arguments);
        }, timeInMs);
    }
}

export { debounce };
