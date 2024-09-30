let skip = 0; // To simulate new comments, we will increment this with each request

// Function to fetch and display comments
async function fetchComments(skipValue = 0) {
  const response = await fetch(`https://dummyjson.com/comments?limit=5&skip=${skipValue}`);
  const data = await response.json();
  return data.comments;
}

// Function to render comments
function renderComments(comments) {
  const commentsParent = document.getElementById('comments-parent');

  comments.forEach((comment) => {
    // Create a new comment item
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment-item');
    commentElement.innerHTML = `
      <p>${comment.body}</p>
    `;

    // Append the comment to the parent container
    commentsParent.appendChild(commentElement);

    // Highlight new comments for the first 10 seconds
    commentElement.classList.add('new-comment');
    setTimeout(() => {
      commentElement.classList.remove('new-comment');
    }, 10000); // Remove highlight after 10 seconds
  });
}

// Function to check for new comments every 10 seconds
function checkForNewComments() {
  setInterval(async () => {
    skip += 5; // Increment skip to simulate new comments
    const newComments = await fetchComments(skip);
    renderComments(newComments);
  }, 10000); // Check every 10 seconds
}

// Initial load: Fetch and display the first 5 comments
async function loadInitialComments() {
  const initialComments = await fetchComments();
  renderComments(initialComments);
}

// Initialize the comment system
document.addEventListener('DOMContentLoaded', () => {
  loadInitialComments(); // Load first 5 comments when the page loads
  checkForNewComments(); // Start checking for new comments every 10 seconds
});
