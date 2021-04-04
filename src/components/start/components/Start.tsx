import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 10,
  },
  appBar: {
    backgroundColor: '#2222',
  },
  menuButton: {},
  table: {
    minWidth: 650,
  },
  title: {
    color: 'white',
  },
  t: {
    marginRight: theme.spacing(2),
  },
}));

// eslint-disable-next-line import/prefer-default-export
export const Start = (): ReactElement => {
  const styles = useStyles();

  const makeDummyData = (
    name: string,
    value: string
  ): { name: string; value: string } => {
    return { name, value };
  };

  const rows = [
    makeDummyData('gunpowder', '93.000'),
    makeDummyData('LEDX', '1.250.000'),
  ];

  const renderSearchBar = () => {
    return (
      <div className={styles.root}>
        <TextField
          id="outlined-basic"
          label="Suche nach einem Item"
          variant="outlined"
        />
      </div>
    );
  };

  const renderTable = () => {
    return (
      <TableContainer component={Paper}>
        <Table className={styles.table} aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <div className={styles.root}>
      <Container>
        <Typography variant="subtitle1" align="left" className={styles.title}>
          Hello Raider.
        </Typography>
      </Container>
      {renderSearchBar()}
      {renderTable()}
    </div>
  );
};
