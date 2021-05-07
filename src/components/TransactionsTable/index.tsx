import { useContext} from 'react'
import { TransactionsContext } from "../../TransactionsContext";
import {Container} from"./styles";


    
export function TransanctionsTable (){
    
    const {transactions} = useContext(TransactionsContext);
 
   
    return(
        <Container> 
            <table>
                <thead> 
                    <tr>
                        <th>titulo</th>
                        <th>valor</th> 
                        <th>categoria</th>
                        <th>data</th>
                    </tr>
                </thead>


                <tbody>
                    {transactions.map(transaction => (
                    <tr key ={transaction.id} >
                        <td>{transaction.title}</td> 
                        <td className={transaction.type}>
                           
                        {transaction.amount}
                         </td>
                        <td >{transaction.category}</td>
                        <td>{transaction.createdAt}</td>
                    </tr>

                    ))}
                    


                </tbody>
            </table>

        </Container>
    )

}