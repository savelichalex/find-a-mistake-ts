export const foo = (bar: string, sep: string) => {
    let acc = '';

    let i = 0;
    while (i < bar.length) {
        for (let j = 0; j < 3; j += 1) {
            acc += bar[i + j];
        }

        acc += sep;
        i += 3;
    }

    return acc;
};
