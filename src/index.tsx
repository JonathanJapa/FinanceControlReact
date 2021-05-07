import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs'


import App from './App';

createServer({
  models: {
    transaction: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id:1,
          title: 'freelancer de front-end',
          type: 'ganhou',
          category: 'dev',
          amount: 6000,
          createdAt: new Date(21-21-21)

        }
        ,
        {
          id:2,
          type: 'gastou',
          title: 'conta de agua',
          category: 'conta',
          amount: 500,
          createdAt: new Date(10-10-10)

        },
        {
          id:3,
          type: 'gastou',
          category:'conta',
          title:'luz'
        }
        



      ]


    })
  },
  
   routes() {
     this.namespace = "api";

     this.get('/transactions', () => {
       return this.schema.all('transaction')
     })

     this.post('transactions', (schema,request)=>{
       const data = JSON.parse(request.requestBody)
       return schema.create('transaction', data)
     })

   }

 })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




