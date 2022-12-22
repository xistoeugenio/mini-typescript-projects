import styled from "styled-components";

type containerProps = {
    done: boolean
}

export const Container = styled.div(({ done }: containerProps) => (
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input{
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label{
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'};
        flex: 1;
    }
`
))

export const rightContainer = styled.div`
    display: flex;
    gap: 20px;

    .icon{
        font-size: 30px;
        cursor: pointer;

        &.edit{
            box-sizing: border-box;
            color: dodgerblue;
        }

        &.delete{
            color: #a91a1a;
        } 

        &:hover{
            border-radius: 5px;
            background: #00000050;
        }
    }
`
