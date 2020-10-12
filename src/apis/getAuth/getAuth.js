import api from '../../lib/api';

const getUser = () => api.get('/auth');

export default getUser;

// const getUser = () =>
//   fetch("http://localhost:3000/api/auth", {
//     method: "GET",
//     headers: {
//       "X-Auth-Token": localStorage.getItem('token')
//     },
//   });
// export default getUser;