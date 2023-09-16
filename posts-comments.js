const api = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(res => res.json())
                .then(comments => showPost(posts, comments))
        })
}
const showPost = (posts, comments) => {
    let postingId = 0;
    const ul = document.querySelector('#listOfPosts');
    let commentId = 0;
    posts.forEach(postId => {
        comments.forEach(comment => {
            userid = comment.postId;
        })
        const li = document.createElement('li');
        li.innerHTML = `<div>
        <p>userId:${postId.userId}
        <p class="postClass">Post from from userId ${postId.userId} ${postId.body}</p>
        </div>
        <div class="commentClass" id="${postId.id}">
        <p  >Name:${comments[postingId].name} </br>  Post:${comments[postingId].body} comments:${comments[postId.id].postId} </br> <span id="seeComments" onclick="seeComments(${postId.id})"> click to see more....</span> </p>
        </div>`;
        commentId = postId.id;
        postingId += 5;
        ul.appendChild(li);
    });
}
const seeComments = (postId) => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => showCommentUi(data, postId))
}
const showCommentUi = (commentsArray, postId) => {
    const comments = commentsArray.filter(comment => comment.postId === postId);
    const particularPosId = document.getElementById(postId);
    particularPosId.textContent = '';
    comments.forEach(comment => {
        const p = document.createElement('p');
        p.innerHTML = `<p class="particularPosterName">Name:${comment.name}</p>
       <p class="particularPost">Post:${comment.body}</p>
       `;
        particularPosId.appendChild(p);
    })


}



