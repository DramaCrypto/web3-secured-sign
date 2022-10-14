import React, { useEffect, useState } from "react";
import { Box, FormControl, TextField, OutlinedInput } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BigNumber from "bignumber.js";
import {
  ErrorHelperText,
  ErrorHighlight,
  SectionContainer,
  SwapBox,
  SwapButton,
  TokenButton,
  TokenOutlinedInput,
} from "../../styles/components/swap";
import axios from 'axios';
import Querystring from "query-string"
import { useWeb3React } from "@web3-react/core";
import { useAppDispatch } from "state";
import { simpleRpcProvider } from "utils/providers";
import { JwtTokenKey } from "config";

interface HelperProps {
  text: string;
  error?: string;
}

const pattern = /^[0-9]*[.,]?[0-9]*$/;


const Swap = () => {
  const dispatch = useAppDispatch();
  const { account, library } = useWeb3React();

  const [email, setEmail] = React.useState<string | null>(null);
  const [name, setName] = React.useState<string | null>(null);

  useEffect(() => {
    if (account) {
      axios.get(`${process.env.REACT_APP_API_ENDPOINT}account`).then(res => {
        console.log(res)
        setEmail(res.data.user?.email)
        setName(res.data.user?.name)
      }).catch(err => {
        setEmail('')
        setName('')
      })
    } else {
      setEmail('')
      setName('')
    }
  }, [account])

  const onRegister = async () => {
    const nonce = await simpleRpcProvider.getTransactionCount(account)
    const noncenonce = Math.random()
    const signData = `Assignment sign message: ${nonce}${noncenonce}`
    const signature = await library.getSigner().signMessage(
      signData
    );

    if (signature) {
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_API_ENDPOINT}register`,
          Querystring.stringify({ address: account, signature: signature, signData: signData, name, email })
        )
        const token = data.token
        localStorage.setItem(`${JwtTokenKey}-${account}`, token)
      } catch (err) {
        console.error(err)
      }
    }
  }

  return (
    <React.Fragment>
      <SectionContainer>
        <SwapBox>
          <Box
            sx={{
              backgroundColor: "#eee",
              padding: "8px 10px",
              borderRadius: "8px",
            }}
          >
            <Box display="flex" flexDirection='column' alignItems="center" gap='5px'>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                label="Your Email"
              />
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                label="Your Name"
              />
              <TokenButton variant="contained" onClick={onRegister}>
                Register
              </TokenButton>
            </Box>
          </Box>
        </SwapBox>
      </SectionContainer>
    </React.Fragment>
  );
};

export default Swap;
