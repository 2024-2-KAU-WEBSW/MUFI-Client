import styled from "styled-components";
import ReservButton from '../../assets/svg/문의 버튼.svg';
import DistLine from '../../assets/svg/DistLine.svg';
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";

export const ReservationWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;
`;

export const ReservContainerTop = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SharedCalendar = styled.div`
  width: 50rem;
  height: 50rem;
  border: 2px solid #2f16ff;
`;

export const InfoMessage = styled.p`
  font-size: 2rem;
  color: #000000;
  opacity: 0.5;
  margin-bottom: 4rem;
`;

export const QuickInquire = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem;
  font-weight: 700;
  color: #000000;
  gap: 8rem;
  margin-bottom: 11rem;
`;

export const QuickInquireIcons = styled.div`
  display: flex;
  gap: 4rem;
  color: ${({ theme }) => theme.colors.dark_red};

  svg {
    width: 6rem;
    height: 6rem;
  }
`;

export const SelectDate = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 3rem;

  select {
    font-size: 1.4rem;
    padding: 0.5rem;
    width: 14rem;
    height: 4rem;
    border-radius: 0;
    border: 1.4px solid #000000;
    text-align: center;
  }
`;

export const InfoMessageDate = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.dark_red};
  font-weight: 700;
`;

export const ReservContainerMiddle = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const FormContainer = styled.div`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 700;
  margin-top: 4rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ReservationForm = styled.form`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  input {
    width: 58rem;
    height: 6rem;
    font-size: 1.2rem;
    padding: 0.8rem;
    border: 1px solid #000000;
    background-color: #ffffff;
    color: #000000;
    ::placeholder {
      color: #000000;
      opacity: 0.5;
    }
  }
`;

export const PhoneNumber = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  svg {
    width: 2rem;
    height: 2rem;
    color: #000000;
  }

  input {
    width: 15rem;
    text-align: center;
  }
`;

export const CheckContainer = styled.div`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 700;
  margin-top: 4rem;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const DetailCheck = styled.div`
  margin-top: 3rem;
  font-size: 1.8rem;
  line-height: 2rem;
  text-align: left;
  line-height: 4rem;

  strong {
    font-weight: bold;
  }
`;

export const DistanceCheck = styled.div`
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.dark_red};
`;

export const DistanceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8rem;
`

export const StyledDeliveryTruck = styled(CiDeliveryTruck)`
  width: 6rem;
  height: 6rem;
  color: ${({ theme }) => theme.colors.dark_red};
`;

export const StyledLine = styled.div`
  background-image: url(${DistLine});
  width: 45rem;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

export const StyledUserIcon = styled(AiOutlineUser)`
  width: 6rem;
  height: 6rem;
  color: ${({ theme }) => theme.colors.dark_red};
`;

export const EstimateCheck = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 5rem;
`;

export const InquiryButton = styled.button`
  width: 20rem;
  height: 5rem;
  background-image: url(${ReservButton});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  margin-bottom: 5rem;
`;

export const ReservContainerBottom = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 6rem;
`;

export const TermsTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
`;

export const TermsAndCond = styled.p`
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.colors.gray};
`;
