import {} from '@mantine/core';

import { Box, Button, TextInput } from '@mantine/core';
import { Dropzone, DropzoneStatus, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { Group, MantineTheme, Text, useMantineTheme } from '@mantine/core';
import { Photo, Icon as TablerIcon, Upload, X } from 'tabler-icons-react';

import React from 'react';
import { RootState } from '../../Redux/store';
import { createStyles } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { usePostLegacyMutation } from '../../Redux/API/legacySlice';
import { useSelector } from 'react-redux';

export interface IUser {
  id: string;
  firstName: string;
  middleName: string | null;
  lastName: string;
  email: string;
  phone: string;
}

function getIconColor(status: DropzoneStatus, theme: MantineTheme) {
  return status.accepted
    ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
    : status.rejected
    ? theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
    : theme.colorScheme === 'dark'
    ? theme.colors.dark[0]
    : theme.colors.gray[7];
}

function ImageUploadIcon({
  status,
  ...props
}: React.ComponentProps<TablerIcon> & { status: DropzoneStatus }) {
  if (status.accepted) {
    return <Upload {...props} />;
  }

  if (status.rejected) {
    return <X {...props} />;
  }

  return <Photo {...props} />;
}

export const dropzoneChildren = (
  status: DropzoneStatus,
  theme: MantineTheme
) => (
  <Group
    position="center"
    spacing="xl"
    style={{ minHeight: 220, pointerEvents: 'none' }}
  >
    <ImageUploadIcon
      status={status}
      style={{ color: getIconColor(status, theme) }}
      size={80}
    />

    <div>
      <Text size="xl" inline>
        Drag images here or click to select files
      </Text>
      <Text size="sm" color="dimmed" inline mt={7}>
        Attach as many files as you like, each file should not exceed 500Mb
      </Text>
    </div>
  </Group>
);

const useStyles = createStyles((theme) => ({
  dropzone: {
    border: `1px dashed ${theme.colors.gray[7]}`,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.md,
    margin: theme.spacing.md,
    cursor: 'pointer',
    '&:hover': {
      borderColor: theme.colors.gray[7],
    },
  },
}));

export const AddLegacyUser = () => {
  const [patchLegacy] = usePostLegacyMutation();
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const addUserForm = useForm({
    initialValues: {
      recipientEmail: '',
      recipient: '',
      link: '',
      file: [new File([], '')],
    },
  });

  const currentUser: null | IUser = useSelector(
    (state: RootState) => state.user
  );

  const handleSubmit = async () => {
    const data = {
      ...addUserForm.values,
      link: 'google.com',
      userID: currentUser!.id,
    };
    console.log(data);
    await patchLegacy(data);
  };

  // validate: {
  //   recipientEmail: (value) => {
  //     email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email');
  //   },
  // },

  return (
    <Box sx={{ maxWidth: 340 }} mx="auto">
      <form onSubmit={addUserForm.onSubmit((values: any) => handleSubmit())}>
        <TextInput
          label="Receipient's Full Name"
          placeholder="Name"
          {...addUserForm.getInputProps('recipient')}
        />
        <TextInput
          mt="sm"
          label="Receipient's Email"
          placeholder="Email"
          {...addUserForm.getInputProps('recipientEmail')}
        />

        <Dropzone
          className={classes.dropzone}
          onDrop={(files) => {
            addUserForm.setFieldValue('file', files);
          }}
          onReject={(files) => console.log('rejected files', files)}
          maxSize={300 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
        >
          {(status) => dropzoneChildren(status, theme)}
        </Dropzone>
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
};
