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
import React, { useEffect, useState } from 'react';

import TypeWritter from 'typewriter-effect';
import { useForm } from '@mantine/hooks';

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
  const [formType, setFormType] = useState<'register' | 'login'>('register');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const theme = useMantineTheme();

  useEffect(() => {
    console.log(formType);
  }, []);

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
      termsOfService: true,
    },

    validationRules: {
      firstName: (value) => formType === 'login' || value.trim().length >= 2,
      middleName: (value) => formType === 'login' || value.trim().length >= 0,
      lastName: (value) => formType === 'login' || value.trim().length >= 2,
      email: (value) => /^\S+@\S+$/.test(value),
      password: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value),
      confirmPassword: (val, values) =>
        formType === 'login' || val === values?.password,
    },

    errorMessages: {
      email: 'Invalid email',
      password:
        'Password should contain 1 number, 1 letter and at least 6 characters',
      confirmPassword: "Passwords don't match. Try again",
    },
  });

  const handleRegister = async () => {
    await setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleLogin = async () => {
    await setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleSubmit = async () => {
    setLoading(true);
    formType === 'register' ? handleRegister() : handleLogin();
    form.reset();
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
      <form onSubmit={form.onSubmit(handleSubmit)}>
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
              {...form.getInputProps('lastName')}
            />
            <TextInput
              required
              placeholder="Your last name"
              label="Last name"
              {...form.getInputProps('lastName')}
            />
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

            <Button type="submit">
              {formType === 'register' ? 'Register' : 'Login'}
            </Button>
          </Group>
        )}
      </form>
    </Paper>
  );
}
