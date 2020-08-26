import React, {useState} from 'react';
import {Grid, IconButton} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles';
import AddCircleRoundedIcon from '@material-ui/icons/addCircleRounded';
import PostItemContainer from './postItem/postItemContainer';
import AddPostDialog from './addPostDialog/addPostDialogContainer';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
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

const Board = ({posts}) => {
    const classes = useStyles();

    const [openAddPost, setOpenAddPost] = useState(false);

    return (
        <Grid container
              alignItems='flex-start'
              alignContent='flex-start'
              wrap='wrap'
              justify='flex-start'
              className={classes.root}
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
    );
};

export default Board;
