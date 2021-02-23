import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

import './Header.scss';

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
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const router = useRouter();

  const funcActiveClass = (pathname) => {
    switch (true) {
      case router.pathname === pathname:
        return 'menu--active';
      default:
        return '';
    }
  };

  const onLogin = () => {
    alert('Tính năng đang phát triển');
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
            <Link href='/'>
              <span className={`menu--link ${funcActiveClass('/')}`}>Quay Số</span>
            </Link>
          </Button>

          <Button color='inherit'>
            <Link href='/cham-ngon'>
              <span className={`menu--link ${funcActiveClass('/cham-ngon')}`}>Châm ngôn</span>
            </Link>
          </Button>

          <Button color='inherit'>
            <Link href='/wheel-name'>
              <span className={`menu--link ${funcActiveClass('/wheel-name')}`}>Vòng Quay</span>
            </Link>
          </Button>

          <Button color='inherit' className='menu--link'>
            <span className={`menu--link`} onClick={onLogin}>
              Login
            </span>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
