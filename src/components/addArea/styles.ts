import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;

    .iconPlus{
        color: white;
        background: #0000003a;
        margin-right: 5px;
        border-radius: 5px;
        cursor: pointer;
    }

    input{
        border: 0px;
        background: transparent;
        outline: none;
        color: #FFF;
        font-size: 18px;
        flex: 1;
    }
`;