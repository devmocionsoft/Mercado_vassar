export const send = ( Ref, time ) => {
  const cube = Ref.current

  cube.style.transition = '';
  cube.style.transform = `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;

  const randomValue = Math.floor((Math.random() * 6) + 1);

  setTimeout(() => {
    cube.style.transition = `transform ${time}s`;

    switch(randomValue) {
      case 1:
          cube.style.transform = `rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`;
          break;
      case 2:
          cube.style.transform = `rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`;
          break;
      case 3:
          cube.style.transform = `rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`;
          break;
      case 4:
          cube.style.transform = `rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`;
          break;
      case 5:
          cube.style.transform = `rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)`;
          break;
      case 6:
          cube.style.transform = `rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`;
          break;
    };

  }, time * 10);

  return randomValue
}