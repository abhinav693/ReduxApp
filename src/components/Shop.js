import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state/index'
import { bindActionCreators } from 'redux'


const Shop = () => {
    const dispatch = useDispatch()
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch)

  return (
    <div>
        <h1>Deposit/Withdraw Money </h1>
        {/* <button className="btn btn-primary mx-3" onClick={()=>dispatch(actionCreators.withdrawMoney(100))}>  -  </button>
               Update Balance
        <button className="btn btn-primary mx-3" onClick={()=>dispatch(actionCreators.depositMoney(100))}>  +  </button> */}
                <button className="btn btn-primary mx-3" onClick={()=>withdrawMoney(100)}>  -  </button>
               Update Balance
        <button className="btn btn-primary mx-3" onClick={()=>depositMoney(100)}>  +  </button>
    </div>
  )
}

export default Shop
 