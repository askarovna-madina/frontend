const MyPost=document.getElementById('every-post');
const PostAdd=document.querySelector('.create-post')
const httpRec=new XMLHttpRequest();
const ComRec= new XMLHttpRequest();
httpRec.open('GET','https://jsonplaceholder.typicode.com/posts');
ComRec.open('GET', 'https://jsonplaceholder.typicode.com/comments');

httpRec.responseType='json';
ComRec.responseType='json';
console.log(httpRec)
httpRec.onload = () => {
    const postList=httpRec.response;
    for (const post of postList){
        const postEl=document.importNode(MyPost.content, true);
        postEl.querySelector('h3').textContent=post.title.toUpperCase()
        postEl.querySelector('p').textContent=post.body;
        PostAdd.append(postEl)
    }
}
httpRec.send();
ComRec.send()