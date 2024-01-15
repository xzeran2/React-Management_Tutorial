import React,{Component} from 'react';
import Customer from './components/Customer';
import './App.css';


const customers = [
{ 
  'id' : 1,
  'image' : 'imageSample',
  'name' : '박호철',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '군무원'
},
{ 
  'id' : 2,
  'image' : 'imageSample',
  'name' : '여동규',
  'birthday' : '201222',
  'gender' : '남자',
  'job' : '장교'
},
{ 
  'id' : 3,
  'image' : 'imageSample',
  'name' : '김선혁',
  'birthday' : '121231',
  'gender' : '남자',
  'job' : '부사관'
}
]

class App extends Component{
  render(){
    return(
      <div>
        {customers.map(c=>{ return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>)})}
      </div>
    )
  };
}

export default App;
