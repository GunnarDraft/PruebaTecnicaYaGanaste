import styled from "styled-components";

const BankListContent = styled.div` 
    display:flex;
    flex-wrap:nowrap;
    flex-direction:column; 
    align-items:center;
    margin:16px;
`
const TitleContent = styled.div`
    backdrop-filter:blur(12px)  brightness(85%); 
    background-color:#00a4e040; 
    border-radius: 16px;
    padding:0;
    margin:8px 0;
    width:100%;
    max-width:1200px;
    text-align:center;
    box-shadow: #383a3a5a 1px 1px 4px;
`
const H1 = styled.h1`
    font-family:Arial, Helvetica, sans-serif;
    margin:16px ;
    font-size:1.9rem;
    font-weight:700;
    color:#f0f4f5;
    text-shadow:#393a3ac1 1px 1px 2px;
`
const Ul = styled.ul` 
    backdrop-filter:blur(14px)  brightness(88%); 
    background-color:#00a4e040; 
    border-radius: 16px;
    list-style-type: none;
    padding:0;
    margin:0;
    max-width:1200px;
    width:100%;
    min-width:300px; 
    max-height:2000px;
    box-shadow: #383a3a5a 1px 1px 4px;
`
const Li = styled.li`
    backdrop-filter:blur(10px); 
    background-color:#ffffffc3; 
    margin:16px;
    padding:16px;
    border-radius:16px;
    overflow:hidden;
    box-shadow: #5a5a5a5a 1px 1px 4px;
    p{
    font-family:Arial, Helvetica, sans-serif;
    margin:16px;
    font-size:1.1rem;
    font-weight:500;
    b{
    font-weight:600;
    }
    };
    a{ 
    max-width:max-content;
    overflow:scroll;
    text-overflow:clip;
}
  
`

export { H1, Ul, Li, BankListContent, TitleContent }