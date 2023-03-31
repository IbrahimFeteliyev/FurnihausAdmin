import * as React from 'react';
import './App.css';
import MyRouter from './router/MyRouter';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAction } from './redux/Actions/UserAction';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

  

function App() {
  const { userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    if (userInfo.status === 200) {
      dispatch(logoutUserAction());
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Evvelce daxil olmalisiniz!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    }
  };

  const addProduct = () => {
    if (userInfo.status === 200) {
      navigate("/product");
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Evvelce daxil olmalisiniz!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    }
  };

  const addCategory = () => {
    if (userInfo.status === 200) {
      navigate("/category");
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Evvelce daxil olmalisiniz!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    }
  };

  const addBlog = () => {
    if (userInfo.status === 200) {
      navigate("/blog");
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Evvelce daxil olmalisiniz!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    }
  };

  const addOrder = () => {
    if (userInfo.status === 200) {
      navigate("/order");
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Evvelce daxil olmalisiniz!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    }
  };


  const addDashboard = () => {
    if (userInfo.status === 200) {
      navigate("/dashboard");
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Evvelce daxil olmalisiniz!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    }
  };

  

  const addSlider = () => {
    if (userInfo.status === 200) {
      navigate("/slider");
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Evvelce daxil olmalisiniz!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    }
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            Admin Panel
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
        <Typography>
          <MyRouter />
        </Typography>
      </Main>
     
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          
        </DrawerHeader>
        <Divider />
        <List>
        <ul class="sidebar-ul">
        <li className="dashboard" onClick={() => addDashboard()}>
          <span>Dashboard</span>
        </li>
        <li className="product" onClick={() => addProduct()}>
          <span>Product</span>
        </li>
        <li className="category" onClick={() => addCategory()}>
          <span>Category</span>
        </li>
        <li className="blog" onClick={() => addBlog()}>
          <span>Blog</span>
        </li>
        <li className="order" onClick={() => addOrder()}>
          <span>Order</span>
        </li>

        <li className="slider" onClick={() => addSlider()}>
          <span>Slider</span>
        </li>


        {userInfo.status !== 200 ? (
          <></>
        ) : (
          <li className="logout" onClick={() => logOut()}>
            <span>Log Out</span>
          </li>
        )}
      </ul>
        </List>
        
      </Drawer>
    </Box>
  );
}

export default App;