export const progressCalculation = (SumarySavings : number,ProgressValue : number) => {

    if (SumarySavings - ProgressValue >= 0) {
        return 100
    }
    else {
       return Math.floor((SumarySavings/ProgressValue)*100)
    }

}




