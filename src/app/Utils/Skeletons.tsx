'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import { useMediaQuery, useTheme } from '@mui/material';

export function ProductsSkeleton() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.down('xl'));

  return (
    <>
      <Box
        sx={{
          height: '175px',
          width: '100vw',
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: 'rgba(128, 128, 128, 0.423) solid 1px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: ' space-between',
            padding: '20px',
          }}
        >
          <Skeleton
            sx={{
              width: '80px',
              height: '32px',
            }}
          />
          <Skeleton
            sx={{
              marginTop: '-20px',
              width: '120px',
              height: '32px',
            }}
            animation="wave"
          />
          <Skeleton
            sx={{
              width: '50px',
              height: '32px',
            }}
            animation={false}
          />
        </Box>
        <Box
          sx={{
            height: '135px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: ' space-between',
          }}
        >
          <Skeleton variant="rounded" width={90} height={90} />
          <Skeleton
            sx={{
              alignSelf: 'flex-end',
            }}
            variant="circular"
            width={28}
            height={28}
          />
        </Box>
      </Box>
      <Box
        sx={{
          height: '175px',
          width: '100vw',
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: 'rgba(128, 128, 128, 0.423) solid 1px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: ' space-between',
            padding: '20px',
          }}
        >
          <Skeleton
            sx={{
              width: '80px',
              height: '32px',
            }}
          />
          <Skeleton
            sx={{
              marginTop: '-20px',
              width: '120px',
              height: '32px',
            }}
            animation="wave"
          />
          <Skeleton
            sx={{
              width: '50px',
              height: '32px',
            }}
            animation={false}
          />
        </Box>
        <Box
          sx={{
            height: '135px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: ' space-between',
          }}
        >
          <Skeleton variant="rounded" width={90} height={90} />
          <Skeleton
            sx={{
              alignSelf: 'flex-end',
            }}
            variant="circular"
            width={28}
            height={28}
          />
        </Box>
      </Box>
      <Box
        sx={{
          height: '175px',
          width: '100vw',
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: 'rgba(128, 128, 128, 0.423) solid 1px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: ' space-between',
            padding: '20px',
          }}
        >
          <Skeleton
            sx={{
              width: '80px',
              height: '32px',
            }}
          />
          <Skeleton
            sx={{
              marginTop: '-20px',
              width: '120px',
              height: '32px',
            }}
            animation="wave"
          />
          <Skeleton
            sx={{
              width: '50px',
              height: '32px',
            }}
            animation={false}
          />
        </Box>
        <Box
          sx={{
            height: '135px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: ' space-between',
          }}
        >
          <Skeleton variant="rounded" width={90} height={90} />
          <Skeleton
            sx={{
              alignSelf: 'flex-end',
            }}
            variant="circular"
            width={28}
            height={28}
          />
        </Box>
      </Box>
    </>
  );
}

export function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '18px' }}>
      <CircularProgress />
    </Box>
  );
}

export function SimpleBackdrop() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Show backdrop</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
