
export const isLessThan1200 = (isLessThan1200 : boolean) => {

    if (isLessThan1200) {
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








