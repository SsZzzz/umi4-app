const users = [
  { key: 'Umi', name: 'Umi', nickName: 'U', gender: 'MALE' },
  { key: 'Fish', name: 'Fish', nickName: 'B', gender: 'FEMALE' },
  { key: 'Java', name: 'Java', nickName: 'J', gender: 'FEMALE' },
  { key: 'JavaScript', name: 'JavaScript', nickName: 'JS', gender: 'FEMALE' },
  { key: 'React', name: 'React', nickName: 'R', gender: 'MALE' },
  { key: 'Vue', name: 'Vue', nickName: 'V', gender: 'FEMALE' },
  { key: 'CSS', name: 'CSS', nickName: 'C', gender: 'MALE' },
  { key: 'HTML', name: 'HTML', nickName: 'H', gender: 'MALE' },
  { key: 'Node', name: 'Node', nickName: 'N', gender: 'FEMALE' },
  { key: 'TypeScript', name: 'TypeScript', nickName: 'TS', gender: 'FEMALE' },
];

export default {
  'GET /api/v1/queryUserList': (req, res) => {
    setTimeout(() => {
      res.json({
        success: true,
        message: '成功',
        data: { list: users, total: 100 },
        errorCode: 0,
      });
    }, 300);
  },
  'PUT /api/v1/user/': (req, res) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};
