import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PostsApi from '../../data/api/PostsApi';
import { Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AddCircleRoundedIcon from '@material-ui/icons/addCircleRounded';
import NavBar from './navbar/NavBarContainer';
import PostItemContainer from './postItem/postItemContainer';
import AddPostDialog from './addPostDialog/addPostDialogContainer';
import { batch } from 'react-redux';
import FrontendRoutes from '../../data/constants/FrontendRoutes';


const useStyles = makeStyles(theme => ({
    postsGrid: {
        padding: theme.spacing(1),
        marginTop: '44px',
        '& h1': {
            fontSize: theme.text.fontSize.primary
        },
        '& a': {
            fontSize: theme.text.fontSize.secondary,
            padding: 25
        }
    },
    circleButton: {
        position: 'fixed',
        right: '25px',
        bottom: '25px',
        padding: 0,
        boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
        '&:hover': {
            boxShadow: 'none'
        }
    },
    circleIcon: {
        borderRadius: '50%',
        backgroundColor: 'black',
        color: 'yellow',
        width: '50px',
        height: '50px',
        '&:hover': {
            backgroundColor: 'green',
            color: 'white',
            borderWidth: '10px'
        }
    }
}));

const Board = ({postsWereLoaded, posts, loadPosts, addPost, signOut}) => {
    const classes = useStyles();

    const history = useHistory();
    useEffect(() => {
        if (!postsWereLoaded) {
            PostsApi.getAll()
                .then(res => {
                    batch(() => {
                        res.data.posts.forEach(post => addPost(post));
                        loadPosts();
                    });
                })
                .catch(err => {
                    const status = err.response.status;
                    if (status === 401) {
                        localStorage.setItem('isLoggedIn', 'false');
                        signOut();
                        history.push(FrontendRoutes.SIGN_UP);
                    } else console.error(err);
                });
        }
    });

    const [openAddPost, setOpenAddPost] = useState(false);

    return (
        <Grid container
              alignItems='flex-start'
              alignContent='flex-start'
              wrap='wrap'
              justify='flex-start'
        >
            <NavBar style={{marginLeft: 0}}/>
            <Grid container
                  alignItems='flex-start'
                  alignContent='flex-start'
                  wrap='wrap'
                  justify='flex-start'
                  className={classes.postsGrid}
            >
                {posts.map((post, key) => (
                    <PostItemContainer
                        key={key}
                        post={post}
                    />
                ))}
                <IconButton className={classes.circleButton} onClick={_ => setOpenAddPost(true)}>
                    <AddCircleRoundedIcon className={classes.circleIcon}/>
                </IconButton>
                <AddPostDialog open={openAddPost} setOpen={setOpenAddPost}/>
            </Grid>
        </Grid>
    );
};

export default Board;
