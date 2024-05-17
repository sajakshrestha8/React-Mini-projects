function Button(porps) {
  return (
    <>
      <input type="text" value={porps.name} onClick={porps.click}></input>
    </>
  );
}

export default Button;
