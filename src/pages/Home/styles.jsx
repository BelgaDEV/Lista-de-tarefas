import styled from 'styled-components'

export const AddButton = styled.button`
background: #74f20d;
color: #000;
height: 35px;
margin-left: 10px;
padding: 5px 10px;
cursor: pointer;
border: none;
border-radius: 5px;

&:hover {
    opacity: 0.8;
}
`

export const Container = styled.div`
background: rgba(255, 255, 255, 0.1);   
backdrop-filter: blur(10px);
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
padding: 20px;
border-radius: 10px;
border: 1px solid rgba(255, 255, 255, 0.2);

h1 {
    color: #fff;
}

input {
    height: 35px;
    border-radius: 5px;
    border: none;
    margin-top: 30px;
    outline: none;
    padding-left: 10px;
}
`

export const Product = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 40px;
background: #fff;
border-radius: 5px;
margin-top: 15px;
padding: 0 10px;

p {
    text-transform:capitalize;
    font-weight:bold;
}
`

export const TrashButton = styled.button`
background: transparent;
border: none;
cursor: pointer;
font-size: 20px;
`

export const Rights = styled.footer`
font-size: 1rem;
margin-top: 12px;
text-align: center;
    color: #fff;
    text-shadow:
        0 0 5px #3f143f,
        0 0 10px #d23dd2,
        0 0 20px #f0f,
        0 0 40px #f0f,
        0 0 80px #f0f,
        0 0 120px #e079e0;
`