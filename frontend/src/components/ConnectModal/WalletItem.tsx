import React from 'react'
import { ItemContainer, ItemLink, ItemTitleTypography } from '../../styles/components/connectModal';

interface ItemProps {
  image: string;
  title: string;
  handleClick: () => void;
}

const WalletItem: React.FC<ItemProps> = (props) => {
  const { image, title, handleClick } = props

  return (
    <ItemContainer onClick={handleClick}>
      <ItemLink href='#' underline='none'>
        <img src={`/wallets/${image}`} alt="Item" width={42} />
        <ItemTitleTypography>{title}</ItemTitleTypography>
      </ItemLink>
    </ItemContainer>
  )
}

export default WalletItem
