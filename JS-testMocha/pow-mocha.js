function pow(x, n) {
    if (n < 0) return NaN;
    if (Math.round(n) != n) return NaN;

    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

//test
