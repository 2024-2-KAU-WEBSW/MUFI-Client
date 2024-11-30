import * as S from './QnA.style';
import React, { useEffect, useState } from 'react';
import ChatbotLogo from '../../assets/svg/챗봇로고.svg';
import useGetFaqTitle from '../../hooks/queries/useGetFaqTitle';
import usePostFaqContent from '../../hooks/queries/usePostFaqContent';
import useGetQnaTitle from '../../hooks/queries/useGetQnaTitle';
import usePostQnaContent from '../../hooks/queries/usePostQnaContent';
import usePostQnaRegister from '../../hooks/queries/usePostQnaRegister';

function QnA () {
    const [activeTab, setActiveTab] = useState("FAQ"); //usestate 이용
    const [isWriting, setIsWriting] = useState(false); //작성모드상태 추가
    const [selectedFaq, setSelectedFaq] = useState(null);
    const [selectedQnA, setSelectedQnA] = useState(null); // 선택된 Q&A 질문
    const [isAnswered, setIsAnswered] = useState(false); // qna답변 여부
    const faqtitleAPI = useGetFaqTitle(); //faqtitle api
    const faqcontentAPI = usePostFaqContent(); //faqcontent api
    const qnatitleAPI = useGetQnaTitle(); //qnatitle api
    const qnacontentAPI = usePostQnaContent(); //qnacontnet api

    // FAQ와 Q&A의 질문 목록
    const faqQuestions = Object.values(faqtitleAPI.data.data); //faqtitle api 부분
    const qnaQuestions = Object.values(qnatitleAPI.data.data);


    useEffect(()=> {
        console.log(qnaQuestions);
        console.log(faqQuestions);

    },[]);
    //작성하기 버튼 부분
    const handleWriteButtonClick = () => {
        setIsWriting(true); // 작성 모드로 전환
        setActiveTab("Q&A"); //작성 모드를 활성화하면 q&a 탭이 진하게 보이도록 설정
    };
    const handleSave = () => {
        // 저장 버튼을 눌렀을 때 수행할 동작
        setIsWriting(false); // 작성 모드를 종료

        
    };

    //faq버튼부분
    // FAQ 질문 클릭 시 상세보기 화면으로 전환
    const handleFaqClick = (faq) => {
        setSelectedFaq(faq);
        // POST 요청 실행(api추가부분)
        faqcontentAPI.mutate(faq.id);
    };

    // 상세보기 화면에서 목록으로 돌아가기
    const handleBackClick = () => {
        setSelectedFaq(null);
    };

    //qna버튼부분
    const handleQuestionClick = (qna) => {
        console.log("Selected QnA:", qna); // 클릭한 질문 확인
        console.log("Is Answered:", qna.answerDone); // 답변 상태 확인
        setSelectedQnA(qna); // 선택된 질문 설정
        setIsAnswered(qna.answerDone); // 답변 상태 설정

        qnacontentAPI.mutate(qna.id); //api추가부분
    };

    const handleBackToListClick = () => {
        setSelectedQnA(null); // 선택 해제
    };
    
    return (
        <S.QnAWrapper>
            {selectedFaq ? (
            <>
            <S.BackButton onClick={handleBackClick}>← BACK</S.BackButton>
            <S.FaqDetailWrapper>
                <S.FaqDetailTitle>{selectedFaq.title}</S.FaqDetailTitle>
                <S.DividerLine />
                <S.FaqDetailContent>{selectedFaq.content}</S.FaqDetailContent>
            </S.FaqDetailWrapper>
            </>
        ) : selectedQnA ? ( // **Q&A 상세 화면 추가**
            <>  
                {console.log("Rendering selectedQnA:", selectedQnA)}
                {console.log("Rendering isAnswered:", isAnswered)}
                <S.BackButton onClick={handleBackToListClick}>← BACK</S.BackButton>
                <S.QnADetailWrapper>
                    <S.QnADetailTitle>{selectedQnA.question}</S.QnADetailTitle>
                    <S.DividerLine />
                    <S.QnADetailContent>
                        {isAnswered
                        ? "행사에 부스가 여러 개 필요할 때 최대한 대여하고 싶습니다. 혹시 몇 개까지 대여가 가능한지요?"
                        : "답변이 준비 중입니다. 조금만 기다려 주세요!"}
                    </S.QnADetailContent>
                </S.QnADetailWrapper>

                        {/* 답변 완료 상태일 때만 렌더링 */}
                        {isAnswered && (
                        <>
                          <S.AnswerWrapper>
                            <S.LogoImage src={ChatbotLogo} alt="챗봇 로고" />
                            <S.AnsweredBox>
                                <p>현재 한 가지 행사에 대해 가능한 최대 부스 개수는 8개입니다.</p>
                                <p>감사합니다!</p>
                            </S.AnsweredBox>
                          </S.AnswerWrapper>
                        </>
                    )}
            </>
        ) : (
            // FAQ 목록 화면
            <>
            <S.TitleGroup>
                {/*QnA와 FAQ 타이틀 그룹 */}
                <S.SectionTitle
                    active={activeTab === "FAQ"}
                    onClick={() => setActiveTab("FAQ")}
                >
                FAQ
                </S.SectionTitle>
                <S.Divider />
                <S.SectionTitle
                    active={activeTab === "Q&A"}
                    onClick={() => setActiveTab("Q&A")}
                >
                Q&A
                </S.SectionTitle>
            </S.TitleGroup>

            {/* Q&A 탭이고 작성 모드가 아닐 때만 작성하기 버튼 표시 */}
            {activeTab === "Q&A" && !isWriting && (
                <S.WriteButton onClick={handleWriteButtonClick}>
                    <S.PencilIcon />
                    질문 등록
                </S.WriteButton>
            )}

            {/* 질문 박스 그룹 */}
            <S.QuestionGroup>
            {isWriting ? (
                    // 작성 모드일 때 입력 폼을 렌더링
                    <>
                        <S.Input placeholder="제목을 입력하세요." />
                        <S.TextArea placeholder="내용을 입력하세요." />
                        <S.SaveButton onClick={handleSave}>등록</S.SaveButton>
                    </>
                ) : (
                    activeTab === "FAQ"
                    ? faqQuestions && faqQuestions.map((faq) => (
                        <S.QuestionBox key={faq.id} onClick={() => handleFaqClick(faq)}>
                                {faq.title}
                            </S.QuestionBox>
                        ))
                        : qnaQuestions && qnaQuestions.map((qna) => (
                            <S.QuestionContainer key={qna.id}> {/* 수정된 부분: Q&A에서도 QuestionContainer 사용 */}
                                <S.QuestionBox onClick={() => handleQuestionClick(qna)}>
                                    {qna.title}
                                </S.QuestionBox>
                                <S.AnswerStatus >
                                    <S.StatusIcon answered={qna.answerDone} />
                                    {qna.answerDone ? "답변 완료" : "답변 대기"}
                                </S.AnswerStatus>
                            </S.QuestionContainer>
                    ))
                )}
            </S.QuestionGroup>
            
            
            {/* Q&A 탭일 때만 페이지네이션을 표시 */}
            {activeTab === "Q&A" && (
                <S.PaginationWrapper>
                    <S.PageDot />
                    <S.PageDot />
                </S.PaginationWrapper>
            )}
            </>
            )}
        </S.QnAWrapper>
    );
}


export default QnA;