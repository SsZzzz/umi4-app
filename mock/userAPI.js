const users = [
  { name: 'Umi', nickName: 'U', gender: 'MALE' },
  { name: 'Fish', nickName: 'B', gender: 'FEMALE' },
];

export default {
  'GET /api/v1/queryUserList': (req, res) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  'PUT /api/v1/user/': (req, res) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};
