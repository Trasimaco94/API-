/*
// CODICE CON FETCH E .THEN

document.addEventListener('DOMContentLoaded', function () {
    // URL dell'API di JSONPlaceholder per ottenere i commenti
    const apiUrl = 'https://jsonplaceholder.typicode.com/comments';

    // Funzione per organizzare i commenti per ogni post
    function organizeCommentsByPost(comments) {
        const organizedComments = {};

        comments.forEach(comment => {
            const postId = comment.postId;

            if (!organizedComments[postId]) {
                organizedComments[postId] = [];
            }

            organizedComments[postId].push(comment);
        });

        return organizedComments;
    }

    // Funzione per ottenere i commenti dall'API utilizzando fetch e .then
    function getComments() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const organizedComments = organizeCommentsByPost(data);
                displayComments(organizedComments);
            })
            .catch(error => {
                console.error('Errore durante il recupero dei commenti:', error);
            });
    }

    // Funzione per visualizzare i commenti nella pagina HTML
    function displayComments(organizedComments) {
        const commentsList = document.getElementById('commentsList');

        for (const postId in organizedComments) {
            const postComments = organizedComments[postId];

            const postContainer = document.createElement('div');
            const postTitle = document.createElement('h2');
            postTitle.textContent = `Post #${postId}`;
            postContainer.appendChild(postTitle);

            const postCommentsList = document.createElement('ul');
            postComments.forEach(comment => {
                const listItem = document.createElement('li');
                listItem.textContent = `${comment.name}: ${comment.body}`;
                postCommentsList.appendChild(listItem);
            });

            postContainer.appendChild(postCommentsList);
            commentsList.appendChild(postContainer);
        }
    }

    // Chiama la funzione per ottenere e visualizzare i commenti
    getComments();
});
*/

// CODICE CON ASYNC/AWAIT

document.addEventListener('DOMContentLoaded', function () {
    // URL dell'API di JSONPlaceholder per ottenere i commenti
    const apiUrl = 'https://jsonplaceholder.typicode.com/comments';

    // Funzione asincrona per ottenere i commenti dall'API
    async function getComments() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            displayComments(data);
        } catch (error) {
            console.error('Errore durante il recupero dei commenti:', error);
        }
    }

    // Funzione per organizzare i commenti per ogni post
    function organizeCommentsByPost(comments) {
        const organizedComments = {};

        comments.forEach(comment => {
            const postId = comment.postId;

            if (!organizedComments[postId]) {
                organizedComments[postId] = [];
            }

            organizedComments[postId].push(comment);
        });

        return organizedComments;
    }

    // Funzione per visualizzare i commenti nella pagina HTML
    function displayComments(comments) {
        const organizedComments = organizeCommentsByPost(comments);
        const commentsList = document.getElementById('commentsList');

        for (const postId in organizedComments) {
            const postComments = organizedComments[postId];

            const postContainer = document.createElement('div');
            const postTitle = document.createElement('h2');
            postTitle.textContent = `Post #${postId}`;
            postContainer.appendChild(postTitle);

            const postCommentsList = document.createElement('ul');
            postComments.forEach(comment => {
                const listItem = document.createElement('li');
                listItem.textContent = `${comment.name}: ${comment.body}`;
                postCommentsList.appendChild(listItem);
            });

            postContainer.appendChild(postCommentsList);
            commentsList.appendChild(postContainer);
        }
    }

    // Chiama la funzione asincrona per ottenere e visualizzare i commenti
    getComments();
}); 
