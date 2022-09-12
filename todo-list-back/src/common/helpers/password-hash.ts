import * as bcrypt from 'bcrypt';

export const passwordHash = async (password) => {
  const saltOrRounds = 10;
  const hash = await bcrypt.hash(password, saltOrRounds);
  return hash;
};
