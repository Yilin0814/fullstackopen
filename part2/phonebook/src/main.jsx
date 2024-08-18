import ReactDOM from 'react-dom/client'

import App from './App'

const persons = [
  {
    id: 1,
    name: 'Yilin Wang',
    number: '+358 417213907'
  },
  {
    id: 2,
    name: 'Hailin Liu',
    number: '+86 10086100'
  },
  {
    id: 3,
    name: 'Runying Guo',
    number: '+86 589246940'
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App persons={persons} />
)