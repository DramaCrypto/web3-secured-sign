import React, { useState } from "react";
import styled from "styled-components";
import * as Element from "./styles";

interface CopyAddressProps {
  account: string;
  mb?: string;
  mt?: string;
  m?: string;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  position: relative;
  padding: 10px 6px 10px 0;
  background: rgb(44, 47, 54);
  border: 1px solid #2e2a54;
}
`;

const Address = styled.div`
  flex: 1;
  position: relative;
  padding-left: 16px;

  & > input {
    background: transparent;
    border: 0;
    color: #fff;
    display: block;
    font-weight: 600;
    font-size: 16px;
    padding: 0;
    width: 100%;

    &:focus {
      outline: 0;
    }
  }

  &:after {
    background: linear-gradient(to right,#2c2f364f,#2c2f36);
    content: "";
    height: 100%;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 70px;
  }
`;

const Tooltip = styled.div<{ isTooltipDisplayed: boolean }>`
  display: ${({ isTooltipDisplayed }) =>
    isTooltipDisplayed ? "inline-block" : "none"};
  position: absolute;
  padding: 3px;
  top: 38px;
  right: 0;
  text-align: center;
  background-color: #685557;
  color: #eeebf5;
  border-radius: 5px;
  width: 60px;
`;

const CopyAddress: React.FC<CopyAddressProps> = ({ account, ...props }) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);

  const copyAddress = () => {
    if (navigator.clipboard && navigator.permissions) {
      navigator.clipboard.writeText(account).then(() => displayTooltip());
    } else if (document.queryCommandSupported("copy")) {
      const ele = document.createElement("textarea");
      ele.value = account;
      document.body.appendChild(ele);
      ele.select();
      document.execCommand("copy");
      document.body.removeChild(ele);
      displayTooltip();
    }
  };

  function displayTooltip() {
    setIsTooltipDisplayed(true);
    setTimeout(() => {
      setIsTooltipDisplayed(false);
    }, 1000);
  }

  return (
    <div style={{ position: "relative" }}>
      <Wrapper>
        <Address title={account}>
          <input type="text" readOnly value={account || ""} />
        </Address>
        <Element.IconButton
          onClick={copyAddress}
          style={{ marginLeft: "12px" }}
        >
          <svg style={{ width: "24px", height: "24px", fill: "#91741e" }}>
            <path d="M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" />
          </svg>
        </Element.IconButton>
      </Wrapper>
      <Tooltip isTooltipDisplayed={isTooltipDisplayed}>Copied</Tooltip>
    </div>
  );
};

export default CopyAddress;
