import { useEffect, useState } from 'react';
import './App.css';
import { Review } from './components/review';
import { ReviewInput } from './components/review-input';

function App() {
  const [comments, setComments] = useState([])
  const [limit, setLimit] = useState(5)
  useEffect(() => {
    fetch(`https://dummyjson.com/comments?limit=${limit}&skip=0`).then((data) => data.json()).then((com) => setComments(com.comments))
  }, [limit])

  const onHandleSendReview = (newComment) => {
    setComments((prev) => [newComment, ...prev])
    localStorage.setItem('text', '')
    localStorage.setItem('name', '')
  }

  const onHandleDeleteReview = (deleteId) => {
    setComments((prev) => prev.filter(({id}) => id !== deleteId ))
  }

  const onChangeLimit = (e) => setLimit(e.target.value)

  return (
    <div className="App">
      <div className='container'>
        <select className="select" onChange={onChangeLimit}>
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='20'>20</option>
          <option value='50'>50</option>
        </select>
        <div className='list_wrapper'>
          <ul className='list_review'>
            {comments?.map(({user, body, id}) => 
              <Review 
                user={user} 
                comment={body} 
                id={id}
                onDelete={onHandleDeleteReview}
              />
            )}
          </ul>
        </div>
        <ReviewInput onHandleSendReview={onHandleSendReview}/>
      </div>
    </div>
  );
}

export default App;
