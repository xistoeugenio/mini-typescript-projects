import styled from 'styled-components'

export const UploadForm = styled.form`
    background-color: #3D3F43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .fileName {
        background-color: rgb(35, 90, 193);
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px 0px;
        padding: 5px 10px;
        cursor: default;

        .closeIcon{
            background-color: red;
            position: absolute;
            right: -12px;
            top: -12px;
            border-radius: 5px;
            cursor: pointer;
        }
    }

    .uploadLabel{
        background-color: dodgerblue;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 10px;
        border-radius: 10px;
        cursor: pointer;
    }

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