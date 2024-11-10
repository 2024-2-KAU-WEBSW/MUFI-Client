import styled from 'styled-components';

export const GalleryWrapper = styled.div`
    ${({ theme }) => theme.fonts.b_55_60}
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #F5F5F5;
`;

export const PhotoContainerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
`;

export const PhotoContainer = styled.div`
    display: flex;
    width: 80%;
    gap: 2rem;
    transition: transform 0.5s ease; /* 슬라이드 애니메이션 */
    justify-content: space-around;
    position: relative;
`;

export const ArrowButton = styled.button`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: #ccc;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;

export const SlideMenu = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`;

export const SlideMenuItem = styled.div`
    ${({ theme }) => theme.fonts.b_55_60}
    margin: 0 0.5rem;
    font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
    color: ${({ isActive }) => (isActive ? '#333' : '#aaa')};
`;
