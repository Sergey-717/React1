import './Posts-list.css';
import { Card, Timeline } from 'antd';
import { postData } from '../../posts';


function PostsList() {
  return (
    <div className="Posts-list">
      {
        postData.map(post => {
          return(
           <Card className='post-card' key={post._id} 
           title={<a className='post-card__title' href='/'>{post.title}</a>}>
             <div className='avatar-mail'>
            <img className='post-avatar' src={post.author.avatar}/>
             <p>{post.author.email}</p>
             </div>
            <p>{post.text}</p>

            <div className='tags'>
            <div>Tags:</div>
            
            {
            post.tags.map(tag => {
              return(
                <div className='tag'>{tag}</div>)
            })
            }
            </div>
            
            <Timeline>
    <Timeline.Item color="blue">{post.created_at}</Timeline.Item>
    <Timeline.Item color="green">{post.updated_at}</Timeline.Item>
    </Timeline>
            

          </Card>
        )})
      }


   
  
    </div>
  );
}

export default PostsList;
