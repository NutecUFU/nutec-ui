import React from 'react'
import styled, { keyframes } from 'styled-components'

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 100000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  padding: 50px 0;
  display: ${props => props.isOpen ? 'flex' : 'none'}
`

const showAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 1;
  }
`;

const ModalContentWrapper = styled.div`
  max-width: 75vw;
  min-width: 300px;
  background: #fff;
  display: inline-table;
  margin: auto;
  border-radius: 5px;
  padding-bottom: 20px;
  animation: ${showAnimation} 0.3s ease 0s 1 normal none running;
`

const ModalHeaderWrapper = styled.div`
  display: flex;
`

const ModalHeaderTitle = styled.div`
  padding: 20px;
  flex-grow: 1;
  font-size: 16px;
  align-items: center;
`

const ModalHeaderClose = styled.div`
  margin-right: 10px;
  font-size: 25px;
  font-weight: normal;
  cursor: pointer;
  user-select: none;
  align-self: flex-start;
`

const ModalBodyWrapper = styled.div`
  padding: 0 30px;
`

const Modal = ({children, isOpen}) => (
  <ModalWrapper isOpen={isOpen}>
    <ModalContentWrapper>
      {children}
    </ModalContentWrapper>
  </ModalWrapper>
)

const ModalHeader = ({children, onClose}) => (
  <ModalHeaderWrapper>
    <ModalHeaderTitle>
      {children}
    </ModalHeaderTitle>
    <ModalHeaderClose onClick={onClose}>
      ×
    </ModalHeaderClose>
  </ModalHeaderWrapper>
)

const ModalBody = ({children}) => (
  <ModalBodyWrapper>
    {children}
  </ModalBodyWrapper>
)

Modal.Header = ModalHeader
Modal.Body = ModalBody

export default Modal
