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
import { useId, useUuid } from '@mantine/hooks';

import { Key } from 'react';
import { RootState } from '../../Redux/store';
import { Trash } from 'tabler-icons-react';
import format from 'date-fns/format';
import { useGetLegacyQuery } from '../../Redux/API/apiSlice';
import { useSelector } from 'react-redux';

interface ILegacy {
  id: Key;
  recipient: string;
  recipientEmail: string;
  link: string;
  dateRecorded: string;
}

export const LegacyTable: React.FC = () => {
  // Get the user's id from the redux store
  const currentUser = useSelector((state: RootState) => state.user);
  if (!currentUser) {
    return null;
  }
  const { data, isLoading, error, isSuccess } = useGetLegacyQuery(
    currentUser.id
  );
  const [legacy, setLegacy] = useState<ILegacy[]>([]);
  useEffect(() => {
    console.log(legacy, data, 'Before');
    if (data) {
      setLegacy(data);
    }
    console.log(legacy, data, 'After');
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>; // !!! Slow Spinner
  }

  if (error) {
    return <p>Error :</p>;
  }

  const fields = legacy.map((item: ILegacy, index: number) => {
    const { id, recipient, recipientEmail, link, dateRecorded } = item;
    return (
      <Group key={id} mt="xs">
        <TextInput
          placeholder="Recipient"
          required
          sx={{ flex: 1 }}
          value={recipient}
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
          value={recipientEmail}
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
          onClick={() => setLegacy((prev) => prev.filter((i) => i.id !== id))}
        >
          <Trash size={16} />
        </ActionIcon>
      </Group>
    );
  });

  return (
    <Box mx="auto">
      <>
        {fields.length > 0 ? (
          <Group mb="xs">
            <Text weight={500} size="sm" sx={{ flex: 1 }}>
              Receipient Name
            </Text>
            <Text weight={500} size="sm" sx={{ flex: 1 }} pr={0}>
              Recipient Email
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
            onClick={() => {
              setLegacy((legacy: any) => [
                ...legacy,
                {
                  id: Math.random(),
                  recipient: 'Hello World',
                  recipientEmail: 'Wassup',
                  link: 'google.com',
                  dateRecorded: format(new Date(), 'yyyy/MM/dd'),
                },
              ]);
            }}
          >
            Add Legacy
          </Button>
        </Group>
      </>
    </Box>
  );
};
