import {
  Anchor,
  Button,
  Checkbox,
  Group,
  LoadingOverlay,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  useMantineTheme,
} from '@mantine/core';
import { EnvelopeClosedIcon, LockClosedIcon } from '@modulz/radix-icons';
import React, { useEffect, useRef, useState } from 'react';
import { signInUser, signOutUser } from '../../Redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';
import { RootState } from '../../Redux/store';
import TypeWritter from 'typewriter-effect';
import { useForm } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';

export interface AuthenticationFormProps {
  noShadow?: boolean;
  noPadding?: boolean;
  noSubmit?: boolean;
  style?: React.CSSProperties;
}

export function AuthenticationForm({
  noShadow,
  noPadding,
  noSubmit,
  style,
}: AuthenticationFormProps): JSX.Element {
  const currentUser = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [formType, setFormType] = useState<'register' | 'login'>('register');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const theme = useMantineTheme();
  // Count the number of times the number of page refreshes using useRef hook
  const pageRefreshCount = useRef(0);
  useEffect(() => {
    pageRefreshCount.current++;
  });

  const handleSubmit = async () => {
    setLoading(true);
    formType === 'register' ? await handleRegister() : await handleLogin();
  };

  const handleRegister = async () => {
    const { email, password, termsOfService, confirmPassword } = form.values;
    if (!email) {
      setError('Email is required');
      return;
    }
    if (!password) {
      setError('Password is required');
      return;
    }
    if (!termsOfService) {
      setError('You must agree to the terms of service');
      return;
    }

    if (password !== confirmPassword) {
      setError('Your passwords must match');
      return;
    }
    await fetchRequestHandleRegister();
    setLoading(false);
  };

  const fetchRequestHandleRegister = async () => {
    const { firstName, middleName, lastName, email, password } = form.values;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        middleName,
        lastName,
        email,
        password,
      }),
    };

    try {
      const response = await fetch('http://localhost:5000/api/users', options);
      const data = await response.json();
      if (response.status === 201) {
        toggleFormType();
      } else {
        setError(data.message);
      }
    } catch (error: any) {
      setError(error.message);
    }
    setLoading(false);
  };

  const toggleFormType = () => {
    setFormType((current) => (current === 'register' ? 'login' : 'register'));
    setError('');
  };

  const form = useForm({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsOfService: false,
    },

    validationRules: {
      firstName: (value) => formType === 'login' || value.trim().length >= 2,
      middleName: (value) => formType === 'login' || value.trim().length >= 0,
      lastName: (value) => formType === 'login' || value.trim().length >= 2,
      email: (value) => /^\S+@\S+$/.test(value),
      // password: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value),
      confirmPassword: (val, values) =>
        formType === 'login' || val === values?.password,
      termsOfService: (value) => value,
    },

    errorMessages: {
      email: 'Invalid email',
      password:
        'Password should contain 1 number, 1 letter and at least 6 characters',
      confirmPassword: "Passwords don't match. Try again",
      termsOfService: 'You must agree to the terms of service',
    },
  });

  const handleLogin = async () => {
    const { email, password } = form.values;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };

    try {
      const response = await fetch(
        'http://localhost:5000/api/users/sign-in',
        options
      );
      const data = await response.json();
      if (response.status === 200) {
        dispatch(signInUser(data));
        navigate('/');
      } else {
        setError(data.message);
      }
    } catch (error: any) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <Paper
      withBorder={!noShadow}
      shadow={noShadow ? 'xl' : 'sm'}
      sx={(theme) => ({
        position: 'relative',
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        ...style,
        padding: noPadding ? 0 : '1.5rem',
      })}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.onSubmit(handleSubmit);
        }}
      >
        <LoadingOverlay visible={loading} />
        {formType === 'register' && (
          <Group grow>
            <TextInput
              data-autofocus
              required
              placeholder="Your first name"
              label="First name"
              {...form.getInputProps('firstName')}
            />

            <TextInput
              placeholder="Your middle name (optional)"
              label="Middle name"
              {...form.getInputProps('middleName')}
            />
            <TextInput
              required
              placeholder="Your last name"
              label="Last name"
              {...form.getInputProps('lastName')}
            />
            {JSON.stringify(pageRefreshCount)}
          </Group>
        )}

        <TextInput
          mt="md"
          required
          placeholder="Your email"
          label="Email"
          icon={<EnvelopeClosedIcon />}
          {...form.getInputProps('email')}
        />

        <PasswordInput
          mt="md"
          required
          placeholder="Password"
          label="Password"
          icon={<LockClosedIcon />}
          {...form.getInputProps('password')}
        />

        {formType === 'register' && (
          <PasswordInput
            mt="md"
            required
            label="Confirm Password"
            placeholder="Confirm password"
            icon={<LockClosedIcon />}
            {...form.getInputProps('confirmPassword')}
          />
        )}

        {formType === 'register' && (
          <Checkbox
            mt="xl"
            label="I agree to the terms of service"
            {...form.getInputProps('termsOfService', { type: 'checkbox' })}
          />
        )}

        {error && (
          <Text color="red" size="sm" mt="sm">
            {error}
          </Text>
        )}

        {!noSubmit && (
          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="gray"
              onClick={toggleFormType}
              size="sm"
            >
              {formType === 'register'
                ? 'Have an account? Login'
                : "Don't have an account? Register"}
            </Anchor>
            <Button onClick={handleSubmit} size="sm" type="submit">
              {formType === 'register' ? 'Register' : 'Login'}
            </Button>
          </Group>
        )}
      </form>
    </Paper>
  );
}
