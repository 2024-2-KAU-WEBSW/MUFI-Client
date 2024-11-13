import * as S from './Home.style';
import ChatButton from '../../assets/svg/ChatButton.svg';
import Example from '../../assets/png/homeexample.png';
function Start () {
    return (
        <S.HomeWrapper>
          <S.HomeArticleWrapper>
            <S.HomeArticle src={Example}/> 
          </S.HomeArticleWrapper>
        </S.HomeWrapper>
    )
}

export default Start;