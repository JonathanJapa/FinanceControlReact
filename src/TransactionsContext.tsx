import { createContext,useEffect,useState,ReactNode} from 'react'
import {api} from './services/api'


interface transaction {
    id: number,
    title:string,
    type:string,
    amount: number,
    category: string,
    createdAt: string,};
interface transactionsProviderProps{
    children: ReactNode;
};
interface transactionsHandle{
    title:string,
    amount: number,
    category: string,
    type: string,

}
interface transactionsData{
    transactions: transaction[],
    createTransaction:(transaction:transactionsHandle)=> Promise<void>;
}

export const TransactionsContext = createContext<transactionsData>
( {} as transactionsData);



export function TransactionsProvider({children}:transactionsProviderProps) {


    const [transactions,setTransactions] = useState<transaction[]> ([])
    
    
    useEffect(()=> { 
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
    },[]);
    
    
    
    async function createTransaction( transactionInput:transactionsHandle){
    
        const response =  await api.post('/transactions', {

            ...transactionInput,    
            createdAt:new Date()
        });
        
        const {transaction} = response.data

        setTransactions([
            ...transactions,
            transaction,
        ]);}

    return(
        <TransactionsContext.Provider value={{transactions , createTransaction}}>
           
           {children}
            

            
            

        </TransactionsContext.Provider>
    )
}