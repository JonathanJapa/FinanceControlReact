import Modal from 'react-modal'
import {  FormEvent,useState,useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';



import  closeImg from '../../assets/close.svg';
import imgEnter from '../../assets/income.svg'
import imgOut from '../../assets/outcome.svg'




import {Container} from './styles';
import {ContentButton,RadioBox} from './styles'


interface newTransactionsModalProps{
    isOpen: boolean,
    onRequestClose: () => void,
}


export function NewTransactionsModal({isOpen,onRequestClose}: newTransactionsModalProps){

    const {createTransaction} = useContext(TransactionsContext)
   
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType]= useState('ganhou',);
    
    async function handleNewTransaction(event:FormEvent){
        
        event.preventDefault()
        
        createTransaction({
            amount,
            category,
            title, 
            type,
        })
        setTitle('')
        setAmount(0)
        setCategory('')
        setType('ganhou')

        onRequestClose()

        
        
    }
    return ( 

        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content '>

         <button 
            type='button'
            onClick={onRequestClose} 
            className="botao-fechar">
            <img src={closeImg} alt="aaa"/>

        </button>
    
        <Container onSubmit={handleNewTransaction} >

            <h2> Nova Movimentação </h2>
            
            <input
            value={title}
            onChange={event => setTitle (event.target.value)}
            placeholder='qual transferençia'
            />
            
            <input
             type="number"
             value={amount}
            onChange={event => setAmount (+event.target.value)}
              placeholder = 'de quanto'
            />

        <ContentButton>
            <RadioBox 
            isActive ={type==='ganhou'}
            activeColor = 'green'
            
            type='button'
            onClick= { () => {setType('ganhou') }  }>
             <img src={imgEnter} alt="ganhou"/>
                <span>Ganhou</span>
            </RadioBox>
            
            
            <RadioBox 
            
            isActive ={type==='gastou'}
            activeColor = 'red'
            
            type='button' 
            onClick= { () => {setType('gastou') }  } >
                <img src={imgOut} alt="gastou"/>
                <span>Gastou</span>
            </RadioBox>


        </ContentButton>
            
            <input 
            placeholder="categoria"
            value={category}
            onChange={event => setCategory (event.target.value)}
            />
            <button type='submit'>Realizar Operação</button>
            

        </Container>
        </Modal>
    )
    

}