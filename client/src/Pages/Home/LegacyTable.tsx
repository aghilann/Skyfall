import {
  ActionIcon,
  Box,
  Button,
  Code,
  Group,
  Switch,
  Text,
  TextInput,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { Key } from 'react';
import { Trash } from 'tabler-icons-react';
import { useGetLegacyQuery } from '../../API/apiSlice';

interface ILegacy {
  id: Key;
  recipient: String;
  recipientEmail: String;
  recipientPhoneNumber: String;
  link: String;
  dateRecorded: String;
}

export const LegacyTable: React.FC = () => {
  console.log('RERENDER');

  // const { data, isLoading, error } = useGetLegacyQuery('');
  const isLoading = false;
  const error = null;
  const data = [
    {
      id: -1,
      recipient: 'John 1000s',
      recipientEmail: 'johndoe@gmail.com',
      recipientPhoneNumber: '403-400-3726',
      link: 'https://www.google.com',
      dateRecorded: '2020-01-01',
    },
  ];

  if (error) {
    return <Text>Error</Text>;
  }

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  const [legacy, setLegacy] = useState<ILegacy[]>(data);
  const fields = legacy.map((item, index) => (
    <Group key={item.id} mt="xs">
      <TextInput
        placeholder="Recipient"
        required
        sx={{ flex: 1 }}
        value={item.recipient.toString()}
        onChange={(e) => {
          setLegacy((prev) => {
            const newLegacy = { ...prev[index], recipient: e.target.value };
            return [
              ...prev.slice(0, index),
              newLegacy,
              ...prev.slice(index + 1),
            ];
          });
        }}
      />
      <TextInput
        placeholder="Recipient Email"
        required
        sx={{ flex: 1 }}
        value={item.recipientEmail.toString()}
        onChange={(e) => {
          setLegacy((prev) => {
            const newLegacy = {
              ...prev[index],
              recipientEmail: e.target.value,
            };
            return [
              ...prev.slice(0, index),
              newLegacy,
              ...prev.slice(index + 1),
            ];
          });
        }}
      />
      <ActionIcon
        color="red"
        variant="hover"
        onClick={() =>
          setLegacy((prev) => prev.filter((i) => i.id !== item.id))
        }
      >
        <Trash size={16} />
      </ActionIcon>
    </Group>
  ));

  return (
    <Box sx={{ maxWidth: 500 }} mx="auto">
      {fields.length > 0 ? (
        <Group mb="xs">
          <Text weight={500} size="sm" sx={{ flex: 1 }}>
            Name
          </Text>
          <Text weight={500} size="sm" pr={0}>
            Status
          </Text>
        </Group>
      ) : (
        <Text color="dimmed" align="center">
          No one here...
        </Text>
      )}

      {fields}

      <Group position="center" mt="md">
        <Button
          onClick={() =>
            setLegacy((legacy: any) => [
              ...legacy,
              {
                id: Math.random(),
                recipient: 'John Does12',
                recipientEmail: 'johndoe@gmail.com',
                recipientPhoneNumber: '403-400-3726',
                link: 'https://www.google.com',
                dateRecorded: '2020-01-01',
              },
            ])
          }
        >
          Add employee
        </Button>
      </Group>
    </Box>
  );
};
