import styled from "styled-components"

export const Logo = styled.div`
    background-image: url(https://res.cloudinary.com/david-b/image/upload/v1644270130/sprint2/reto1/bg-header-desktop_n6ybcq.svg);
    width: auto;
    height: 200px;
    background-color: hsl(180, 29%, 50%);
    @media only screen and (max-width: 600px) {
        background-image: url(https://res.cloudinary.com/david-b/image/upload/v1644270130/sprint2/reto1/bg-header-mobile_rapw0k.svg);
        width: auto;
        height: 200px;
        background-color: hsl(180, 29%, 50%);
    }
`
export const NameText = styled.h3`
    font-size: 14px;
    color:hsl(180, 29%, 50%);
    margin-left: 10px;
    margin-bottom: 16px;
    font-weight: 700;
`
export const DevText = styled.h4`
    font-size: 16px;
    color:hsl(180, 14%, 20%) ;
    margin-left: 10px;
    margin-bottom: 15px;
`
export const PtMted = styled.p `
    display:inline;
    color: hsl(180, 8%, 52%);
    font-size: 11px;
    margin: 0px 10px;
`
export const DisGrid = styled.div `
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: minmax(150px, auto);
    width: 75%;
    margin: 25px  auto;
    align-items: center;
    box-shadow:4px 15px 50px 1px hsl(180, 31%, 95%);
    background-color:rgba(255,255,255,255); 
    @media only screen and (max-width: 600px) {
        margin-bottom:40px;
        display: block;
        border-radius: 6px;
        box-shadow:4px 15px 22px 1px hsl(180, 8%, 52%);
        } 
`
export const Item1 = styled.div`
    grid-column: 2 / 4;
    grid-row: 1;
    background-color:rgba(255,255,255,255);
    margin-right: 20px;
    @media only screen and (max-width: 600px) {
        display: block;
        position: relative;
        top: -20px;
        height: 50%;
        margin-left: 15px;
    }   
`
export const Item2 = styled.div`
    grid-column: 4 / 7;
    grid-row: 1;
    text-align: end;
    margin-right: 40px;
    line-height: 20px;
    background-color:rgba(255,255,255,255);
    
    @media only screen and (max-width: 600px) {
        border-top:solid 1px hsl(180, 8%, 52%);
        width: 82%;
        display: block;
        margin:auto;
        text-align: start;
        padding-top: 15px;
    }
`
export const Dline = styled.div `
    display:inline;
    background-color: green;
    border: 1px solid yellow;

`
export const ImgCard = styled.img `
    display: block;
    margin: auto;
    padding-left: 10px;
    @media only screen and (max-width: 600px) {
        width: 21%;
        height: 21%;
        margin:0px;
        text-align: start;
        display: block;
        position: relative;
        top: -25px;
        left: 12px;
    }  
`

export const Container = styled.div`
    display:inline-block;
    border: 1px solid red;
    height: 150px;
`

export const StyledContainer = styled.div` 
    border: 1px solid blue;
    text-align: center;
` 
export const StyledH1 = styled.h1`
    color: pink;

`
export const Point = styled.p `
    display: inline;
    font-size: 15px;
    font-weight: 900;
    margin: 0px;
    padding: 0px;
    color: hsl(180, 8%, 52%);
`
