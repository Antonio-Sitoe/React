export const handleDeleteUser = async (id) => {
 await fetch(`http://localhost:1337/usuarios/${id}`, {
    method: 'DELETE',
  });
};
export const handleUpdate = async () => {
  const r = await fetch(`http://localhost:1337/usuarios`);
  const j = await r.json();
  return j;
};
