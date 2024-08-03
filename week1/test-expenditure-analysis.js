function calculateTotalSpentByCategory(transactions){
    let totalSpentByCategory = {};
    transactions.forEach(transaction => {
        if(totalSpentByCategory[transaction.category]){
            totalSpentByCategory[transaction.category] += transaction.amount;
        } else {
            totalSpentByCategory[transaction.category] = transaction.amount;
        }
    });
    return totalSpentByCategory;
}
module.exports = calculateTotalSpentByCategory;