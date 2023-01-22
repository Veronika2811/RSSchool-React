const cardLabel = (status: string | undefined) => {
  return status === 'Dead' ? '#EC2D01' : status === 'Alive' ? '#76c076' : '#808080';
};

export default cardLabel;
