export const useButton = (props: any, emit: any) => {
  if (props.plain) { /* empty */ }
  const handleClick = (evt: MouseEvent) => {
    if (props.disabled) return;
    emit('click', evt);
  };

  return {
    handleClick,
  };
};
