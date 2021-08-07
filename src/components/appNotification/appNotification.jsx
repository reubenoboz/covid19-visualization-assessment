import { notification } from 'antd';

export const appNotification = (desc, title = 'Notification', type = 'info') => {
  notification[type]({
    message: title,
    description: desc,
  });
};
