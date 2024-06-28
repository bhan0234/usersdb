const update = "update users set uname = $1 where userid = $2";
const deleteid = "delete from users where userid = $1";
export {update,deleteid};