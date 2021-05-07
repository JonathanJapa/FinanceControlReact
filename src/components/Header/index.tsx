
import logoImg from '../../assets/logomarca.jpg'; 
import { Container,Content } from './styles';

 
interface headerProps{
    onOpenNewTransactionsModal: () =>void;
}




export function Header({onOpenNewTransactionsModal}:headerProps){

   
 return (

        <Container>
            <Content>
            <img src={ logoImg } alt="sei la"/>
            <button type='button' onClick={onOpenNewTransactionsModal} > Nova Movimentação </button>

            
           
            </Content>
            
        </Container>
    )
}