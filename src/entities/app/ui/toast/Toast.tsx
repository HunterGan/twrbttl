import Box from "@/shared/ui/common/layouts/Box.tsx";
import { styled } from "@/shared/config/theme";
import { keyframes } from "@stitches/react";
import * as T from '@radix-ui/react-toast';
import { appSlice, SeverityType } from "@/entities/app";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/redux";
import Text from "@/shared/ui/common/Text";
import IconButton from "@/shared/ui/common/inputs/IconButton.tsx";
import SuccessIcon from "@/shared/assets/svg/success.svg?react";
import { ReactNode } from "react";

const titles: { [key in SeverityType]: string } = {
  success: 'Успешно',
  error: 'Ошибка',
  info: 'Сообщение',
  warning: 'Предупреждение'
}

const icons: { [key in SeverityType]: ReactNode } = {
  success: <SuccessIcon color="#26a544"/>,
  error: <SuccessIcon color="#E62900"/>,
  info: <SuccessIcon/>,
  warning: <SuccessIcon/>
}

const Toast = () => {
  const dispatch = useAppDispatch()

  const {toasts} = useAppSelector(state => state.appReducer)

  const {removeToast} = appSlice.actions

  return (
    <T.Provider
      swipeDirection="right"
      duration={6000}
    >
      {toasts.map((toast, index) => (
        <ToastRoot
          key={toast.id}
          onOpenChange={() => toast.id && dispatch(removeToast(toast.id))}
          css={{
            marginTop: index > 0 ? '4px' : 0
          }}
        >
          <ToastHeader>
            <Box
              css={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Box
                css={{
                  height: 14,
                  width: 14,
                  marginRight: '4px'
                }}
              >
                {icons[toast.severity]}
              </Box>
              <Text
                font="medium"
              >
                {toast.title || titles[toast.severity]}
              </Text>
            </Box>

            <Box
              css={{
                marginLeft: '4px'
              }}
            >
              <T.ToastAction
                asChild
                altText="Close"
              >
                <IconButton>
                  <SuccessIcon width={14} height={14}/>
                </IconButton>
              </T.ToastAction>
            </Box>
          </ToastHeader>

          <ToastContent>
            <ToastDescription>
              {toast.message}
            </ToastDescription>
          </ToastContent>
        </ToastRoot>
      ))}
      <ToastViewport/>
    </T.Provider>
  );
};

const VIEWPORT_PADDING = 24;

const ToastViewport = styled(T.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 999,
  outline: 'none',
  userSelect: 'none',
});

const hide = keyframes({
  '0%': {opacity: 1},
  '100%': {opacity: 0},
});

const slideIn = keyframes({
  from: {transform: `translateY(calc(100% + ${VIEWPORT_PADDING}px))`},
  to: {transform: 'translateY(0)'},
});

const swipeOut = keyframes({
  from: {transform: 'translateX(var(--radix-toast-swipe-end-x))'},
  to: {transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))`},
});

const ToastRoot = styled(T.Root, {
  backgroundColor: '$paper',
  border: '0.5px solid $stroke',
  borderRadius: '$radii$2',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  padding: '$1',
  width: 380,
  maxWidth: '100%',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
});

const ToastHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

const ToastContent = styled('div', {
  paddingLeft: '24px',
  paddingRight: '32px'
})

const ToastDescription = styled('div', {
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': 2,
  overflow: 'hidden',
  overflowWrap: 'anywhere',
})

export default Toast;
