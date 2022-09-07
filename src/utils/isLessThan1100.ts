
export const isLessThan1000 = (isLessThan1000 : boolean) => {

    if (isLessThan1000) {
        return {
            columns: 0,
            rows: 2
        }
    }
    else {
        return {
            columns: 2,
            rows: 0
        }
    }
}








