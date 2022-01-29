import { useContext } from 'react';
import { BudgetContext } from "./context/BudgetContext";
import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';

const useTransactions = (title) => {
    resetCategories();
    const { state } = useContext(BudgetContext);
    const transactionsPerType = state.filter((t) => t.type === title);
    const total = transactionsPerType.reduce((acc, curr) => acc += curr.amount, 0);
    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    transactionsPerType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category);

        if (category) category.amount += t.amount;
    });

    const filteredCategories = categories.filter((sc) => sc.amount > 0);

    const chartData = {
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color),
        }],
        labels: filteredCategories.map((c) => c.type),
    };

    return { filteredCategories, total, chartData };
};

export default useTransactions;