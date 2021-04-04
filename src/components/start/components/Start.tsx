import React, {ReactElement, useEffect, useState} from 'react';
import {makeStyles, MuiThemeProvider} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import {
  Backdrop,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  CircularProgress, createMuiTheme, Grid, GridList, GridListTile, ListSubheader,
  TableCell,
  TextField
} from '@material-ui/core';
import {StartProps} from './Start.props';
import {MarketItem} from '../actions/Start.actions';
import Status from "../../../core/Status";
import { sizing } from '@material-ui/system';
import {blueGrey, green, purple, white} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: blueGrey[500],
    },
    secondary: {
      light: '#111111',
      main: green[500],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  gridRoot: {
    flexGrow: 1,
  },
  root: {
    marginBottom: 10,
  },
  searchBar: {
    padding: '10px',
  },
  appBar: {
    backgroundColor: '#2222',
  },
  menuButton: {},
  table: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  title: {
    color: 'white',
  },
  t: {
    marginRight: theme.spacing(2),
  },
  cardRoot: {
    maxWidth: 345,
    marginTop: '15px',
    width: '100%',
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  textFieldInput: {
    color: 'white'
  },
  textFieldRoot: {
    color: "white"
  },
  textFieldFocused: {
    color: "orange"
  }
}));

// eslint-disable-next-line import/prefer-default-export
export const Start = (props: StartProps): ReactElement => {
  const styles = useStyles();

  const [query, setQuery] = useState('');

  useEffect(() => {
    props.getItems('');
  }, []);

  const keyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.keyCode === 13) {
      props.setQuery(event.target.value)
    }
  };

  const renderSearchBar = () => {
    return (
      <div className={styles.searchBar}>
        <TextField
          id="outlined-basic"
          label="Suche nach einem Item"
          variant="filled"
          style={{flex: 1, width: '100%'}}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => keyPress(event)}
        />
      </div>
    );
  };

  const loading = () => {
    return (
      <Backdrop className={styles.backdrop} open={props.status === Status.BUSY}>
        <CircularProgress color="inherit" />
      </Backdrop>
    )
  }

  const shouldSellToTrader = (item: MarketItem) => {
    if(item.avg24hPrice <= item.traderPrice && item.avg7daysPrice <= item.traderPrice) {
      return (
      <Chip
       style={{marginTop: '10px', backgroundColor: 'green'}} label={`Verkauf an ${item.traderName} für ${item.traderPrice} ${item.traderPriceCur}`}
      />
      )
    } else {
      return (
        <Chip

          style={{marginTop: '10px', backgroundColor: 'green'}}
          label={`Verkauf auf dem Flohmarkt für ~${item.avg24hPrice} ₽`}
      />
      )
    }
  }

  const renderTableCell = (item: MarketItem) => {
    return (
      <TableCell variant={"head"}>
      <Card className={styles.cardRoot} key={`${item.bsgId}`} raised={true} variant={'outlined'}>
        <CardHeader title={item.name} />
        <CardMedia className={styles.cardMedia} image={item.imgBig} key={item.img}/>
        <CardContent>
          <Typography variant={"h6"}>
            Preisinformationen
          </Typography>
          <Typography variant={"body2"}>
            {item.price} {item.traderPriceCur}
          </Typography>
          <Typography variant={"body2"}>
            ~24hrs: {item.avg24hPrice} {item.traderPriceCur}
          </Typography>
          <Typography variant={"body2"}>
            ~7days: {item.avg7daysPrice} {item.traderPriceCur}
          </Typography>
          {shouldSellToTrader(item)}
        </CardContent>
      </Card>
      </TableCell>
    )
  }

  const renderTable = () => {
    return (
      <Grid container spacing={2} className={styles.gridRoot} alignContent={"stretch"}>
        <Grid item xs={12}>
          <Grid container justify={"space-evenly"} spacing={2}>
            {props.searchResults.map((row: MarketItem) => (
              renderTableCell(row)
            ))}
          </Grid>
        </Grid>
      </Grid>
    )
    // return (
    //   <TableContainer component={Paper}>
    //     <Table className={styles.table} aria-label="simple table">
    //       <TableBody>
    //         {props.searchResults.map((row: MarketItem) => (
    //           renderTableCell(row)
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    // );
  };


  return (
    <MuiThemeProvider theme={theme}>

      <Container className={styles.table}>
      {loading()}
      {renderSearchBar()}
      {renderTable()}
      </Container>
    </MuiThemeProvider>

  );
};
