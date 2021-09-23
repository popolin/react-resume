import { client, q } from '../config/db';

const username = process.env.REACT_APP_DB_USERNAME;

export const getResumeNode = async (language) => {
  console.log(`getResumeNode: locale(${language}) username(${username})`);
  try {
    const ret = await client.query(
      q.Get(
        q.Match(q.Index('find_resume'), language, username),
      ),
    );
    return ret.data.resume;
  } catch (error) {
    console.log(error);
    return null;
  }
};
