function Child(props) {
  console.log("re-render");

  return <>{props.children}</>;
}

export default Child;
