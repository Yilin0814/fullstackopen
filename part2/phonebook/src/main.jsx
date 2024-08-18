import ReactDOM from 'react-dom/client'

import App from './App'

const persons = [
  { name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  {
    id: 5,
    name: 'Yilin Wang',
    number: '+358 417213907'
  },
  {
    id: 6,
    name: 'Hailin Liu',
    number: '+86 10086100'
  },
  {
    id: 7,
    name: 'Runying Guo',
    number: '+86 589246940'
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App persons={persons} />
)