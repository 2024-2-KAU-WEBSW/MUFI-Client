import styled from "styled-components";

export const HeaderWrapper = styled.header`
${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-around', align: 'center'})};
width:100%;
height:11rem;
background-color: white;
padding: 0 6rem;
box-shadow: 0 2px 5px gray;
`;

export const NavWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({ align: 'center'})};
height:11rem;
width:fit-content;
gap: 8.4rem;
`;

export const NavBtn = styled.div`
${({ theme }) => theme.fonts.r_20};
color: ${({ theme }) => theme.colors.black};
`;
export const NavRedBtn = styled.div`
${({ theme }) => theme.fonts.r_20};
color: ${({ theme }) => theme.colors.dark_red};
`;

export const LoginPageBtn = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({ align: 'center'})};
gap: 1.4rem;
width: 19.8rem;
height: 4.4rem;
${({ theme }) => theme.fonts.b_20};
color: ${({ theme }) => theme.colors.gray};
`;