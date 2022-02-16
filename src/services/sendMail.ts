import axios from 'axios';
export const sendContactEmail = async (
  name: string,
  senderMail: string,
  content: string
) => {
  const data = {
    name,
    senderMail,
    content
  };

  try {
    return await axios.post('/api/envioEmail', data);
  } catch (error) {
    return error;
  }
};
