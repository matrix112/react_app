/* eslint-disable */

import React, { useState, useContext, lazy, Suspense } from 'react';
import './App.css';
import { Navbar,Container,Nav,NavDropdown,Jumbotron,Button } from 'react-bootstrap';
import Data from './data.js';
import Detail from './Detail.js';
import axios from 'axios';

//import Cart from './Cart.js';
let Cart = lazy(()=>{ return import('./Cart.js') });

export let stockContxt = React.createContext();

import { Link, Route, Switch } from 'react-router-dom';

function App() {

  let [shoes, shoesChange] = useState(Data);
  let [mystock, stockChg] = useState([10,11,12]);
  const [myid, myidCgh] = useState(0); 

  function chgstoctArr(i){
    var size = mystock.length;
    //console.log(" mystock size : "+size+", i : "+i);
    var newstoctArr = [...mystock];
    newstoctArr[i]=0;
    stockChg(newstoctArr);
    return mystock
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link > <Link to="/">Home</Link> </Nav.Link>
            <Nav.Link > <Link to="/detail">Detail</Link> </Nav.Link> */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>

      
    <Switch>

      <Route exact path="/">
        <Jumbotron className="background">
          <h1>20% Season Off</h1>
          <p>This is a simple hero unit. We knitted a unique one-piece upper made from FSC® Certified eucalyptus trees for a perfect fit that’s flexible, lightweight, and breathable in every step.</p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>

        <div className="container">

          <stockContxt.Provider value={mystock}>

          <div className="row">
            {
              shoes.map((a,i)=>{
                var arr = [...mystock];
                console.log("i : "+i+", a.id : "+a.id+", a.title : "+a.title);
                arr[i] === undefined?chgstoctArr(i):arr[i];
                //stockChg(arr);
                return  <Card shoes={a} i={i} key={i} myid={myid} myidCgh={myidCgh}/* Card shoes=shoes[i] */ /> 
                
              })
            }
          </div>

          </stockContxt.Provider>

          <button className="btn btn-primary" onClick={()=>{

            //axios.post('server url', {id : 'content id', content: 'adding content'}).then().catch();

            //fatch('https://codingapple1.github.io/shop/data2.json') //Javascript
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((rusult)=>{
              console.log(rusult.data);
              
              //var copyShoe = [...shoes];
              //copyShoe.push(rusult.data);
              shoesChange([...shoes, ...rusult.data]);
            })
            .catch(()=>{
              console.log('Fail getting data..');
            }) //in case of fail get data..

          }}>More..</button>

        </div>
      </Route>
      
      <Route path="/detail/:id">
        <stockContxt.Provider value={mystock}>
          <Detail shoes={shoes} mystock={mystock} stockChg={stockChg} myid={myid} myidCgh={myidCgh}/>
        </stockContxt.Provider>
      </Route>

      <Route path="/cart">
        <Suspense fallback={<div>Loading..</div>}>
        <Cart></Cart>
        </Suspense>
      </Route>

      {/* <Route path="/:id">
        <div>Show something..</div>
      </Route> */}

    </Switch>


    </div>
  );
}


function Card(props){

  let stock = useContext(stockContxt);
  //let dLink = "/detail/"+[props.i];
  let dLink = "/detail/"+[props.shoes.id];

  return(
    <div className="col-md-4">
      <Link to = {dLink}>
        <img src={'https://codingapple1.github.io/shop/shoes'+ (props.shoes.id+1) +'.jpg'} width="100%"  
        onClick={()=>{ props.myidCgh(props.i) }}/>
      </Link>
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } & { props.shoes.price }</p>
      {/* stock[props.i] */}
      { <MyStock i={props.i}></MyStock> }
    </div>
  )
}

function MyStock(props){

  let stockCtxt = useContext(stockContxt);
  var arrstock = [...stockCtxt];

  return <p>stock : { 
    stockCtxt[props.i] === null
    ?"0"
    :stockCtxt[props.i]
  }</p>

}

export default App;
