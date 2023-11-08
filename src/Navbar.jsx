import React from 'react';
import { Flex, Button, Heading } from "@chakra-ui/react";
import { ethers } from 'ethers';

const navbarStyle = {
  background: 'linear-gradient(to bottom, #2ACAEA, #0E2F44)',
};

export default function Navbar({ account, connectAccount }) {
  const connectHandler = async () => {
    if (!account) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const userAccount = ethers.utils.getAddress(accounts[0]);
        connectAccount(userAccount);
      } catch (error) {
        console.error(error);
      }
    }
  }

  // Format the account with the first five digits, three dots in the middle, and the last four digits
  const formattedAccount = account
    ? `${account.slice(0, 5)}...${account.slice(-4)}`
    : '';

  return (
    <Flex
      style={navbarStyle}  // Apply the gradient background here
      px={4}
      py={2}
      alignItems="center"
      justifyContent="space-between"
      boxShadow="base"
      zIndex="sticky"
      position="fixed"
      as="header"
      w="100%"
      top="0"
      right="0"
    >
      <a href="https://www.linkedin.com/in/will-stansill-044513232/" target="_blank" rel="noopener noreferrer">
        <Heading fontSize={20} ml={40} mr="auto" color="white">
          By Will Stansill
        </Heading>
      </a>
      <Flex alignItems="center">
        <Button
          onClick={connectHandler}
          ml={2}
          bg="#0E2F44"
        >
          {account ? `Connected: ${formattedAccount}` : 'Connect'}
        </Button>
        <a href="https://github.com/WillStansill/ERC-20-Indexer" target="_blank" rel="noopener noreferrer">
          <Button ml={2} bg="#0E2F44" color="white">
            GitHub
          </Button>
        </a>
      </Flex>
    </Flex>
  );
}
