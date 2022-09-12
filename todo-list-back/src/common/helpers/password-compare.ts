import * as bcrypt from 'bcrypt';

export const passwordCompare = async (password, passwordDatabase) => {
    const isMatch = await bcrypt.compare(password, passwordDatabase);
    return isMatch;
};
