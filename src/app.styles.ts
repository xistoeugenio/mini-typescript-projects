import styled from 'styled-components'

export const Container = styled.div`
    background-color: #27282F;
    color: #FFF;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30 0;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`;

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

export const UploadForm = styled.form`
    background-color: #3D3F43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input[type=file] {
        display: none;
    }

    button[type=submit] {
        background-color: #756DF4;
        width: 70px;
        height: 30px;
        border: 0;
        color: #FFF;
        font-size: 15px;
        border-radius: 10px;
        cursor: pointer;

        &[disabled]{
            background-color: #b0acac;
            color: #434040;
            cursor: not-allowed;
        }

        &:hover{
            opacity: 0.9;
        }
    }
`