export const buyToken = async (
  icoContract,
  payingAmount,
  isEthPaying = false
) => {
  let tx;
  if (isEthPaying) {
    tx = await icoContract.buyToken(payingAmount, { value: payingAmount });
  } else {
    tx = await icoContract.buyToken(payingAmount);
  }

  const receipt = await tx.wait();
  return receipt.status;
};
