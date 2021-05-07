import { Container } from "./style";
import incomeimg from "../../assets/income.svg"
import outcomeimg from "../../assets/outcome.svg"
import totalimg from "../../assets/total.svg"
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary(){
    const {transactions} = useContext(TransactionsContext);
    console.log(transactions)
   

    
    
    return (
        <Container>
            

            <div>
                <header> 
                    <p>ganhos</p>
                    <img src={ incomeimg} alt="Enter"/>
                </header>

                <strong> 1000 </strong>
            </div>
            <div>
                <header> 
                    <p>gastos</p>
                    <img src={ outcomeimg} alt="Enter"/>
                </header>

                <strong> 1001 </strong>
            </div>
            <div className='totalgreen'>
                <header > 
                    <p>total</p>
                    <img src={ totalimg} alt="n deu"/>
                </header>

                <strong> 100000 </strong>
            </div>



        </Container>
        
        
        
        )
    }