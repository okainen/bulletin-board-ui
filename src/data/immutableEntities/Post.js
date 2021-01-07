import Immutable from 'immutable';
import {v1 as uuidv1} from 'uuid';

const Post = Immutable.Record({
  id: uuidv1(),
  title: '',
  content: '',
  modified: new Date()
});

export default Post;
