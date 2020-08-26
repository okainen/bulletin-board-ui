import React, {useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from '@material-ui/core';
import Post from '../../../data/immutableEntities/Post';


const AddPostDialog = ({open, setOpen, addPost}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [contentFieldFocused, setContentFieldFocused] = useState(false);

    const handleClose = () => {
        setOpen(false);
        setTitle('');
        setContent('');
    };

    const isEmpty = (title === '' || content === '');

    const handleAdd = () => {
        const newPost = new Post({
            title,
            content
        })
        addPost(newPost);
        handleClose();
    };

    return (
        <Dialog
            open={open}
            maxWidth='md'
            fullWidth={true}
            PaperProps={{
                style: {
                    backgroundColor: '#fff5b5'
                },
            }}
            onKeyPress={e => {
                if (!(contentFieldFocused || isEmpty) && e.key === 'Enter') handleAdd();
            }}
        >
            <DialogTitle>Add post</DialogTitle>
            <DialogContent>
                <TextField
                    placeholder='Title...'
                    fullWidth
                    autoFocus
                    onChange={e => setTitle(e.target.value)}
                />
                <TextField
                    placeholder='Content...'
                    fullWidth
                    multiline
                    rows={10}
                    onChange={e => setContent(e.target.value)}
                    onFocus={_ => setContentFieldFocused(true)}
                    onBlur={_ => setContentFieldFocused(false)}
                />
            </DialogContent>
            <DialogActions>
                {isEmpty
                    ? <Button disabled onClick={handleAdd}>Add</Button>
                    : <Button onClick={handleAdd}>Add</Button>
                }
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddPostDialog;
