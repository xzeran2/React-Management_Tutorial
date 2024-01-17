import React,{Component} from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({
  root : {
    width : '100%',
    marginTop : theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table:{
    minWidth : 1080
  }
})

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
    const { classes} = this.props;
    return(
      <Paper className='classes.root'>
        <Table className='classes.table'>
          <TableBody>
            {customers.map(c=>{ return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>)})}
          </TableBody>
        </Table>      
      </Paper>
    )
  };
}

export default withStyles(styles)(App);
