/* eslint-disable */

import React, {useContext, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';
import { Navbar,Container,Nav,NavDropdown,Jumbotron,Button } from 'react-bootstrap';
import './Detail.scss';
import { stockContxt } from './App';

import {CSSTransition} from 'react-transition-group';

import {connect, useSelector} from 'react-redux';

let Bx = styled.div`
    padding : 20px;
`;
let Ttl = styled.h4`
    font-size : 25px;
    color : ${ props => props.color }
`;

/* class Detail2 extends React.Component{
  componentDidMount(){
    //hook for doing something when component opened..
  }
  componentWillUnmount(){
      //hook for doing somethin when component closed..
  }
} */

function Detail(props){

  let [alert, alertChg] = useState(true);
  let [inputDate, inputDataChg] = useState('');

  let [myTab, myTabChg] = useState(0);
  let [mySwitch, mySwitchChg] = useState(false);

  let mystock = useContext(stockContxt);

  let [stoageId, stoageIdChg] = useState('');

  useEffect(()=>{ //do something when loading, rerendering.. 
    //console.log(1121122);
    let myTimer = setTimeout(()=>{ alertChg(false) }, 2000);
    //console.log('hello!!')
    return ()=>{ clearTimeout(myTimer)}
    //return function myUnmount(){  }
  },[alert]);


  let { id } = useParams();
  let history = useHistory();

  let findPrct = props.shoes.find(x => x.id == id)

  useEffect(()=>{
    //localStorage..
    let storageDetailid = localStorage.getItem('detail_id');
    var arr;
    if(storageDetailid === null ){
      //localStorage.setItem('detail_id', JSON.stringify(id))
      arr = [];
    } else { arr = JSON.parse(storageDetailid); }
      //var n=0;      
      /* arr.map((a,i)=>{        
        console.log("localStoage id: ",a);
        if(a === id) n++;
      })
      if(n>0){
        arr.push(id);
        localStorage.setItem('detail_id', JSON.stringify(arr))
      } */
      arr.push(id);
      arr = new Set(arr); // removing duplicated value..
      arr = [...arr]
      localStorage.setItem('detail_id', JSON.stringify(arr));
    
  },[]);

  return(
    <div className="container">
      
      <Bx>
          <Ttl color="blue">Detail </Ttl>
          <Ttl color= "grey">Modern style </Ttl>
          <Ttl color= {'grey'}>Product </Ttl>
      </Bx>

      {/* <input onChange={(e)=>{ inputDataChg(e.target.value) }}/> */}

      {
        alert === true
        ? (<div className="my-alert2">
            <p>Stock is running out..</p>
          </div>)
        : null
      }
      

      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes'+(props.myid+1)+'.jpg'} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findPrct.title}</h4>
          <p>content : {findPrct.content}</p>
          <p>price : {findPrct.price}</p>          
          <p>Product id : {findPrct.id}</p>

          {/* <p>stock : {props.mystock[id]}</p> */
            console.log("findPrct.id : "+findPrct.id)
          }

          <StockInfo mystock={props.mystock} id={id}></StockInfo>

          <button className="btn btn-danger" onClick={ ()=>{
            //Stock managing
            console.log("id : "+id,", findPrct.id : "+findPrct.id);
            var addMystock = [...props.mystock];
            console.log("addMystock : "+addMystock[id]);
            addMystock[id] = addMystock[id] - 1;
            props.stockChg(addMystock)

            //redux dispatch..
            props.dispatch({type : 'addCart', payload : {id : findPrct.id, name : findPrct.title, quantity : 1} });
            history.push('/cart');

          } }>Order</button>

          <p></p>
          <p>
          <button className="btn btn-danger" onClick={()=>{
              history.goBack();
              //history.push(/);  // moving to some path..
          }}>Go Back..</button>
          </p>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" /* href="/home" */ onClick={()=>{ mySwitchChg(false); myTabChg(0); console.log("tab id : "+myTab); }}>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{ mySwitchChg(false);myTabChg(1);  console.log("tab id : "+myTab); }}> Option 2</Nav.Link>
        </Nav.Item>
        {<Nav.Item>
          <Nav.Link eventKey="link-2" /* eventKey="disabled"  disabled*/ onClick={()=>{ mySwitchChg(false); myTabChg(2); console.log("tab id : "+myTab); }}>
            Option 3
          </Nav.Link>
        </Nav.Item>}
      </Nav>
      
      <CSSTransition in={mySwitch} classNames="wow" timeout={500}>
        <TabContent myTab={myTab} mySwitchChg={mySwitchChg}/>
      </CSSTransition>

    </div> 
    )
  }

   function TabContent(props){

    useEffect(()=>{
      props.mySwitchChg(true);
    });

    if(props.myTab === 0){
      return <div>000</div>
    } else if(props.myTab === 1){
      return <div>111</div>
    } else if(props.myTab === 2){
      return <div>222</div>
    }

  } 

  function StockInfo(props){
    return (

      <p>stock : {props.mystock[props.id]}</p>

    )
  }

  function myStateToProps(state){
    //console.log("state : "+state);
    return{
        //ProductName : state[0].name
        state : state.reducer,
        alertState : state.reducerAlertCgh
    }
}

export default connect(myStateToProps)(Detail)

  //export default Detail;