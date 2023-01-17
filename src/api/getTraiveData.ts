const getTraiveData = async (page: number) => {
  const response  = await fetch('/traive-data', {
    method: 'POST',
    body: JSON.stringify({
      page: page,
      total: 10
    }),
  });
  return response.json();
};

export default getTraiveData;
