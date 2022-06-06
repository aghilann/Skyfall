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
import React, { useState } from 'react';

import { useForm } from '@mantine/hooks';

export interface AuthenticationFormProps {
  noShadow?: boolean;
  noPadding?: boolean;
  noSubmit?: boolean;
  style?: React.CSSProperties;
}

export function AddLegacy({
  noShadow,
  noPadding,
  noSubmit,
  style,
}: AuthenticationFormProps): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const theme = useMantineTheme();

  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsOfService: true,
    },

    validationRules: {},

    errorMessages: {
      email: 'Invalid email',
      password:
        'Password should contain 1 number, 1 letter and at least 6 characters',
      confirmPassword: "Passwords don't match. Try again",
    },
  });

  const handleSubmit = () => {};

  return (
    <Paper
      shadow={noShadow ? '' : 'sm'}
      style={{
        position: 'relative',
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        ...style,
      }}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <LoadingOverlay visible={loading} />
        <Group grow>
          <TextInput
            data-autofocus
            required
            placeholder="Your first name"
            label="First name"
            {...form.getInputProps('firstName')}
          />

          <TextInput
            required
            placeholder="Your last name"
            label="Last name"
            {...form.getInputProps('lastName')}
          />
        </Group>
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
        <PasswordInput
          mt="md"
          required
          label="Confirm Password"
          placeholder="Confirm password"
          icon={<LockClosedIcon />}
          {...form.getInputProps('confirmPassword')}
        />
        <Checkbox
          mt="xl"
          label="I agree to sell my soul in order to get good at LeetCode."
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />
        <Text color="red" size="sm" mt="sm">
          {error}
        </Text>
        {!noSubmit && (
          <Group position="apart" mt="xl">
            <Button color="blue" type="submit">
              Add Legacy
            </Button>
          </Group>
        )}
      </form>
    </Paper>
  );
}
