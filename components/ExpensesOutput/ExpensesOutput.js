import { View, StyleSheet} from "react-native";
import { GlobalStyles } from "../../constants/styles";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOutput({expenses, expensePeriod}){
    DUMMY_EXPENSES = [
        {
            id: 'e1',
            amount: 100.43,
            description: 'A pair of shoes',
            date: new Date('2022-01-01')
        },
        {
            id: 'e2',
            amount: 200.67,
            description: 'A fur coat',
            date: new Date('2022-01-02')
        },
        {
            id: 'e3',
            amount: 300.92,
            description: 'Nintendo Switch',
            date: new Date('2022-01-03')
        },
        {
            id: 'e4',
            amount: 400.32,
            description: 'Xbox',
            date: new Date('2022-01-04')
        },
        {
            id: 'e5',
            amount: 500.32,
            description: 'Playstation 5',
            date: new Date('2022-01-05')
        },
        {
            id: 'e6',
            amount: 2500.87,
            description: 'Macbook Pro',
            date: new Date('2022-01-06')
        }
    ]
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensePeriod}/>
            <ExpensesList expenses={DUMMY_EXPENSES}/>
        </View>
    )
}

export default ExpensesOutput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    }
})