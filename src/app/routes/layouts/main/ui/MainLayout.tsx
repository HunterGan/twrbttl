import { FC, memo } from 'react';
import Box from "@/shared/ui/common/layouts/Box";
import { Outlet } from "react-router-dom";

const MainLayout: FC = memo(() => {

  return (
    <Box
      css={{
        height: '100%',
        width: '100%',
        display: 'flex',
        backgroundColor: '$contrastWhite'
      }}
    >
      <Box
        as="main"
        id="main"
        css={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          height: '100%',
          overflowX: 'hidden',
          overflowY: 'auto'
        }}
      >
        <Outlet/>
      </Box>
    </Box>
  );
})

export default MainLayout;
