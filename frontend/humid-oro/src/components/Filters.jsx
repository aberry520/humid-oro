import styled from "styled-components";

const Filter = styled.div`
    border: black solid;
    margin: 5px;
    display: flex;
    justify-content: center;
    max-width: 20vw;
    min-width: fit-content;
    min-height: 80vh;
    max-height: 85vh;
    h1{
        margin: 1rem;
    }
`
export const Filters = () => {

    return (
        <>
        <Filter>
        <h1>Filters</h1>
        </Filter>
        </>
    )
}