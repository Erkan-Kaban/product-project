import styled from 'styled-components'

// TopBarContents is using styled components, gave it a try.

export const TopBarContents = styled.section.attrs({
    className: 'topBarContents'
})`
height: 10vh;
background-color: rgb(52, 92, 56);
display: flex;
justify-content: space-between;
align-items: center;
color: white;
padding: 2rem;
margin-bottom: 0.5rem;
border: 1px solid rgba(255,255,255,.25);
border-radius: 5px;
`



