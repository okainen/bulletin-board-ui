import React, {useEffect, useState} from 'react';
import PostsApi from '../../../data/api/PostsApi';
import {
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography
} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {
  CheckCircle as CheckCircleIcon,
  Delete as DeleteIcon,
  Edit as EditIcon
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    height: 'auto',
    margin: `0 ${theme.spacing(1)}px ${theme.spacing(1)}px 0`,
    '&:hover': {
      boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)'
    }
  },
  grid: {
    padding: 10,
    overflowWrap: 'anywhere'
  },
  title: {
    marginBottom: 10,
    fontSize: 20
  },
  content: {
    maxHeight: 350,
    overflowY: 'auto',
    whiteSpace: 'pre-line'
  },
  iconButton: {
    padding: 0,
    height: 'auto',
    width: 'auto',
    '&:hover': {
      color: 'black'
    }
  }
}));

const PostItem = ({post, editPost, deletePost}) => {
  const classes = useStyles();

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [edit, setEdit] = useState(false);

  const handleEdit = _ => {
    const updatedPost = {
      title,
      content
    };
    PostsApi.update({id: post.id, post: updatedPost})
      .then(res => {
        editPost(res.data);
        setEdit(false);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleDelete = _ => {
    PostsApi.delete(post.id)
      .then(res => {
        deletePost(post.id);
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(
    _ => {
      setTitle(post.title);
      setContent(post.content);
    },
    [post]
  );

  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Paper className={classes.root}>
        <Grid container className={classes.grid} direction='column'>
          {edit ? (
            <TextField
              className={classes.title}
              value={title}
              inputProps={{maxLength: 64}}
              onChange={e => setTitle(e.target.value)}
            />
          ) : (
            <Typography className={classes.title}>{title}</Typography>
          )}
          {edit ? (
            <TextField
              className={classes.content}
              value={content}
              multiline
              onChange={e => setContent(e.target.value)}
            />
          ) : (
            <Typography className={classes.content}>{content}</Typography>
          )}
          <Grid container justify='space-between' style={{paddingTop: 10}}>
            <Grid container style={{width: 'auto'}}>
              {edit ? (
                <IconButton
                  className={classes.iconButton}
                  style={{marginRight: 12}}
                  onClick={handleEdit}
                >
                  <CheckCircleIcon />
                </IconButton>
              ) : (
                <IconButton
                  className={classes.iconButton}
                  style={{marginRight: 12}}
                  onClick={_ => setEdit(true)}
                >
                  <EditIcon />
                </IconButton>
              )}
              <IconButton className={classes.iconButton} onClick={handleDelete}>
                <DeleteIcon />
              </IconButton>
            </Grid>
            <Typography style={{fontSize: 14}}>
              {new Date(post.modified).toLocaleString('uk')}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default PostItem;
