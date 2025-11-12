export const sendMessage = async (req, res) => {
  console.log('message sent successfully ');
  res.status(200).json({ message: 'message sent successfully' });
};
