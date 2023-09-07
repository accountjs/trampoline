import {
  Box,
  Button,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import React from 'react';


import { chains, projectId } from "./ZeroDevWrapper";
import { useConnect } from "wagmi";
import { ZeroDevConnector } from "@zerodev/wagmi";
import { createPasskeyOwner, getPasskeyOwner, getOrCreatePasskeyOwner } from '@zerodev/sdk/passkey'
import { useState } from "react";

import { OnboardingComponent, OnboardingComponentProps } from '../types';


const Onboarding: OnboardingComponent = ({
  onOnboardingComplete,
}: OnboardingComponentProps) => {

  const [registerLoading, setRegisterLoading] = useState(false);
  const { connect } = useConnect()
    ;

  getOrCreatePasskeyOwner({ name: 'ZeroDev', projectId });

  const handleRegister = async () => {
    setRegisterLoading(true);
    // connect({
    //   connector: new ZeroDevConnector({
    //     chains, options: {
    //       projectId,
    //       owner: await createPasskeyOwner({ name: 'ZeroDev', projectId })
    //     }
    //   })
    // })
    setTimeout(() => setRegisterLoading(false), 3000);




  }


  return (
    <Box sx={{
      height: '80vh',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 2
    }}>
      <LoadingButton variant='contained' size='large'
        loading={registerLoading}
        onClick={handleRegister} >PassKey注册</LoadingButton>
    </Box >
  );
};

export default Onboarding;
