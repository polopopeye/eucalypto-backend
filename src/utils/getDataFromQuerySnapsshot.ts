const getDataFromQuerySnapsshot = (snapshot) => {
  const todos: any[] = [];
  snapshot.forEach((doc) => todos.push({ id: doc.id, ...doc.data() }));
  return todos;
};

export default getDataFromQuerySnapsshot;
