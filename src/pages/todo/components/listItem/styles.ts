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

    .editContainer{
        flex: 1;
        background: #00000050;
        box-sizing: border-box;
        height: 30px;
        margin: 0 5px;
        padding: 0 8px;
        border-radius: 5px;
        display: flex;
        align-items: center;

        .editInput{
            box-sizing: border-box;
            background: transparent;
            padding: 0 5px;
            border: 0px;
            font-size: 16px;
            color: white;
            outline: none;
            flex: 1;
        }
    }

    

    .radio{
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label{
        overflow-x: hidden;
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'};
        flex: 1;
    }

    .checkIcon{
        background: dodgerblue;
        color: white;
        font-size: 30px;
        border-radius: 5px;
        cursor: pointer;
    }
`
))

export const rightContainer = styled.div`
    display: flex;
    gap: 12px;
    margin-left: 5px;

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
