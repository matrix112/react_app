/* eslint-disable */

import React from "react";
import {Table} from 'react-bootstrap'; // {Table} -- get Table variable or function, Table -- get 'Table' as exported..
import { connect, useDispatch, useSelector } from "react-redux";

function Cart(props){

  let state = useSelector((state)=>state) //return state..
  console.log(" Reducer : ",state.reducer+", reducerAlertCgh : "+state.reducerAlertCgh);
  let dispatch = useDispatch();
  
  return(
    <div>
        <Table responsive>
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>add</th>
                  </tr>
              </thead>
              <tbody>
                  {
                    //props.state.map( (a,i)=>{ // for function myStateToProps
                    state.reducer.map( (a,i)=>{
                      if(a.id === null){ return null}
                      else{
                        return(                        
                          <tr key={i}>
                            <td>{a.id}</td>
                            <td>{ a.name }</td>
                            <td>{ a.quantity }</td>
                            <td><button onClick={()=>{
                                console.log("a.id : ",a.id);
                                //props.dispatch({type:'addQuantity'}) // for function myStateToProps
                                dispatch({type:'addQuantity', data : a.id })

                            }}>+</button>
                            <button onClick={()=>{

                                //props.dispatch({type:'takeawayQuantity'}) // for function myStateToProps
                                dispatch({type:'takeawayQuantity', data : a.id })

                            }}>-</button>
                            </td>
                          </tr>
                        )
                      }
                    })
                  }
              </tbody>
        </Table>
        {//props.alertState === true  // for function myStateToProps
          state.reducerAlertCgh === true
          ?(<div className="my-alert2">
              <p>20% cut off purchasing now!!</p>
              <button onClick={()=>{
                  //props.dispatch({type:'closeAlert'}) // for function myStateToProps
                  dispatch({type:'closeAlert'})
              }}>close alert..</button>
            </div>
          ):null
        }
        

    </div>
  )

}

/* function myStateToProps(state){  // old way to use reducer...
    //console.log("state : "+state);
    return{
        //ProductName : state[0].name
        state : state.reducer,
        alertState : state.reducerAlertCgh
    }
}

export default connect(myStateToProps)(Cart)
 */
export default Cart;