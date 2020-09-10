import React,{useState,useEffect} from 'react'
import axios from 'axios';
import spinner from "../spinner.png";
import {Link} from 'react-router-dom';
import styled from 'styled-components';
const Article = (props) => {
const [title,setTitle]=useState('')
const [article,setArticle]=useState('')
const [authorname,setAuthorName]=useState('')

useEffect(() => {
    axios.get(`http://localhost:8080/articles/${props.match.params.id}`)
    .then(res =>[
        setTitle(res.data.title),
        setArticle(res.data.article),
        setAuthorName(res.data.authorname)
    ])
    .catch(error => console.log(error));
}, [props]);

    return ( 
    <MainContainer>
        {!title || !article || !authorname ? (<img src={spinner} alt="loading..."/>
       ):(
           <>
        <h2>{title}</h2>
        <p>{article}</p>
        <p className="badge badge-secondary">{authorname}</p> 
        <br/>
        <Link to="/" type="submit" className="btn btn-primary">Back To Home </Link>
        </> 
       )}
    </MainContainer>
    ) ; 
};
 
export default Article;


const MainContainer = styled.div`
margin : 6rem auto;
padding: 3rem auto;

h2{
    text-align : center;
    font-weight : 900;
    color : var(--dark-green);
}

img{
    display : block;
    margin : auto; 
}
.btn-primary{
    background:var(--dark-green);
    border:none;
    &:hover{
        background:var(--light-green);
    }}

`;
