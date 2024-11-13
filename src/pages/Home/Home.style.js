import styled from "styled-components";

export const HomeWrapper = styled.div`
    ${({ theme }) => theme.fonts.b_55_60}
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    height: calc(100vh - 11rem);
    background-color: ${({ theme }) => theme.colors.dark};;
`;

export const HomeArticleWrapper = styled.div`
    margin-top: 2rem;
`;

export const HomeArticle = styled.img`
    width: 100%;
`;