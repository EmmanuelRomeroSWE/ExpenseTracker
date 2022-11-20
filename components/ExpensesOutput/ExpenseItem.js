import { Pressable, StyleSheet, Text, View, ViewComponent } from 'react-native'
import { GlobalStyles } from '../../constants/styles'

function ExpenseItem({ description, amount, date }){
    return <Pressable>
        <View style={styles.expenseItem}>
            <View>
            <Text>{description}</Text>
            <Text>{amount}</Text>
            </View>
            <View>
            <Text>{date}</Text>
            </View>
        </View>
    </Pressable>
}

export default ExpenseItem

const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
    }
})