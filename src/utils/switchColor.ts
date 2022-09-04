
enum types {
    Income = 'Income',
    Expenses = 'Expenses',
    Savings = 'Savings'
}

export const switchColor = (type) => {

    switch (type) {
        case (types.Expenses) : return 'red'
        case (types.Income) : return 'green'
        case (types.Savings) : return 'blue'
    }

}


