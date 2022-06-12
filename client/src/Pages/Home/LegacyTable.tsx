import {
  ActionIcon,
  Box,
  Button,
  Code,
  Group,
  Paper,
  Switch,
  Text,
  TextInput,
  Title,
  createStyles,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import {
  useGetLegacyQuery,
  usePatchLegacyMutation,
} from '../../Redux/API/legacySlice';
import { useId, useUuid } from '@mantine/hooks';

import { ILegacy } from '../../Types/index';
import { Key } from 'react';
import { RootState } from '../../Redux/store';
import { Trash } from 'tabler-icons-react';
import format from 'date-fns/format';
import { useSelector } from 'react-redux';

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,
    marginBottom: '2rem',

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },
}));

export const LegacyTable: React.FC = () => {
  // Get the user's id from the redux store
  const currentUser = useSelector((state: RootState) => state.user);
  // Table won't rendered when user isnt signed in
  if (!currentUser) {
    return null;
  }
  // Destructuring what is returned from RTK Query
  const [patchLegacy] = usePatchLegacyMutation();
  const { id: currentUserID } = currentUser;
  const { data, isLoading, error, isSuccess } =
    useGetLegacyQuery(currentUserID);
  const [legacy, setLegacy] = useState<ILegacy[]>([]);
  // Setting up legacy state

  const { classes } = useStyles();

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

  // Mapping over legacy state to create each row
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
        <TextInput
          placeholder="Recipient Email"
          required
          sx={{ flex: 1 }}
          value={link}
          onChange={(e) => {
            setLegacy((prev) => {
              const newLegacy = {
                ...prev[index],
                link: e.target.value,
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
      <Title align="center">Legacies</Title>
      {fields.length > 0 ? (
        <Group mb="xs">
          <Text weight={500} size="sm" sx={{ flex: 2 }} pr={0}>
            Name
          </Text>
          <Text weight={500} size="sm" sx={{ flex: 2 }} pr={0}>
            Email
          </Text>
          <Text weight={500} size="sm" sx={{ flex: 2 }} pr={30}>
            Link
          </Text>
        </Group>
      ) : (
        <Text color="dimmed" align="center">
          No one here...
        </Text>
      )}

      {fields}

      <Group position="center" mt="md">
        {/* <Button
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
        </Button> */}
        <Button
          onClick={async () => {
            console.log(legacy, currentUserID);
            const res = await patchLegacy({
              userID: currentUserID,
              updates: legacy,
            });
            console.log(res);
          }}
        >
          Console Log Legacy
        </Button>
      </Group>
    </Box>
  );
};
