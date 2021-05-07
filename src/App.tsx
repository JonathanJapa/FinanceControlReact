import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'

import {NewTransactionsModal} from './components/NewTransactionsModal'
import { TransactionsProvider } from "./TransactionsContext";

Modal.setAppElement('#root') 

function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false)
  function handleOpenNewTransactionModal() {
      setIsNewTransactionsModalOpen(true);
  }
  function handleCloseNewTransactionMoldal(){
      setIsNewTransactionsModalOpen(false);
  }
  return (
    <TransactionsProvider>

      <Header onOpenNewTransactionsModal = {handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionsModal isOpen={isNewTransactionsModalOpen}
      onRequestClose={handleCloseNewTransactionMoldal}
      />
      
     
      
      <GlobalStyle/>
     
  
    </TransactionsProvider>
  );
}

export default App;
