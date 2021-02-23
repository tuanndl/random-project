import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
  },
  link: {
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  active: {
    color: 'green',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const router = useRouter();

  const funcActiveClass = (pathname) => {
    console.log();
    switch (true) {
      case router.pathname === pathname:
        return classes.active;
      default:
        return '';
    }
  };

  return (
    <div className={classes.root}>
      <AppBar color='default' position='static'>
        <Toolbar>
          <CodeIcon className={classes.menuButton} />

          <Typography variant='h6' className={classes.title}>
            TOOLS nhanh
          </Typography>

          <Button color='inherit'>
            <Link href='/cham-ngon'>
              <span className={classNames(classes.link, funcActiveClass('/cham-ngon'))}>
                Châm ngôn
              </span>
            </Link>
          </Button>

          <Button color='inherit'>
            <Link href='/wheel-name'>
              <span className={classNames(classes.link, funcActiveClass('/wheel-name'))}>
                Vòng Quay
              </span>
            </Link>
          </Button>

          <Button color='inherit'>
            <Link href='/'>
              <span className={classNames(classes.link, funcActiveClass('/'))}>Quay Số</span>
            </Link>
          </Button>

          <Button color='inherit' className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
