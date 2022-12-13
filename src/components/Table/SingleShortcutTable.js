import React ,{useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import ENUS from '../Keyboards/ENUS'

import Map from '../Keyboards/Mapping'
import {ProgressBar} from '@adobe/react-spectrum'



import Chip from '@material-ui/core/Chip';
import {
  ActionButton,
  Content,
  Dialog,
  DialogTrigger,
  Divider,
  Heading,
} from '@adobe/react-spectrum';


const columns = [
  { id: 'shortcut', label: 'Shortcut', minWidth: 170 },
  { id: 'locale_code', label: 'Locale Code', minWidth: 100 },
  { id: 'locale_description', label: 'Keyboard Layout', minWidth: 100 },
  { id: 'status', label: 'Status', minWidth: 170},
  { id: 'comment', label: 'Comment', minWidth: 170}
  
];






const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 500,
  },
});

export default function SingleShortcutTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows,setRows] = React.useState([]);

  useEffect(() => {
    console.log("in table")
    console.log(props.data)
    setRows(props.data)
    return () => {
      
    }
  }, [rows])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  



  

  return (
    
    props.data !== [] ? 
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            
            {
            
            rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    const locale = row["locale_code"];
                    const currentShortcut = row["shortcut"];
                    return (
                      value === "Pass" ? 
                      <TableCell key={column.id} align={column.align}     >
                       <Chip label={value} style={{background:'#4bbf73',color:'white',fontWeight:'bold'}}></Chip>
                       
                    </TableCell>
                    :
                      value === "Warning" ?
                      <TableCell key={column.id} align={column.align}    >
                        <DialogTrigger isDismissable>
                        <ActionButton isQuiet="true"> <Chip label={value} style={{background:'#e5a54b',color:'white',fontWeight:'bold'}} ></Chip></ActionButton>
                            <Dialog>
                              <Heading>Keyboard Details</Heading>
                              <Divider />
                              <Content>
                                <h3>en-US</h3>
                                <template></template>
                                {/* <img src={key1} style={{width:'700px'}}></img> */}
                                <ENUS shortcut={currentShortcut}></ENUS>
                                <h3>{locale}</h3>
                                <Map code={locale}></Map>
                             {/* <img src={key2} style={{width:'700px'}}></img>*/}
                             </Content> 
                            </Dialog>
                        </DialogTrigger>
                       
                      </TableCell> :
                      value === "Fail" ?
                      <TableCell key={column.id} align={column.align}    >
                        <DialogTrigger isDismissable>
                        <ActionButton isQuiet="true"> <Chip label={value} style={{background:'#c9252d',color:'white',fontWeight:'bold'}} ></Chip></ActionButton>
                            <Dialog>
                              <Heading>Keyboard Details</Heading>
                              <Divider />
                              <Content>
                                <h3>en-US</h3>
                                <template></template>
                                {/* <img src={key1} style={{width:'700px'}}></img> */}
                                <ENUS shortcut={currentShortcut}></ENUS>
                                <h3>{locale}</h3>
                                <Map code={locale}></Map>
                             {/* <img src={key2} style={{width:'700px'}}></img>*/}
                             </Content> 
                            </Dialog>
                        </DialogTrigger>
                       
                      </TableCell> :
                      <TableCell key={column.id} align={column.align}    >
                     {value} 
                    </TableCell>

                    );
                  })}
                </TableRow>
              );
            })
          }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.clicked === 'true' ? rows.length : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    
    : null
  );
}
