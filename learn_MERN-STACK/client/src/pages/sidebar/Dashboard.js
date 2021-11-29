import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import './Sidebar.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        menuRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}));

function Profile() {
    const classes = useStyles();
    const [anchorE1, setAnchorE1] = React.useState(null);
    const open = Boolean(anchorE1);
    const user = JSON.parse(localStorage.getItem('user'));

    const handleMenu = (event) => {
        setAnchorE1(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorE1(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        window.location.href = '/';
    };

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title}>
                        Dashboard
                    </Typography>
                    <div>
                        <IconButton onClick={handleMenu} color='inherit'>
                            <Avatar src={user.avatar} />
                            {/* <Typography src={user.username}/> */}
                        </IconButton>
                        <Menu id='menu-appbar'
                            anchorEl={anchorE1}
                            open={open}
                            onClose={handleClose}>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            {/* <Card className={classes.root} variant='outlined'>
                <CardContent>
                    <Avatar src={user.avatar} className={classes.large} />
                    <Typography variant='h5'>
                        Welcome {user.fname} {user.lname}
                    </Typography>
                </CardContent> */}
            {/* </Card> */}
            <div className="nav" id="navbar">
            <nav className="nav__container">
                <div>
                    <a href="/dashboard" className="nav__link nav__logo" style={{textDecoration: 'none'}}>
                        <i className='bx bxs-disc nav__icon' ></i>
                        <span className="nav__logo-name">Formulatrix</span>
                    </a>

                    <div className="nav__list">
                        <div className="nav__items">
                            <h3 className="nav__subtitle">Home</h3>

                            <a href="/dashboard" className="nav__link" style={{textDecoration: 'none'}}>
                                <i className='bx bx-home nav__icon' ></i>
                                <span className="nav__name">Dashboard</span>
                            </a>
                        </div>

                        <div className="nav__items">
                            <h3 className="nav__subtitle">Menu</h3>

                            <a href="#" className="nav__link" style={{textDecoration: 'none'}}>
                                <i className='bx bx-notepad nav__icon' ></i>
                                <span className="nav__name">Request Mold Form</span>
                            </a>

                            <a href="#" className="nav__link" style={{textDecoration: 'none'}}>
                                <i className='bx bx-notepad nav__icon' ></i>
                                <span className="nav__name">Product Specification Form</span>
                            </a>

                            <a href="#" className="nav__link" style={{textDecoration: 'none'}}>
                                <i className='bx bx-notepad nav__icon' ></i>
                                <span className="nav__name">DFMEA Form</span>
                            </a>

                            <a href="#" className="nav__link" style={{textDecoration: 'none'}}>
                                <i className='bx bx-notepad nav__icon' ></i>
                                <span className="nav__name">BOM Form</span>
                            </a>
                        </div>
                        <div className='nav-items'>
                            <h3 className="nav__subtitle">Report</h3>

                            <a href="#" className="nav__link" style={{textDecoration: 'none'}}>
                                <i className='bx bx-food-menu nav__icon' ></i>
                                <span className="nav__name">Annual Report</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        {/* <!--========== CONTENTS ==========--> */}
        <main>
            <section>
                <p style={{color: 'white'}}>Add New User</p>
                {/* <!--<br/>--> */}
                <div className="card card-shadow text-center">
                    <div className="card-body">
                        <form>
                            <div className="card-text">
                                <div className="form-group row">
                                    <i className="bx bx-user-circle"></i>
                                    <input className="form-control" type="text" name="password" placeholder="username"/>
                                </div>
                                <div className="form-group row">
                                    <i className="bx bx-key"></i>
                                    <input className="form-control" type="password" name="password" placeholder="password"/>
                                </div>
                                <div className="form-group row">
                                    <i className="bx bx-user-pin"></i>
                                    <input className="form-control" type="text" name="firstName" placeholder="first name"/>
                                </div>
                                <div className="form-group row">
                                    <i className="bx bx-user-pin"></i>
                                    <input className="form-control" type="text" name="lastName" placeholder="last name"/>
                                </div>
                                <input hidden="" name="role" />
                                <br/>
                                {/* <!--<div class="card-footer">--> */}
                                <div className="form-group row text-center">
                                    <div className="col">
                                    <button style={{width: 200+'px'}} type="submit" className="btn btn-success" value="insert-value-item">
                                        Add User
                                    </button>
                                    </div>
                                    <div className="col">
                                    <button style={{width: 200+'px'}} type="reset" className="btn btn-secondary" value="insert-value-item">
                                        Clear
                                    </button>
                                    </div>
                                </div>
                                {/* <!--</div>--> */}
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>        
        </div>
    );
};

export default Profile;
